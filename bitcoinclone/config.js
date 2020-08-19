const MINE_RATE = 1000;
const INITIAL_DIFFICULTY = 1;

const GENESIS_DATA = {
	timestamp: 1597694848634,
	lastHash: '------',
	hash: 'C2DA371C3A9478181908A8B4FB13858E06A430334408765A1E73179896C963C3',
	difficulty: INITIAL_DIFFICULTY,
	nonce: 0,
	data: ["h","o","l","a"]
};
const STARTING_BALANCE = 1000;

const REWARD_INPUT = {
	address: '*authorized-reward'
};

const MINING_REWARD = 50;

module.exports = { GENESIS_DATA, MINE_RATE, STARTING_BALANCE, REWARD_INPUT, MINING_REWARD };