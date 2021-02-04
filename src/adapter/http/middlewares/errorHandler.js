import { GeneralError } from '../../../core/util/error.js';

const errorHandler = (err, req, res, next) => {
  if (err instanceof GeneralError) {
    return res.status(err.getCode()).json({
      status: err.getCode(),
      message: err.message
    });
  }

  return res.status(500).json({
    status: 500,
    message: err.message
  });
}


export default errorHandler;