class ErrorHandler extends Error {
  constructor(message, statusCode) {
      super();

      this.statusCode = statusCode;
      this.message = message;
  }
}

const handleError = (err, res) => {
  const { statusCode, message } = err;
  res.status(statusCode).json({
    status: "error",
    statusCode,
    message
  });
};

module.exports = {
  ErrorHandler,
  handleError
};
