class GeneralError extends Error {
    constructor(message = 'error') {
      super()
      this.message = message
    }
  
    getCode() {
      if (this instanceof BadRequest) {
        return 400
      } if (this instanceof NotFound) {
        return 404
      }
      if (this instanceof Forbidden) {
        return 403
      }
      return 500
    }
  }
  
  class BadRequest extends GeneralError {}
  class NotFound extends GeneralError {}
  class Forbidden extends GeneralError {}
  
  export {
    GeneralError,
    BadRequest,
    NotFound,
    Forbidden
  };