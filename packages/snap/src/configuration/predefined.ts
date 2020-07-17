import {SnapConfig} from "@nodefactory/metamask-filecoin-types";

export const filecoinMainnetConfiguration: SnapConfig = {
  derivationPath: "m/44'/461'/0/0/1",
  network: "f",
  rpcUrl: "",
  unit: {
    decimals: 6,
    image: `https://svgshare.com/i/M4s.svg`,
    symbol: "FIL"
  }
};

// replaces testnet for now
export const filecoinDevnetConfiguration: SnapConfig = {
  derivationPath: "m/44'/461'/0/0/1",
  network: "t",
  rpcUrl: `https://lotus.testground.ipfs.team/nerpa_api/0/node/rpc/v0`,
  unit: {
    decimals: 6,
    image: `https://svgshare.com/i/M4s.svg`,
    symbol: "FIL"
  }
};

export const filecoinTestnetConfiguration: SnapConfig = filecoinDevnetConfiguration;
// export const filecoinTestnetConfiguration: SnapConfig = {
//   derivationPath: "m/44'/461'/0/0/1",
//   network: "t",
//   rpcUrl: ``,
//   unit: {
//     decimals: 6,
//     image: `https://svgshare.com/i/M4s.svg`,
//     symbol: "FIL"
//   }
// };

export const defaultConfiguration: SnapConfig = filecoinDevnetConfiguration;
