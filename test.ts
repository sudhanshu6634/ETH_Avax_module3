import { expect } from "chai";
import { ethers } from "hardhat";

describe("Ranjan", function () {
  it("Test contract", async function () {
    const ContractFactory = await ethers.getContractFactory("Ranjan");

    const instance = await ContractFactory.deploy();
    await instance.waitForDeployment();

    expect(await instance.name()).to.equal("Ranjan");
  });
});
