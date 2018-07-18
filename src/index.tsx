import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import questions from "./questions.json";
import registerServiceWorker from "./registerServiceWorker";
import theme from "./theme";

ReactDOM.render(
  <BrowserRouter basename="/simple-survey">
    <ThemeProvider theme={theme}>
      <App questions={questions} />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
