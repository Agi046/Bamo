require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0x371e03818ee08795ce5f5725f856b984153422b732618a325c341c1079476d68"], //Your private key starting with "0x"
    },
  },
};

