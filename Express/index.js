const express = require('express');
const cors = require('cors');
const Razorpay = require('razorpay');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const { validateWebhookSignature } = require('razorpay/dist/utils/razorpay-utils');
const { generateUser_id } = require('./user_id.js')
const { validateJWT, generateJWT } = require('./jwt_token')
const db = require('./db');
const exp = require('constants');
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
  res.setHeader('Cache-Control', 'no-cache');
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
app.post('/', (req, res) => {
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
        res.status(500).json({
          status: "failed",
          msg: "unknown error occured"
        })
        console.log(err)
        return;
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
        console.log(err);
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

app.get('/api/contest/:id', (req, res) => {

  const token = req.header('Authorization')?.replace('Bearer ', '');
  try {
    const decoded_token = validateJWT(token)
    let id = req.params.id;
    const query = `select * from matches where match_id= ?`;

    db.query(query, [id], (err, result) => {
      if (err) {
        res.status(500).json({ "error": "unkown error occured" })
        return;
      }
      if (!Number.isInteger(Number(id))) {
        res.status(400).json({ error: "Invalid match ID" });
        return;
      }
      if (result.length == 0) {
        res.json({
          status: "failed",
          msg: "no data found"
        });
        return;
      }
      let match_data = [
        {
          match_id: result[0].match_id,
          team1_img: result[0].team1_img,
          team2_img: result[0].team2_img,
          team1_nick: result[0].team1_nick,
          team2_nick: result[0].team2_nick
        }]
      res.json(match_data)
    })
  }
  catch (error) {
    res.json({
      status: "failed",
      msg: "Invalid or expired token"
    })
    return;
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
      console.log(options);
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
app.post('/api/verify-payment', (req, res) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  const secret = razorpay.key_secret;
  const body = razorpay_order_id + '|' + razorpay_payment_id;

  try {
    const decoded_token = validateJWT(token)

    const isValidSignature = validateWebhookSignature(body, razorpay_signature, secret);
    if (isValidSignature) {
      // Update the order with payment details
      const orders = readData();
      const order = orders.find(o => o.order_id === razorpay_order_id);
      if (order) {
        order.status = 'paid';
        order.payment_id = razorpay_payment_id;
        writeData(orders);
        query = "UPDATE `user_details` SET `funds`= `funds` +? WHERE `user_id`=?"
        db.query(query, [(order.amount) / 100, decoded_token.userId], (err, result) => {
          if (err) {
            res.json({
              status: "Failed",
              msg: "Payment Verification Failed"
            })
          }
          res.json({
            status: "Success",
            msg: "Payment Verification Successfull"
          })
        })
      }

    } else {
      res.status(400).json({ status: 'verification_failed' });
      console.log("Payment verification failed");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Error verifying payment' });
  }
});
app.get('/api/user/funds', (req, res) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  try {
    const decoded_token = validateJWT(token)
    query = "SELECT funds FROM user_details WHERE user_id=?";
    db.query(query, [decoded_token.userId], (err, result) => {
      console.log(result);

      res.json(result[0])
    })

  }
  catch (error) {
    console.log(error);

    res.json({
      status: "failed",
      msg: "Invalid or expired token"
    })
  }
})






app.get("*", (req, res) => {
  res.send("404 page not found")
});



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
