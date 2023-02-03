const logger = require('./logger');

// check for errors, send error and status to client without breaking
module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
    if (process.env.NODE_ENV !== "production") {
        // send all (including stack trace)
        let reqBody = JSON.stringify(req.body);
        let logMessage = 'REQUEST BODY = ' + reqBody + ' ERROR MESSAGE = ' + err.message;
        logger.error(logMessage, err)
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
            stack: err.stack
        });
    } else {
        logger.error(err.message, err)
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
        });
        console.log(err)
    }
};