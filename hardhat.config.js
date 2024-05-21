require("@nomicfoundation/hardhat-toolbox");

const NEXT_PUBLIC_SEPOLIA_RPC =
  "https://eth-sepolia.g.alchemy.com/v2/.....................";
const NEXT_PUBLIC_PRIVATE_KEY = process.env.NEXT_PUBLIC_PRIVATE_KEY;
console.log("🚀 ~  NEXT_PUBLIC_PRIVATE_KEY:",  NEXT_PUBLIC_PRIVATE_KEY)
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    // polygon_mumbai: {
    //   url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
    //   accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    // },
    sepolia: {
      url: NEXT_PUBLIC_SEPOLIA_RPC,
      accounts: [``],
    },
  },
};
