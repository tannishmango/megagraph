#!/bin/sh

# symbols can be different between chains

if [[ "$CONFIG" == "arbitrum" ]]
then
  ln -s CurvePoolX22pool     generated/CurvePoolX2
  ln -s CurvePoolX3tricrypto generated/CurvePoolX3
  # PoolX4 is not used
  ln -s CurvePoolX3tricrypto generated/CurvePoolX4
  ln -s CurvePoolX3.ts       generated/CurvePoolX4/CurvePoolX4.ts
elif [[ "$CONFIG" == "avalanche" ]]
then
  ln -s CurvePoolX2MIM3CRV-f-0  generated/CurvePoolX2
  ln -s CurvePoolX3atricrypto   generated/CurvePoolX3
  ln -s CurvePoolX4U.TOKEN-f-19 generated/CurvePoolX4
elif [[ "$CONFIG" == "fantom" ]]
then
  ln -s CurvePoolX2ren       generated/CurvePoolX2
  ln -s CurvePoolX3tricrypto generated/CurvePoolX3
  ln -s CurvePoolX44pool-f-7 generated/CurvePoolX4
elif [[ "$CONFIG" == "polygon" ]]
then
  ln -s CurvePoolX2eurtusd      generated/CurvePoolX2
  ln -s CurvePoolX3aave         generated/CurvePoolX3
  ln -s CurvePoolX4crvAUR-JRT-f generated/CurvePoolX4

  ln -s SushiKashiPairMediumRiskV1kmWBTC\&\#x2F\;WMATIC-LINK generated/SushiKashiPairMediumRiskV1
else # Ethereum
  ln -s CurvePoolX2_128cDAI+cUSDC         generated/CurvePoolX2_128
  ln -s CurvePoolX2_256ankrCRV            generated/CurvePoolX2_256
  ln -s CurvePoolX3_128renBTC+WBTC+sBTC   generated/CurvePoolX3_128
  ln -s CurvePoolX3_256aDAI+aUSDC+aUSDT   generated/CurvePoolX3_256
  ln -s CurvePoolX4_128DAI+USDC+USDT+sUSD generated/CurvePoolX4_128
fi
