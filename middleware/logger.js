const winston = require('winston');

let NODE_ENV = process.env.NODE_ENV || 'development';
NODE_ENV !== 'test' && console.log(NODE_ENV);

const options = {
    file: {
        level: 'info',
        filename: './logs/app.log',
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: false,
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true,
        timestamp: true
    },
};

const logger = winston.createLogger({
    levels: winston.config.npm.levels,
    transports: [
        new winston.transports.File(options.file),
        new winston.transports.Console(options.console)
    ],
    exitOnError: false,
    stream: {
        write: function (message, encoding) {
            logger.info(message);
        }
    }
})

module.exports = logger;