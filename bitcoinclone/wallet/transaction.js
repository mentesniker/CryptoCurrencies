const uuid = require('uuid');
const {verifySignature} = require('../util');
const {REWARD_INPUT, MINING_REWARD} = require('../config');


class Transaction {

	constructor({senderWallet, recipient, amount, outputMap, input}){
		this.id = uuid.v1();
		this.outputMap = outputMap || this.createOutputMap({senderWallet, recipient, amount});
		this.input = input || this.createInput({senderWallet, outputMap: this.outputMap});
	}

	createOutputMap({senderWallet, recipient, amount}){
		const outputMap = {};

		outputMap[recipient] = amount;
		outputMap[senderWallet.publickey] = senderWallet.balance - amount;

		return outputMap;
	}

	createInput({senderWallet, outputMap}){
		return {
			timestamp: Date.now(),
			amount: senderWallet.balance,
			address: senderWallet.publickey,
			signature: senderWallet.sign(outputMap)
		};
	}

	update({senderWallet, recipient, amount}){
		if(amount > this.outputMap[senderWallet.publickey]){
			throw new Error('Amount exceeds balance');
		}

		if(!this.outputMap[recipient]){
			this.outputMap[recipient] = amount;
		} 
		else{
			this.outputMap[recipient] = this.outputMap[recipient] + amount;
		}

		this.outputMap[senderWallet.publickey] = this.outputMap[senderWallet.publickey] - amount;

		this.input = this.createInput({senderWallet, outputMap: this.outputMap});
	}

	static validTransaction(transaction){
		const {input: {address, amount, signature}, outputMap} = transaction;
		const outputTotal = Object.values(outputMap).reduce((total, outputAmount) => total + outputAmount);

		if(amount !== outputTotal){
			console.error(`Invalid transaction from ${address}`);
			return false;
		}
		if(!verifySignature({publickey: address, data: outputMap, signature})){
			console.error(`Invalid signature from ${address}`);
			return false;
		}

		return true;
	}

	static rewardTransaction({minerWallet}){
		return new this({
			input: REWARD_INPUT,
			outputMap: {[minerWallet.publickey]: MINING_REWARD}
		});
	}
}

module.exports = Transaction;