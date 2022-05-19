const hre = require("hardhat");

async function main() {
	const CryptoCoffeeContractFactory = await hre.ethers.getContractFactory(
		"CryptoCoffee"
	);
	const CryptoCoffee = await CryptoCoffeeContractFactory.deploy();
	await CryptoCoffee.deployed();

	console.log(`\nCryptoCoffee contract has been deplyed.`);
	console.log(`\nDeployed to: ${CryptoCoffee.address}`);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.log(error);
		process.exit(1);
	});
