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
		const from = memo.from;
		const fromName = memo.fromName;
		const to = memo.to;
		const toName = memo.toName;
		const message = memo.message;
		const timestamp = memo.timestamp;

		console.log(
			`At ${timestamp}: ${fromName} (${from}) bought a Chai for ${toName} (${to}) with message "${message}"`
		);
	}
}

// Main function
async function main() {
	const [owner, buyer1, buyer2, buyer3] = await hre.ethers.getSigners();

	// Deploying smart contract
	const CryptoChaiContractFactory = await hre.ethers.getContractFactory(
		"CryptoChai"
	);
	const CryptoChai = await CryptoChaiContractFactory.deploy();
	await CryptoChai.deployed();
	console.log(`\nCryptoChai contract has been deplyed.`);
	console.log(`\nDeployed to: ${CryptoChai.address}`);
	console.log(`Deployed by: ${owner.address}`);

	// Displaying balances before buying chais
	const addresses = [
		owner.address,
		buyer1.address,
		buyer2.address,
		buyer3.address,
	];
	console.log(`\nDisplaying Before Balances:`);
	await printBalances(addresses);

	// Buying some chais
	const payment = { value: hre.ethers.utils.parseEther("1") };

	await CryptoChai.connect(buyer1).buyChai(
		"Spidotoro",
		"Your Friendly Neighbourhood Totoro!",
		payment
	);
	await CryptoChai.connect(buyer1).buyChai(
		"Funkotoro",
		"Toro and chill...",
		payment
	);
	await CryptoChai.connect(buyer1).buyChai(
		"Baymaxotoro",
		"Your personal ToroCare companion.",
		payment
	);

	// Displaying balances after buying chais
	console.log(`\nDisplaying After Balances:`);
	await printBalances(addresses);

	// Displaying all the memos
	console.log(`\nDisplaying Memos:`);
	const Memos = await CryptoChai.getMemos();
	printMemos(Memos);

	// Displaying total chais
	const chais = await CryptoChai.chais();
	console.log(`\nTotal Chais served till now: ${chais}`);
}

main().then(() =>
	process.exit(0).catch((error) => {
		console.log(error);
		process.exit(1);
	})
);
