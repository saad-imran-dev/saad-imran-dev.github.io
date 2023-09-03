import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";

import "./index.css";

const theme = createTheme({
  typography: {
    fontFamily: ["Open Sans", "Inter", "sans-serif"].join(",")
  },
  palette: {
    primary: {
      main: "#283C63",
      lighter: "#928A97"
    },
    secondary: {
      main: "#F44336"
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
