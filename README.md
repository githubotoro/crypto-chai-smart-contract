<!-- PROJECT HEADER -->

<br />
<div align="center">
  <a href="https://crypto-chai.vercel.app/">
    <img src="Images/crypto-chai-logo.png" alt="logo" height="100">
    <h1>CRYPTO CHAI<br/>Your Decentralized "Chai Ki Tapri"</h1>
  </a>
  
  <p align="center">
    <a href="https://crypto-chai-web3-app.vercel.app/"><strong>#stayTORO »</strong></a>
    <br />
    <a href="https://crypto-chai-web3-app.vercel.app/">View Project</a>
    |
    <a href="https://github.com/githubotoro/crypto-chai-smart-contract/issues">Report Bug</a>
    |
    <a href="https://github.com/githubotoro/crypto-chai-smart-contract/issues">Request Feature</a>
    <br/>
    <a href="https://twitter.com/yupuday">Twitter</a>
    |
    <a href="https://mumbai.polygonscan.com/address/0x70856254B2bEc0c6B0a591554bbbbea7b40389EB#code">PolygonScan</a>
    |
    <a href="https://github.com/githubotoro/crypto-chai-web3-app">Web3 App</a>
    <br/> <br/>
    <b>If you like this project, don't forget to give it a star! <br/> Thanks! 😊</b>
  </p>
  
</div>

<!-- PROJECT HEADER -->

<!-- TABLE OF CONTENTS -->

## Table of Contents 📌

  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
      <ul>
        <li><a href="#colour-palette">Colour Palette</a></li>
      </ul>
      <ul>
        <li><a href="#font-used">Font Used</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#project-links">Project Links</a></li>
    <li><a href="#acknowledgements">Acknowledgments</a></li>
  </ol>

<!-- TABLE OF CONTENTS -->

<!-- ABOUT THE PROJECT -->

<a name="about-the-project"></a>

## About The Project 📝

<div align="center">
<a href="https://crypto-chai.vercel.app/">
    <img src="Images/crypto-chai-title.png" alt="logo" height="100">
</a>
</div>

Crypto Chai is the Decenrtalized Chai Stop (aka Chai Ki Tapri) on Polygon. Whenever you buy a Chai for someone, you become the owner of Crypto Chai. Vice-versa, whenever someone buys you a Chai, they become the owner of Crypto Chai. Thus, everyone can own the Crypto Chai by becoming the owner of deployed smart contract on Polygon. Indeed, we all are just a "CHAI" away! ☕

<!-- ABOUT THE PROJECT -->

<!-- BUILT WITH -->

<a name="built-with"></a>

### Built With 🔍

