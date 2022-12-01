
const hre = require("hardhat");

async function main() {
  const aavePoolAddressProvider = "0xc4dCB5126a3AfEd129BC3668Ea19285A9f56D15D";
  const FlashLoan = await hre.ethers.getContractFactory("FlashLoan");
  const flashLoan = await FlashLoan.deploy(aavePoolAddressProvider);
  
  await flashLoan.deployed();
  console.log(`FlashLoan deployed at address ${flashLoan.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
