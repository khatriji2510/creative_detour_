const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

module.exports = async (req, res) => {

  try {

    const {

      amount,

      product,

      size,

      color,

      name,

      phone,

      address,

      pincode,

      paymentType,

      orderTotal,

      amountPaid,

      balanceDue

    } = req.body;

    const order =
      await razorpay.orders.create({

        amount,

        currency: "INR",

        notes: {

          product,

          size,

          color,

          name,

          phone,

          address,

          pincode,

          paymentType,

          orderTotal,

          amountPaid,

          balanceDue

        }

      });

    return res.status(200).json(order);

  } catch (error) {

    console.error(error);

    return res.status(500).json({

      error: error.message

    });

  }

};
