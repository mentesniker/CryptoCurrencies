const hexToBinary = require('hex-to-binary');
const Block = require('./block');
const { GENESIS_DATA, MINE_RATE } = require('../config');
const {cryptoHash} = require('../util');

describe('Block', () => {
	const timestamp = 2000;
	const lastHash = "hash";
	const hash = "bashash";
	const data = "sadgvgas";
	const nonce = 0;
	const difficulty = 1;
	const block = new Block({timestamp, lastHash, hash, nonce, difficulty, data});

	it('hash has a timestamp, lastHash, nonce, difficulty, hash, and data property', () => {
		expect(block.timestamp).toEqual(timestamp);
		expect(block.lastHash).toEqual(lastHash);
		expect(block.hash).toEqual(hash);
		expect(block.nonce).toEqual(nonce);
		expect(block.data).toEqual(data);
		expect(block.difficulty).toEqual(difficulty);
	});

	describe('genesis', () => {
		const genesisBlock = Block.genesis();

		it('returns a Block instance', () => {
			expect(genesisBlock instanceof Block).toEqual(true);
		});
		it('returns the genesis data', () => {
			expect(genesisBlock).toEqual(GENESIS_DATA);
		})
	});

	describe('mineBlock()', () => {
		const lastBlock = Block.genesis();
		const data = 'mine data';
		const mineBlock = Block.mineBlock({lastBlock, data});

		it('returns a Block instance', () => {
			expect(mineBlock instanceof Block).toBe(true);
		});

		it('sets the lasthash to be the hash of the lastBlock', () => {
			expect(mineBlock.lastHash).toEqual(lastBlock.hash);
		});

		it('sets the data', () =>{
			expect(mineBlock.data).toEqual(data);
		});

		it('sets a timestamp', () => {
			expect(mineBlock.timestamp).not.toEqual(undefined);
		});

		it('creates a SHA-256 hash based on the proper inputs', () => {
			expect(mineBlock.hash).toEqual(cryptoHash(mineBlock.timestamp, lastBlock.hash, data, mineBlock.nonce, mineBlock.difficulty));
		});

		it('sets a hash that matches the difficulty criteria', () => {
			expect(hexToBinary(mineBlock.hash).substring(0,mineBlock.difficulty)).toEqual('0'.repeat(mineBlock.difficulty));
		});

		it('adjust the difficulty', () => {
			const possibleResults = [lastBlock.difficulty+1, lastBlock.difficulty-1];

			expect(possibleResults.includes(mineBlock.difficulty)).toBe(true);
		});
	});
	describe('adjustDifficulty()', () => {
		it('raises the difficulty for a quickly mined block', () => {
			expect(Block.adjustDifficulty({originalBlock: block, timestamp: block.timestamp + MINE_RATE - 100})).toEqual(block.difficulty+1);
		});
		it('lowers the difficulty for a slowly mined block', () => {
			expect(Block.adjustDifficulty({originalBlock: block, timestamp: block.timestamp + MINE_RATE + 100})).toEqual(block.difficulty-1);
		});
		it('has a lower limit of one', () => {
			block.difficulty = -1;
			expect(Block.adjustDifficulty({originalBlock: block})).toEqual(1);
		});
	});
});