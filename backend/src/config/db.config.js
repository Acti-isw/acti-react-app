require('dotenv').config();
module.exports = {
    db: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        name: process.env.DB_NAME
    },
    atlas: {
        url: process.env.DB_URL
    }
};
