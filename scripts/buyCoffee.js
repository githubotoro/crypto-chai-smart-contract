const hre = require("hardhat");

// Gets balance of given address
async function getBalance(address) {
	const balanceBigInt = await hre.waffle.provider.getBalance(address);
	return hre.ethers.utils.formatEther(balanceBigInt);
}

// Prints balances of all the addresses
async function printBalances(addresses) {
	let idx = 0;
	for (const address of addresses) {
		console.log(
			`Balance of Address ${idx} is ${await getBalance(address)}`
		);

		idx++;
	}
}

// Logs all the stored memos
async function printMemos(memos) {
	for (const memo of memos) {
		const timestamp = memo.timestamp;
		const buyer = memo.name;
		const buyerAddress = memo.from;
		const message = memo.message;

		console.log(
			`At ${timestamp}: ${buyer} (${buyerAddress}) bought a coffee with message "${message}"`
		);
	}
}

// Main function
async function main() {
	const [owner, buyer1, buyer2, buyer3] = await hre.ethers.getSigners();

	// Deploying smart contract
	const CryptoCoffeeContractFactory = await hre.ethers.getContractFactory(
		"CryptoCoffee"
	);
	const CryptoCoffee = await CryptoCoffeeContractFactory.deploy();
	await CryptoCoffee.deployed();
	console.log(`\nCryptoCoffee contract has been deplyed.`);
	console.log(`\nDeployed to: ${CryptoCoffee.address}`);
	console.log(`Deployed by: ${owner.address}`);

	// Displaying balances before buying coffee
	const addresses = [
		owner.address,
		buyer1.address,
		buyer2.address,
		buyer3.address,
	];
	console.log(`\nDisplaying Before Balances:`);
	await printBalances(addresses);

	// Buying some coffees
	const payment = { value: hre.ethers.utils.parseEther("1") };
	await CryptoCoffee.connect(buyer1).buyCoffee(
		"Spidotoro",
		"Your Friendly Neighbourhood Totoro!",
		payment
	);
	await CryptoCoffee.connect(buyer2).buyCoffee(
		"Funkotoro",
		"Toro and chill...",
		payment
	);
	await CryptoCoffee.connect(buyer3).buyCoffee(
		"Baymaxotoro",
		"Your personal ToroCare companion.",
		payment
	);

	// Displaying balances after buying coffee
	console.log(`\nDisplaying After Balances:`);
	await printBalances(addresses);

	// Displaying all the memos
	console.log(`\nDisplaying Memos:`);
	const Memos = await CryptoCoffee.getMemos();
	printMemos(Memos);
}

main().then(() =>
	process.exit(0).catch((error) => {
		console.log(error);
		process.exit(1);
	})
);
