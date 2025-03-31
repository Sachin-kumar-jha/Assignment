export class CustomError extends Error {
    statusCode: number;
  
    constructor(message: string, statusCode: number) {
      super(message);
      this.statusCode = statusCode;
      Object.setPrototypeOf(this, new.target.prototype);
    }
  }
  
  export class NotFoundError extends CustomError {
    constructor(message = "Resource not found") {
      super(message, 404);
    }
  }

  export class DatabaseEntryError extends CustomError {
    constructor(message = "Failed to create database entry") {
      super(message, 500); // Internal Server Error
    }
}
  export class BadRequestError extends CustomError{
    constructor(message = "Bad Request"){
      super(message,400);
    }
  }
  