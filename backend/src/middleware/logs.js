const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const logger = () => {
    const accessLogStream = fs.createWriteStream(
        path.join(__dirname, '../../logs/access.log'),
        { flags: 'a' }
    );
    return morgan('common', {
        stream: accessLogStream
    });
};

module.exports = logger;
