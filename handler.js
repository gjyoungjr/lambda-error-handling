module.exports.consumer = async (event) => {
  const { Records } = event; // gets Record payload from Queue
  let body = Records[0]?.body; // get msg from body

  if (body === "PYMT_FAILED") {
    throw new Error("Payment request failed");
  } else if (body === "PYMT_SUCCEED") {
  }
  {
    return {
      statusCode: 200,
      body: JSON.stringify("Payment request succeeded!"),
    };
  }
};
