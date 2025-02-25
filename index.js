const express = require('express');
const cors = require('cors');
const Razorpay = require('razorpay');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const { validateWebhookSignature } = require('razorpay/dist/utils/razorpay-utils');
const { generateUser_id } = require('./user_id.js')
const { validateJWT, generateJWT } = require('./jwt_token')
const { db, db_promise } = require('./db');
const { timeLeft } = require("./script.js");
const { verify } = require('jsonwebtoken');
const e = require('express');
const { match_info, upcoming_matches, ranking_order } = require('./match_data.js');
const { type } = require('os');
const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader('X-Powered-By', 'Node.js');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


const razorpay = new Razorpay({
  key_id: 'rzp_test_GO24k5LqGpRyRK',
  key_secret: 'McNBNXvoWbX8llkHd3EggW4S',
});

const readData = () => {
  if (fs.existsSync('orders.json')) {
    const data = fs.readFileSync('orders.json');
    return JSON.parse(data);
  }
  return [];
};
const writeData = (data) => {
  fs.writeFileSync('orders.json', JSON.stringify(data, null, 2));
};
app.get('/', (req, res) => {
  res.json({
    status: "success",
    msg: 'Hello World'
  });
});
app.post('/api/login', (req, res) => {

  try {

    let { mail_id, password } = req.body
    if (mail_id == "" || password == "") {
      throw new Error("Maild not found");


    }
    let query = `select * from user_details where mail_id=?`;
    db.query(query, [mail_id], (err, result) => {
      if (err) {
        return res.status(500).json({
          status: "failed",
          msg: "unknown error occured"
        })
      }

      if (result.length == 0) {
        res.json({
          status: "Login Failed",
          msg: "Mail id or password is in correct"
        })
        return;
      }
      if (password == result[0].user_token) {
        const jwt_token = generateJWT(result[0].user_id);
        res.json({
          status: "success",
          auth_token: jwt_token
        })
        return;
      }

      else {
        res.json({
          status: "Login Failed",
          msg: "Mail id or password is in correct"
        })
        return;
      }
    })
  } catch (err) {
    res.json({
      status: "failed",
      msg: "Enter all the fields"
    })
  }

})
app.get('/api/matches', (req, res) => {

  const token = req.header('Authorization')?.replace('Bearer ', '');
  try {
    const decoded_token = validateJWT(token)
    const query = "select * from matches";
    db.query(query, (err, result) => {
      if (err) {
        res.status(500).json({ error: "Fetch Failed" })
        return;
      }
      res.json(result)
      return;
    })

  }
  catch (error) {
    res.json({
      status: "failed",
      msg: "Invalid or expired token"
    })
    return;
  }
});
app.get('/api/match/:id', async (req, res) => {

  const token = req.header('Authorization')?.replace('Bearer ', '');
  try {
    const decoded_token = validateJWT(token)
    let id = req.params.id;
    if (!Number.isInteger(Number(id))) {
      res.status(400).json({ error: "Invalid match ID" });
      return;
    }
    let match_data = await upcoming_matches([parseInt(id)]);

    if (!match_data.length) {
      return res.status(400).json({
        status: "Failed",
        msg: "No match data found"
      })

    }
    res.json(match_data[0])
  }
  catch (error) {
    res.status(400).json({
      status: "failed",
      msg: "Invalid or expired token"
    })
    return;
  }
})
app.get('/api/contest/:id', (req, res) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  try {
    const decoded_token = validateJWT(token);
    let id = req.params.id;
    if (!Number.isInteger(Number(id))) {
      res.status(400).json({ error: "Invalid match ID" });
      return;
    }
    const query = `select * from contest where match_id= ?`;

    db.query(query, [id], async (err, result) => {
      if (err) {
        res.status(500).json({ "error": err.message })
        return;
      }
      if (result.length == 0) {
        res.json({
          status: "Failed",
          msg: "No data found"
        });
        return;
      }
      res.json({ contest: result })
    })
  }
  catch (error) {
    if (error.message == "Invalid or expired token") {
      return res.status(401).json({ status: "Failed", msg: "Invalid or expired token" });

    } else {
      return res.status(500).json({ status: "Failed", msg: error.message });
    }
  }
})
app.get('/api/user', (req, res) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  try {
    const decoded_token = validateJWT(token)
    res.json({
      status: "success",
      msg: "user alive"
    })

  } catch (error) {
    res.json({
      status: "failed",
      msg: "Invalid or expired token"
    })

  }
})
app.post('/api/rotate-token', (req, res) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  try {
    const decoded_token = validateJWT(token)
    let jwt_token = token
    let exp_time = decoded_token.exp - Math.floor(Date.now() / 1000)
    if (exp_time <= 300) {
      jwt_token = generateJWT(decoded_token.userId);
    }
    res.json({
      status: "success",
      auth_token: jwt_token
    })
    return;
  } catch (error) {
    res.json({
      status: "failed",
      msg: "Invalid or expired token"
    })
  }
})
app.post('/api/add-cash', async (req, res) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  try {
    const decoded_token = validateJWT(token)
    let exp_time = decoded_token.exp - Math.floor(Date.now() / 1000)
    if (exp_time <= 300) {
      throw new Error("The token is about to end");
    }
    try {
      const { amount, currency, receipt, notes } = req.body;
      const options = {
        amount: amount * 100, // Convert amount to paise
        currency,
        receipt,
        notes
      };
      const order = await razorpay.orders.create(options);
      // Read current orders, add new order, and write back to the file
      const orders = readData();
      orders.push({
        order_id: order.id,
        amount: order.amount,
        currency: order.currency,
        receipt: order.receipt,
        status: 'created'
      });
      writeData(orders);
      res.json(order); // Send order details to frontend, including order ID
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 'failed',
        msg: 'error creating order'
      });
    }
  } catch (error) {
    res.json({
      status: "failed",
      msg: "Invalid or expired token"
    })
  }
})
app.post('/api/verify-payment', async (req, res) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  const secret = razorpay.key_secret;
  const body = razorpay_order_id + '|' + razorpay_payment_id;

  try {
    // Validate JWT token
    const decoded_token = validateJWT(token);
    if (!decoded_token) {
      return res.status(401).json({ status: 'Failed', msg: 'Unauthorized' });
    }

    // Validate Razorpay webhook signature
    const isValidSignature = validateWebhookSignature(body, razorpay_signature, secret);
    if (!isValidSignature) {
      return res.status(400).json({ status: 'Failed', msg: 'Payment verification failed: Invalid signature' });
    }

    // Update the order with payment details
    const orders = readData();
    const order = orders.find(o => o.order_id === razorpay_order_id);
    if (!order) {
      return res.status(404).json({ status: 'Failed', msg: 'Order not found' });
    }

    if (order.status !== 'paid') {
      order.status = 'paid';
      order.payment_id = razorpay_payment_id;
      writeData(orders);

      // Update user funds in the database
      const query = "UPDATE `user_details` SET `funds` = `funds` + ? WHERE `user_id` = ?";
      db.query(query, [(order.amount) / 100, decoded_token.userId], (err, result) => {
        if (err) {
          console.error('Database error:', err);
          return res.status(500).json({ status: 'Failed', msg: 'Payment verification failed: Database error' });
        }

        return res.json({ status: 'Success', msg: 'Payment verification successful' });
      });
    } else {
      return res.json({ status: 'Success', msg: 'Payment already verified' });
    }
  } catch (error) {
    console.error('Error verifying payment:', error);
    res.status(500).json({ status: 'Failed', msg: 'Error verifying payment' });
  }
});
app.get('/api/user/funds', (req, res) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  try {
    const decoded_token = validateJWT(token)
    query = "SELECT funds FROM user_details WHERE user_id=?";
    db.query(query, [decoded_token.userId], (err, result) => {

      res.json(result[0])
    })

  }
  catch (error) {
    res.json({
      status: "failed",
      msg: "Invalid or expired token"
    })
  }
});
app.post('/api/register/contest/:contest_id', async (req, res) => {
  const { match_id } = req.body;
  const token = req.header('Authorization')?.replace('Bearer ', '');
  const contest_id = req.params.contest_id;

  try {
    // Validate JWT
    const decoded_token = validateJWT(token);
    if (!decoded_token || !decoded_token.userId) {
      return res.status(401).json({ status: "Failed", msg: "Invalid or expired token" });
    }

    // Validate input
    if (!Number.isInteger(Number(contest_id)) || !Number.isInteger(Number(match_id))) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    // Check if match exists and has not started

    const match_status = "SELECT match_time,date_wise FROM matches WHERE match_id = ?";
    const [match] = await db_promise.execute(match_status, [match_id]);

    if (!match.length) {
      return res.status(404).json({ status: "Failed", msg: "Match not found" });
    }
    if (timeLeft(match[0].date_wise, match[0].match_time) === "Live" || timeLeft(match[0].date_wise, match[0].match_time) == null) {
      return res.status(400).json({ status: "Failed", msg: "The Match is Live" });
    }

    // Check if contest exists
    const contest_check = "SELECT entry_fee FROM contest WHERE match_id = ? AND contest_id = ?";
    const [contest] = await db_promise.execute(contest_check, [match_id, contest_id]);
    if (!contest.length) {
      return res.status(404).json({ status: "Failed", msg: "Contest not found" });
    }

    // Check user funds
    const handle_fund = "SELECT funds FROM user_details WHERE user_id = ?";
    const [user] = await db_promise.execute(handle_fund, [decoded_token.userId]);
    if (!user.length) {
      return res.status(404).json({ status: "Failed", msg: "User not found" });
    }
    const entry_fee = contest[0].entry_fee;
    if (user[0].funds < entry_fee) {
      return res.status(400).json({ status: "Failed", msg: "Insufficient Funds" });
    }

    // Check if user is already registered
    const check_register = "SELECT * FROM registered_contest WHERE user_id = ? AND match_id = ? AND contest_id = ?";
    const [existingRegistration] = await db_promise.execute(check_register, [decoded_token.userId, match_id, contest_id]);
    if (existingRegistration.length > 0) {
      return res.status(400).json({ status: "Failed", msg: "User Already Registered In The Contest" });
    }

    //check wheather the contest is not full
    const spots_check_query = "SELECT spots_available FROM contest WHERE match_id=? AND contest_id=?"
    const [spots_check] = await db_promise.execute(spots_check_query, [match_id, contest_id])
    if (spots_check[0].spots_available == 0) {
      return res.status(400).json({ status: "Failed", msg: "The contest is already full" });
    }


    // Start transaction
    const connection = await db_promise.getConnection();

    try {
      await connection.beginTransaction();

      // Deduct funds
      const deductFundsQuery = 'UPDATE user_details SET funds = funds - ? WHERE user_id = ?';
      await connection.execute(deductFundsQuery, [entry_fee, decoded_token.userId]);

      // Register user
      const registerContestQuery = `
        INSERT INTO registered_contest (user_id, match_id, contest_id, entry_fee)
        VALUES (?, ?, ?, ?)
      `;
      await connection.execute(registerContestQuery, [decoded_token.userId, match_id, contest_id, entry_fee]);

      //Increase Register Count
      const update_count = "UPDATE contest SET spots_available=spots_available-1 WHERE contest_id=? and match_id=?"
      await connection.execute(update_count, [contest_id, match_id]);

      // Commit transaction
      await connection.commit();
      return res.status(200).json({ status: "Success", msg: "Join Success" });

    } catch (error) {
      // Rollback transaction on error
      await connection.rollback();
      console.error("Transaction error:", error);
      return res.status(500).json({ status: "Failed", msg: "Join Failed" });

    } finally {
      // Release connection
      connection.release();
    }

  } catch (error) {
    if (error.message == "Invalid or expired token") {
      return res.status(401).json({ status: "Failed", msg: "Invalid or expired token" });

    } else {

      return res.status(500).json({ status: "Failed", msg: error.message });

    }
  }
});
app.get('/api/user/contest/:match_id', (req, res) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  try {
    const decoded_token = validateJWT(token)
    let match_id = req.params.match_id;
    let query = "SELECT * FROM registered_contest WHERE user_id=? and match_id=?"
    db.query(query, [decoded_token.userId, match_id], (err, result) => {
      if (err) {
        res.status(500).json({
          status: "Failed",
          msg: "DataBase connection error"
        })

      }
      if (!result.length) {
        return res.status(200).json({
          status: "success",
          msg: "No contest's joined"
        })
      }
      return res.json(result)
    })

  } catch (error) {
    return res.status(401).json({ status: "Failed", msg: "Invalid or expired token" });

  }
})

