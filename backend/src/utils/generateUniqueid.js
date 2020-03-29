const crypto = require('crypto');

module.exports = function genetateUniqueId() {
    return crypto.randomBytes(4).toString('HEX');
}