import { Address, Bytes, BigInt, BigDecimal } from "@graphprotocol/graph-ts";
import { toAddress, toBytes } from "./converters";

export let ZERO_ADDRESS: Address = toAddress("0x0000000000000000000000000000000000000000");
export let ZERO_BYTES: Bytes = toBytes("0x00");
export let ZERO_BI: BigInt = BigInt.fromString("0");
export let ZERO_BD: BigDecimal = BigDecimal.fromString("0");

export let Aave_POOL_PROVIDER_ADDRESS: Address = toAddress("0x24a42fD28C976A61Df5D00D0599C34c4f90748c8");

export let AaveV2_INCENTIVES_CONTROLLER_ADDRESS: Address = toAddress("0xd784927Ff2f95ba542BfC824c8a8a98F3495f6b5");

export let ConvexBoosterAddress = toAddress("0xf403c135812408bfbe8713b5a23a04b3d48aae31");
export let ConvexTokenAddress = toAddress("0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B");

export let CurveRegistryAddress = toAddress("0x90e00ace148ca3b23ac1bc8c240c2a7dd9c2d7f5");
export let CURVE_REGISTRY_START_BLOCK = BigInt.fromI32(12195750);
export let CURVE_CALC_WITHDRAW_ONE_COIN_AMOUNT = BigInt.fromI32(1000000);

export let DForce_dDAI: Address = toAddress("0x02285AcaafEB533e03A7306C55EC031297df9224");
export let DForce_dDAI_Staking: Address = toAddress("0xD2fA07cD6Cd4A5A96aa86BacfA6E50bB3aaDBA8B");
export let DForce_dUSDC: Address = toAddress("0x16c9cF62d8daC4a38FB50Ae5fa5d51E9170F3179");
export let DForce_dUSDC_Staking: Address = toAddress("0xB71dEFDd6240c45746EC58314a01dd6D833fD3b5");
export let DForce_dUSDT: Address = toAddress("0x868277d475E0e475E38EC5CdA2d9C83B5E1D9fc8");
export let DForce_dUSDT_Staking: Address = toAddress("0x324EebDAa45829c6A8eE903aFBc7B61AF48538df");

export let Harvest_POOL: Address = toAddress("0x15d3A64B2d5ab9E152F16593Cdebc4bB165B5B4A");
export let Harvest_fDAI: Address = toAddress("0xab7FA2B2985BCcfC13c6D86b1D5A17486ab1e04C");

export let LidoTokenAddress: Address = toAddress("0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84");
export let LidoOracleAddress: Address = toAddress("0x442af784A788A5bd6F42A01Ebe9F287a871243fb");
export let LidoNodeOperatorsRegistryAddress: Address = toAddress("0x55032650b14df07b85bF18A3a3eC8E0Af2e028d5");
export let LidoTreasuryAddress: Address = toAddress("0x4333218072D5d7008546737786663c38B4D561A4");

export let SushiMiniChefAddress = toAddress("0x0769fd68dFb93167989C6f7254cd0D766Fb2841F");

export let CAM_INCENTIVES_CONTROLLER_ADDRESS: Address = toAddress("0x357D51124f59836DeD84c8a1730D72B749d8BC23");
export let CAM_LENDING_POOL_ADDRESS: Address = toAddress("0x8dFf5E27EA6b7AC08EbFdf9eB090F32ee9a30fcf");

export let HOMORA_BANK_ADDRESS = toAddress("0x376d16c7de138b01455a51da79ad65806e9cd694");

export let TRADER_JOE_MASTER_CHEF_V2_ADDRESS: Address = toAddress("0xd6a4f121ca35509af06a0be99093d08462f53052");
export let TRADER_JOE_MASTER_CHEF_V3_ADDRESS: Address = toAddress("0x188bed1968b795d5c9022f6a0bb5931ac4c18f00");
export let TRADER_JOE_BAR_ADDRESS: Address = toAddress("0x57319d41f71e81f3c65f2a47ca4e001ebafd4f33");
export let TRADER_JOE_TOKEN_ADDRESS: Address = toAddress("0x6e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd");
export let TRADER_JOE_USDT_PAIR_ADDRESS: Address = toAddress("0x1643de2efb8e35374d796297a9f95f64c082a8ce");
