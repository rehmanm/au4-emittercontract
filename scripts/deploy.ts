import { ethers } from "hardhat";

async function main() {


  const EmitWinner = await ethers.getContractFactory("EmitWinner");
  const emitWinner = await EmitWinner.deploy();

  await emitWinner.deployed();

  console.log(`emit winner deployed at ${emitWinner.address}`);

  const EMIT_CONTRACT_ADDRESS = '0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502';

  await emitWinner.triggerEmit(EMIT_CONTRACT_ADDRESS);

  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
