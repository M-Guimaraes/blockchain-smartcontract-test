require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL

module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "hardhat",
  networks: {
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 4
    },
    localhost: {
      url: "http://127.0.0.1:7545",
    }
  }
};
