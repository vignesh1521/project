let server = new URL(location)
server.port = 8080
window.onload = () => {
  document.getElementById("amount-input").value = '';
  server.pathname = '/api/user/funds'
  fetch(server, {
    headers: {
      "Content-Type": 'application/json',
      "Authorization": localStorage.getItem('auth_token') ? `Bearer ${localStorage.getItem('auth_token')}` : ''
    }
  }).then((res) => {
    return res.json()
  }).then((data) => {
    if (data.status == "failed") {
      window.location = '/login';
      return;
    }

    fund.innerText="₹"+data.funds
  })
}
function setAmount(value) {
  document.getElementById("amount-input").value = value;
}
function userStatus() {
  server.pathname = '/api/rotate-token'
  fetch(server, {
    method: "POST",
    headers: {
      "content-type": 'application/json',
      "Authorization": localStorage.getItem('auth_token') ? `Bearer ${localStorage.getItem('auth_token')}` : ''

    }
  }).then((res) => {
    return res.json()
  }
  ).then((data) => {
    if (data.status == 'failed') {
      msg.style.display = "block";
      msg.innerText = data.msg;
      return;
    }
    localStorage.setItem('auth_token', data.auth_token)
    addCash();
  })
}

async function addCash() {
  server.pathname = '/api/add-cash';
  jsonData = {
    request: "Create Order",
    amount: document.getElementById('amount-input').value,
    currency: 'INR',
    receipt: 'receipt#1',
    notes: {}
  }
  await fetch(server, {
    method: "POST",
    headers: {
      "content-type": 'application/json',
      "Authorization": localStorage.getItem('auth_token') ? `Bearer ${localStorage.getItem('auth_token')}` : ''

    },
    body: JSON.stringify(jsonData)
  }).then((res) => {
    return res.json()
  }).then((data) => {
    if (data.status == 'failed' && data.msg == "Invalid or expired token") {
      window.location = '/login';
      msg.style.display = "block";
      msg.innerText = data.msg;
      console.log(data);
      return;
    }

    const options = {
      key: 'rzp_test_GO24k5LqGpRyRK',
      amount: data.amount,
      currency: data.currency,
      name: 'Your Company Name',
      description: 'Test Transaction',
      order_id: data.id, // This is the order_id created in the backend
      callback_url: 'http://localhost:3000/payment-successs', // Your success URL
      prefill: {
        name: 'Your Name',
        email: 'your.email@example.com',
        contact: '9999999999'
      },
      theme: {
        color: '#F37254'
      },
      handler: function (response) {
        server.pathname = '/api/verify-payment';
        fetch(server, {
          method: 'POST',
          headers: {
            "content-type": 'application/json',
            "Authorization": localStorage.getItem('auth_token') ? `Bearer ${localStorage.getItem('auth_token')}` : ''
          },
          body: JSON.stringify({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature
          })
        }).then(res => res.json())
          .then(data => {
            if (data.status === 'Success') {
              console.log("payment success");

            } else {
              alert('Payment verification failed');
            }
          }).catch(error => {
            console.error('Error:', error);
            alert('Error verifying payment');
          });
      }
    };

    const rzp = new Razorpay(options);
    rzp.open();
  })
}