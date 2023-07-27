class CustomError extends Error {
  constructor(code, message) {
    // Call the parent class constructor (Error) with the provided message
    super(message);

    // Set the name of the custom error (optional but helpful for identification)
    this.name = "CustomError";

    // Set the error code
    this.code = code;

    // Capture the current stack trace for better debugging (optional)
    Error.captureStackTrace(this, CustomError);
  }
}

module.exports = CustomError;
