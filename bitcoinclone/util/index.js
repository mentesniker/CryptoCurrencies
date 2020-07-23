const EC = require('elliptic').ec;

const ec = new EC('secp256k1');
const cryptoHash = require('./crypto-hash');

const verifySignature = ({publickey, data, signature}) => {
	const keyFromPublic = ec.keyFromPublic(publickey, 'hex');

	return keyFromPublic.verify(cryptoHash(data), signature);
}; 

module.exports = {ec, verifySignature, cryptoHash};