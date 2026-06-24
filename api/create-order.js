const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

module.exports = async (req, res) => {

  try {

    const order = await razorpay.orders.create({
      amount: 100,
      currency: "INR"
    });

    return res.status(200).json(order);

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      error: error.message
    });

  }

};
