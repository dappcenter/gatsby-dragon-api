import { ChainId, Token } from "@pancakeswap-libs/sdk";

// MERC-20 addresses.
export const FIRE = "0xe118e8b6dc166CD83695825eB1d30e792435Bb00";
export const WMATIC = "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270";
export const DEAD = "0x000000000000000000000000000000000000dEaD";

// Contract addresses.
export const FIRE_MATIC_FARM = "0xD58190075d5C32567940A766FDC7BF5e95679Df5";
export const MASTERCHEF_CONTRACT = "0xCEd39CF6221a10331e2349224BB1Eeb03A5c146f";
export const LOTTERY_CONTRACT = "0x183a93339500D33eD4d0b7f15136bE1212c4e007";
export const MULTICALL_CONTRACT = "0xCE81B1bF6c92EbDede9A076D1179C83f92851F35";

// QuickSwap SDK Token.
export const FIRE_TOKEN = new Token(ChainId.MAINNET, FIRE, 9);
export const WMATIC_TOKEN = new Token(ChainId.MAINNET, WMATIC, 18);
export const FIRE_MATIC_TOKEN = new Token(ChainId.MAINNET, FIRE_MATIC_FARM, 18);
