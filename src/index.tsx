import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import questions from "./questions.json";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <BrowserRouter>
    <App questions={questions} />
  </BrowserRouter>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
