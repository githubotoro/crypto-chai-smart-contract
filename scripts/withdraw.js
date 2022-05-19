const hre = require("hardhat");
const abi = require("../artifacts/contracts/CryptoCoffee.sol/CryptoCoffee.json");

async function getBalance(provider, address) {
	const balanceBigInt = await provider.getBalance(address);
	return hre.ethers.utils.formatEther(balanceBigInt);
}

async function main() {
	// Getting deployed contract
	const contractAddress = "0xeac81dd4d50006c68578d6547c04b1b737aaab7e";
	const contractABI = abi.abi;

	// Getting node connection
	const provider = new hre.ethers.providers.AlchemyProvider(
		"goerli",
		process.env.GOERLI_API_KEY
	);

	// Getting wallet connection
	const signer = new hre.ethers.Wallet(process.env.PRIVATE_KEY, provider);

	// Connecting to deployed contract
	const CryptoCoffee = new hre.ethers.Contract(
		contractAddress,
		contractABI,
		signer
	);

	// Logging initial balances
	console.log(
		`\nCurrent Owner Balance: ${await getBalance(provider, signer.address)}`
	);
	const contractBalance = await getBalance(provider, CryptoCoffee.address);
	console.log(`Current Contract Balance: ${contractBalance}`);

	// Withdrawing funds
	if (contractBalance !== "0.0") {
		console.log(`\nWithdrawing Funds...`);
		const withdrawTxn = await CryptoCoffee.withdrawBalance();
		await withdrawTxn.wait();
	} else {
		console.log(`\nNo funds to withdraw!`);
	}

	// Logging final balances
	console.log(
		`\nCurrent Owner Balance: ${await getBalance(provider, signer.address)}`
	);
	console.log(
		`Current Contract Balance: ${await getBalance(
			provider,
			CryptoCoffee.address
		)}`
	);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.log(error);
		process.exit(1);
	});
