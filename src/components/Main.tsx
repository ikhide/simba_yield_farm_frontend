/* eslint-disable spaced-comment */
/// <reference types="react" />
import { useEthers } from "@usedapp/core";
import helperConfig from "../helper-config.json";
import networkMapping from "../chain-info/deployments/map.json";
import { constants } from "ethers";
import brownieConfig from "../brownie-config.json";
import { YourWallet } from "./yourWallet";
import { makeStyles } from "@mui/styles";
// import { Theme } from "@mui/material/styles";
import simba from "../simba.png";
import dai from "../dai.png";
import eth from "../eth.png";
export type Token = {
  image: string;
  address: string;
  name: string;
};
const useStyles = makeStyles(() => {
  return {
    title: {
      color: "white",
      textAlign: "center",
      padding: "4px",
    },
  };
});

export const Main = () => {
  const classes = useStyles();
  // show values from wallet
  // get the address of different tokens
  // get the balance of the users wa llet
  const { chainId } = useEthers();
  const networkName = chainId ? helperConfig[chainId] : "dev";
  const simbaTokenAddress = chainId
    ? networkMapping[String(chainId)]["SimbaToken"][0]
    : constants.AddressZero;

  const wethTokenAddress = chainId
    ? brownieConfig.networks[networkName]["weth_token"]
    : constants.AddressZero;
  const fauTokenAddress = chainId
    ? brownieConfig.networks[networkName]["fau_token"]
    : constants.AddressZero;

  const supportedTokens: Array<Token> = [
    { image: simba, address: simbaTokenAddress, name: "SIMBA" },
    { image: dai, address: fauTokenAddress, name: "DAI" },
    { image: eth, address: wethTokenAddress, name: "WETH" },
  ];

  return (
    <div>
      <h2 className={classes.title}>Simba Token App</h2>
      <YourWallet supportedTokens={supportedTokens} />
    </div>
  );
};
