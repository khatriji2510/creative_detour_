const crypto = require("crypto");

module.exports = async (req, res) => {

  try {

    const signature =
      req.headers["x-razorpay-signature"];

    const body =
      JSON.stringify(req.body);

    const expectedSignature =
      crypto
        .createHmac(
          "sha256",
          process.env.WEBHOOK_SECRET
        )
        .update(body)
        .digest("hex");

    if (signature !== expectedSignature) {

      return res
        .status(400)
        .json({
          success: false,
          message: "Invalid Signature"
        });

    }

    console.log(
      "Webhook Event:",
      req.body.event
    );

    console.log(
      req.body.payload
    );

    return res
      .status(200)
      .json({
        success: true
      });

  } catch (error) {

    console.error(error);

    return res
      .status(500)
      .json({
        success: false
      });

  }

};
