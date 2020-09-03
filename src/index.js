import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ThemeProvider, responsiveFontSizes } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./assets/scss/main.scss";
import theme from "./theme";

// pages for this product
import Components from "./views/Components/Components.js";

const hist = createBrowserHistory();

const globalStyle = responsiveFontSizes(theme);

ReactDOM.render(
  <BrowserRouter history={hist}>
    <ThemeProvider theme={globalStyle}>
      <CssBaseline />
      <Switch>
        <Route path="/" component={Components} />
      </Switch>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
