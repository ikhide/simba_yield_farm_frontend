import React from "react";
import { DAppProvider, ChainId } from "@usedapp/core";
import { Main } from "./components/Main";
import { Header } from "./components/Header";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
const theme = {
  spacing: "8px",
};
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
      <ThemeProvider theme={theme}>
        <Header />
        <Container maxWidth="md">
          <Main />
        </Container>
      </ThemeProvider>
    </DAppProvider>
  );
}

export default App;
