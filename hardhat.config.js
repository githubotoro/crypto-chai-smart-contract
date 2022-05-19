// hardhat.config.js

require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const GOERLI_URL = process.env.GOERLI_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_KEY = process.env.ETHERSCAN_KEY;
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
	solidity: "0.8.4",
	networks: {
		goerli: {
			url: GOERLI_URL,
			accounts: [PRIVATE_KEY],
		},
		mumbai: {
			url: process.env.POLYGON_KEY,
			accounts: [process.env.PRIVATE_KEY],
		},
	},
	etherscan: {
		apiKey: POLYGONSCAN_API_KEY,
	},
};
