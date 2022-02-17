class HttpError extends Error {
  constructor(status, message) {
    super();
    this.message = message;
    this.status = status || 500;
  }
}

module.exports = HttpError;
