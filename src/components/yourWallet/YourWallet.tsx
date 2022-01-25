import { Box, Tab } from "@mui/material";
import { TabList, TabContext, TabPanel } from "@mui/lab";
import React, { useState } from "react";
import { WalletBalance } from "./WalletBalance";
import { makeStyles } from "@mui/styles";
// import { Theme } from "@mui/material/styles";
import { Token } from "../Main";
import { StakeForm } from "./StakeForm";

interface YourWalletProps {
  supportedTokens: Array<Token>;
}

const useStyles = makeStyles(() => ({
  tabContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
  },
  box: {
    backgroundColor: "#white",
  },
  header: {
    color: "white",
  },
}));

export const YourWallet = ({ supportedTokens }: YourWalletProps) => {
  const classes = useStyles();
  const [selectedTokenIndex, setSelectedTokenIndex] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setSelectedTokenIndex(Number(newValue));
  };
  return (
    <Box>
      <h1>Your Wallet!</h1>
      <Box className={classes.box}>
        <TabContext value={selectedTokenIndex.toString()}>
          <TabList aria-label="stake form tabs" onChange={handleChange}>
            {supportedTokens.map((token, index) => {
              return (
                <Tab label={token.name} value={index.toString()} key={index} />
              );
            })}
          </TabList>
          {supportedTokens.map((token, index) => {
            return (
              <TabPanel value={index.toString()} key={index}>
                <div className={classes.tabContent}>
                  <WalletBalance token={supportedTokens[selectedTokenIndex]} />
                  <StakeForm
                    token={supportedTokens[selectedTokenIndex]}
                  ></StakeForm>
                </div>
              </TabPanel>
            );
          })}
        </TabContext>
      </Box>
    </Box>
  );
};
