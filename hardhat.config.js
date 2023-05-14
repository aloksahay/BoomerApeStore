//require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.10",
  defaultNetwork: "göerli",
  networks: {
    hardhat: {},
    forking: {
      url: "https://eth-mainnet.g.alchemy.com/v2/MdW7LFWognBZy006OI3_5wrwm2f4eZjT"
    },
    göerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/tIAej_5Kj4-1AJoFWxuIsrwOtHMp1JPK",
      accounts: ["68db64d3dd20ac53067c2bd35abf582fb18b3a828c1d26c32c7cd0dedf04c5b1"],
    },
  },
  etherscan: {
    apiKey: "HJFG7Y2C72ZZGX68T2G3XV74V669WYQI88",
  },
};