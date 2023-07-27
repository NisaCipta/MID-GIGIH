const CustomError = require("./error");

function generateResponse(code, message, data) {
  return {
    code: code,
    message: message,
    data: data,
  };
}

const responseError = (res, error) => {
  if (error instanceof CustomError) {
    console.error("Custom error caught:");
    console.error("Error Code:", error.code);
    console.error("Error Message:", error.message);
    // Additional handling for the custom error if needed
    res.status(error.code).json(generateResponse(error.code, error.message, null));
    return
  }

  // Handle other types of errors here
  res.status(500).json(generateResponse(500, error.message, null));
};

module.exports = { generateResponse, responseError };
