const crypto = require('crypto');

const cryptoHash = (...inputs) => {
	const hash = crypto.createHash('sha256');
	hash.update(inputs.map(input => JSON.stringify(input)).join(' '));
	return hash.digest('hex');
};

module.exports = cryptoHash;