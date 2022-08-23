import "@nomicfoundation/hardhat-toolbox";
import "hardhat-gas-reporter";
import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: "0.8.11",
  gasReporter: {
    enabled: true,
  },
};

export default config;