-   [Ethers.js](https://docs.ethers.io/v5/)
-   [Web3.js](https://web3js.readthedocs.io/en/v1.7.0/)
-   [Hardhat](https://hardhat.org/)
-   [Solidity](https://docs.soliditylang.org/en/v0.8.12/)
-   [Alchemy](https://www.alchemy.com/)

<!-- BUILT WITH -->

<!-- COLOUR PALETTE -->

<a name="colour-palette"></a>

### Colour Palette 🎨

-   <b>#2f2c28</b> (Dune)
-   <b>#8b4513</b> (Copper Canyon)
-   <b>#cd853f</b> (Raw Sienna)
-   <b>#d3d3d3</b> (Alto)

<!-- COLOUR PALETTE -->

<!-- FONT USED -->

<a name="font-used"></a>

### Font Used ✒️

-   [Erica One](https://fonts.google.com/specimen/Erica+One)

<!-- FONT USED -->

<!-- ABOUT THE PROJECT -->

<!-- GETTING STARTED -->

<a name="getting-started"></a>

## Getting Started 🚀

All you need to get started with this project is **CHAI!** 😄

<a name="installation"></a>

### Installation 💻

1.  **Clone** this repo.

    ```sh
    git clone https://github.com/githubotoro/crypto-chai-smart-contract.git
    ```

2.  Get your own **Alchemy API Key** on **"Polygon Mumbai Testnet"** from **[Alchemy](https://www.alchemy.com/).** Get your **Private Key** under Account Details from Metamask. Make a **.env** file in the root directory and enter the following lines.

    ```sh
    POLYGON_KEY = "YOUR_ALCHEMY_POLYGON_API_KEY"
    PRIVATE_KEY = "YOUR_PRIVATE_KEY"
    ```

    > **NOTE: Never push .env file to GitHub or you would lose all your funds as Mainnet and Testnet share the same Private Key.**

3.  **(Optional)** You can also add **PolygonScan API Key** from **[PolygonScan Mumbai](https://mumbai.polygonscan.com/)** and add it your .env file. This can be used to **verify** smart contract on PolygonScan.

    ```sh
    POLYGONSCAN_API_KEY = "YOUR_POLYGONSCAN_KEY";
    ```

    You can **verify smart contract** after deployemnt using below command:

    ```js
    npx hardhat verify "YOUR_SMART_CONTRACT_ADDRESS" --network mumbai
    ```

4.  **Install** NPM packages.

    ```sh
    npm install
    ```

5.  Modify **CryptoChai.sol** under **/contracts** as per your requirements.

6.  Deploying and testing **(Locally)**.

    ```sh
    npx hardhat run scrips/buyChai.js
    ```

7.  Deploying and testing **(Polygon Testnet)**. If you don't have **MATIC**, get some for free from **[Polygon Faucet](https://faucet.polygon.technology/)** for deployment and making transactions.

    ```sh
    npx hardhat run scrips/deploy.js --network mumbai
    ```

8.  **(Optional)** Refer this **[crypto-chai-web3-app](https://github.com/githubotoro/crypto-chai-web3-app)** project to make a **live web3 project** for interacting with the deployed smart contract.

    > **NOTE: Write down contract deployement address from console after deployment and don't forget to update contractAddress and CryptoChai.json in your web3 app.**

9.  **Time to have a cup of ☕!**

<!-- GETTING STARTED -->

<!-- CONTRIBUTING -->

<a name="contributing"></a>

## Contributing 🤝

"Crypto Chai" is a community project and any contributions you make are greatly appreciated. If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "chai". 🏷

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/ChaiFeature`)
3. Commit your Changes (`git commit -m 'Add some ChaiFeature'`)
4. Push to the Branch (`git push origin feature/ChaiFeature`)
5. Open a Pull Request

<!-- CONTRIBUTING -->

<!-- LICENSE -->

<a name="license"></a>

## License 📃

Distributed under the **MIT License**. See `LICENSE` for more information.

<!-- LICENSE -->

<!-- CONTACT -->

<a name="contact"></a>

## Contact ☎️

> **Uday Khokhariya**

-   **Twitter** - [yupuday](https://twitter.com/yupuday)
-   **Email** - uday.khokhariya@gmail.com

<!-- CONTACT -->

<!-- PROJECT LINKS -->

<a name="project-links"></a>

## Project Links 🔗

> **GitHub Web3 App Project Link** : [https://github.com/githubotoro/crypto-chai-web3-app](https://github.com/githubotoro/crypto-chai-web3-app)

> **GitHub Smart Contract Project Link** : [https://github.com/githubotoro/crypto-chai-smart-contract](https://github.com/githubotoro/crypto-chai-smart-contract)

> **Deployed Project Link** : [https://crypto-chai.vercel.app](https://crypto-chai.vercel.app)

> **Deployed Smart Contract Link** : [https://mumbai.polygonscan.com/address/0x70856254B2bEc0c6B0a591554bbbbea7b40389EB#code](https://mumbai.polygonscan.com/address/0x70856254B2bEc0c6B0a591554bbbbea7b40389EB#code)

> **Deployed Smart Contract Address** : [0x70856254B2bEc0c6B0a591554bbbbea7b40389EB](https://mumbai.polygonscan.com/address/0x70856254B2bEc0c6B0a591554bbbbea7b40389EB)

<!-- PROJECT LINKS -->

<!-- ACKNOWLEDGMENTS -->

<a name="acknowledgements"></a>

## Acknowledgments 🙌

-   [Alchemy](https://www.alchemy.com/)
-   [Choose an Open Source License](https://choosealicense.com)
-   [Get Emoji](https://getemoji.com/)
-   [Name that Color](https://chir.ag/projects/name-that-color/#D3D3D3)

<!-- ACKNOWLEDGMENTS -->

<div align="center">
  <a href="https://crypto-chai.vercel.app">
    <img src="Images/crypto-chai-illustration.svg" alt="logo" height="250">
    <h1>Chai Bina Chain Kaha Reee! ☕</h1>
  </a>
</div>
