import { useEthers } from "@usedapp/core";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme();

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    padding: theme.spacing(4),
    justifyContent: "flex-end",
    gap: theme.spacing(1),
  },
}));

export const Header = () => {
  const classes = useStyles();
  const { account, activateBrowserWallet, deactivate } = useEthers();
  const isConnected = account !== undefined;

  return (
    <div className={classes.container}>
      {isConnected ? (
        <div>
          <Button color="primary" onClick={deactivate} variant="outlined">
            Disconnect
          </Button>
        </div>
      ) : (
        <Button
          color="primary"
          onClick={() => activateBrowserWallet()}
          variant="contained"
        >
          Connect
        </Button>
      )}
    </div>
  );
};
