const hre = require("hardhat");

async function main() {
	const CryptoChaiFactory = await hre.ethers.getContractFactory("CryptoChai");
	const CryptoChai = await CryptoChaiFactory.deploy();
	await CryptoChai.deployed();

	console.log(`\nCryptoChai contract has been deplyed.`);
	console.log(`\nDeployed to: ${CryptoChai.address}`);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.log(error);
		process.exit(1);
	});
