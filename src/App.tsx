import React from "react";
import { DAppProvider, ChainId } from "@usedapp/core";
import { Main } from "./components/Main";
import { Header } from "./components/Header";
import { Container } from "@mui/material";
function App() {
  const { Kovan } = ChainId;
  return (
    <DAppProvider
      config={{
        supportedChains: [Kovan, 1337],
        notifications: {
          expirationPeriod: 1000,
          checkInterval: 1000,
        },
      }}
    >
      <Header />
      <Container maxWidth="md">
        <p>hi</p>
        <Main />
      </Container>
    </DAppProvider>
  );
}

export default App;
