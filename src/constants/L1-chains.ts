import { L2Chain as Chain } from "../entities/L1-chain.ts";

// Data
export const ETHEREUM: Chain = {
  chainId: 1,
  name: "ethereum",
  rpc: "https://rpc.flashbots.net/",
  blockExplorer: "https://etherscan.io/",
  type: "mainnet",
};

export const SPEOLIA: Chain = {
  chainId: 11155111,
  name: "speolia",
  rpc: "https://rpc.sepolia.org/",
  blockExplorer: "https://sepolia.etherscan.io/",
  type: "testnet",
};

export const POLYGON: Chain = {
  chainId: 137,
  name: "polygon",
  rpc: "https://polygon-rpc.com/",
  blockExplorer: "https://polygonscan.com/",
  type: "mainnet",
};

export const MUMBAI: Chain = {
  chainId: 80001,
  name: "mumbai",
  rpc: "https://rpc-mumbai.matic.today/",
  blockExplorer: "https://mumbai.polygonscan.com/",
  type: "testnet",
};