app.get('/api/rankings/:match_id/:contest_id', async (req, res) => {

  try {
    let { match_id, contest_id } = req.params;
    let match_query = "SELECT * FROM contest WHERE match_id=? and contest_id=?"
    let match_query_result = await db_promise.execute(match_query, [match_id, contest_id])
    let query_result = match_query_result[0]
    if (!query_result.length) {
      return res.status(400).json({
        status: "Failed",
        msg: "No match data found"
      })
    }
    result = query_result[0]
    let max_prize = JSON.parse(result.prize_order)
    let prize_order = []
    for (const [stage, value] of Object.entries(max_prize)) {
      const [rankPart, prize] = value.split(':');
      let order_temp = []
      if (rankPart.includes('-')) {
        const [startRank, endRank] = rankPart.split('-').map(Number);
        order_temp.push(startRank, endRank, Number(prize))
        prize_order.push(order_temp)
      } else {
        // Handle single rank
        const rank = parseInt(rankPart, 10);
        order_temp.push(rank, rank, Number(prize))
        prize_order.push(order_temp)
      }
    }

    let registeredPlayers = result.total_spots - result.spots_available;
    let totalEntry = result.total_spots;
    let entryFee = result.entry_fee
    let platformFeeFilled = result.platform_filler_fee
    let platformFeePercentNotFilled = result.platform_fee
    const cnFilled = registeredPlayers === totalEntry;
    let current_fill;


    if (registeredPlayers < result.minimum_players) {
      current_fill = {
        data: "Winners will be added soon...!"
      }
    }
    else {
      current_fill = ranking_order(registeredPlayers,
        entryFee,
        platformFeeFilled,
        platformFeePercentNotFilled,
        prize_order,
        cnFilled)
    }
    let max_fill = ranking_order(totalEntry,
      entryFee,
      platformFeeFilled,
      platformFeePercentNotFilled,
      prize_order,
      true)
    if (result.type == "practice") {
      return res.json({ data: "Practice contest" })
    }
    res.json({ max_fill, current_fill })


  } catch (error) {
    console.log(error);
    return res.status(400).json({
      status: "Failed",
      msg: "Invalid or expired token"
    })
  }
})

app.get('/api/upcoming_matches', async (req, res) => {

  const token = req.header('Authorization')?.replace('Bearer ', '');
  try {
    const decoded_token = validateJWT(token)
    let upcoming_matches_data = await upcoming_matches();
    if (!upcoming_matches_data.length) {
      return res.status(404).json({
        "Failed":"No data found"
      })
    }
    else {

      return res.json(upcoming_matches_data)
    }
  } catch (error) {
    return res.status(401).json({ status: "Failed", msg: "Invalid or expired token" });

  }
})
app.get('/api/live_match/overs/', (req, res) => {
  res.json(match_overs())
})

app.get('/api/live_match/info/', (req, res) => {
  res.json(match_info())
})
app.get("*", (req, res) => {
  res.send("404 page not found")
});
app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
