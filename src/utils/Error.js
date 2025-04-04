/*

class AppError extends Error {

    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
      this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
  
      Error.captureStackTrace(this, this.constructor);
    }

}
  

export default AppError;

*/
// This code defines a custom error class called AppError that extends the built-in Error class in JavaScript.