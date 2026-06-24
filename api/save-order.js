module.exports = async (req, res) => {

  try {

    const response =
      await fetch(
        "https://script.google.com/macros/s/AKfycbwRkdHNAo-QoVlVr1tIZvAphDXMTphOm_vswOCn9W4vTCM0cjlFfHPuTAfmj1lQe7b5/exec",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json"
          },
          body: JSON.stringify(
            req.body
          )
        }
      );

    const result =
      await response.text();

    return res.status(200).json({
      success: true,
      result
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false
    });

  }

};
