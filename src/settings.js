require('dotenv').config()
const URL_DB_CLIENT =process.env.URL_DB_CLIENT || '';
const SECRET_TOKEN_HASH=process.env.SECRET_TOKEN_HASH || '';

module.exports = URL_DB_CLIENT, SECRET_TOKEN_HASH