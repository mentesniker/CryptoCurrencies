const Block = require('./block');
const Transaction = require('../wallet/transaction');
const {cryptoHash} = require('../util');
const {REWARD_INPUT, MINING_REWARD} = require('../config');

class Blockchain {

	constructor(){
		this.chain = [];
		this.chain.push(Block.genesis());
	}

	addBlock({data}){
		const newBlock = Block.mineBlock({
			lastBlock: this.chain[this.chain.length-1],
			data
		});
		this.chain.push(newBlock);
	}

	replaceChain(chain, onSuccess){
		if(chain.length <= this.chain.length){
			console.error("chain must be longer");
			return;
		}

		if(!Blockchain.isValidChain(chain)){
			console.error('The incoming chain is not valid');
			return;
		}
		if(onSuccess) {
			onSuccess();
		}
		console.log('replacing chain with ', chain)
		this.chain = chain;

	}
	static isValidChain(chain) {

		if(JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) return false;

		for(let i=1; i < chain.length; i++){

			const block = chain[i];

			const actualLastHash = chain[i-1].hash;

			const lastDifficulty = chain[i-1].difficulty;

			const { timestamp, lastHash, hash, nonce, difficulty, data} = block;

			if(lastHash !== actualLastHash) return false;

			const validatedHash = cryptoHash(timestamp, lastHash, data, nonce, difficulty);

			if(hash !== validatedHash) return false;

			

			if(Math.abs(lastDifficulty - block.difficulty) > 1) return false;

		}

		return true;
	}
	validTransactionData({chain}){
		for(let i=1; i<chain.length; i++){
			const block = chain[i];
			let rewardTransactionCount = 0;

			for(let transaction of block.data){
				if(transaction.input.address === REWARD_INPUT.address){
					rewardTransactionCount += 1;
					if(rewardTransactionCount > 1){
						console.error('Miner rewards exceed limit');
						return false;
					}

					if(Object.values(transaction.outputMap)[0] !== MINING_REWARD){
						console.error('Miner rewrad amount is invalid');
						return false;
					}
				}else{
					if(!Transaction.validTransaction(transaction)){
						console.error('Invalid transaction');
						return false;
					}
				}
			}
		}
	}
}

module.exports = Blockchain;