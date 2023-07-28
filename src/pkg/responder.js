const CustomError = require("./error");

function generateResponse(res, code, message, data) {
  const modelResponse = {
    code: code,
    message: message,
    data: data,
  };
  res.json(modelResponse);
}

const responseError = (res, error) => {
  console.log(error);
  if (error instanceof CustomError) {
    generateResponse(res, error.code, error.message, null);
    return;
  }
  generateResponse(res, 500, "internal server error", null);
};

module.exports = { generateResponse, responseError };
