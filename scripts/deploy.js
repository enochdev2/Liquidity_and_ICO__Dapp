const hre = require("hardhat")

const tokens = (nToken) => {
    return ethers.utils.parseUnits(nToken.toString(), "ether");
};

async function main() {
    // Enoch
  const _initialSupply = tokens(500000000000);
  const Enoch = await hre.ethers.getContractFactory("Enoch")
  const contract = await Enoch.deploy(_initialSupply)

  await contract.deployed();
  console.log(`Enoch: ${contract.address}`);

  // ICOEnoch
  const _tokenPrice = tokens(0.001);
  const ICOEnoch = await hre.ethers.getContractFactory("ICOEnoch")
  const icoEnoch = await ICOEnoch.deploy(contract.address, _tokenPrice)

  await icoEnoch.deployed();
  console.log(`ICOEnoch: ${icoEnoch.address}`);

// LIQUIDITY
const Liquidity = await hre.ethers.getContractFactory("Liquidity")
const liquidity = await Liquidity.deploy()

await liquidity.deployed();
console.log(`Liquidity: ${liquidity.address}`);
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})