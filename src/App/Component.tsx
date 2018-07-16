import * as React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Page from "./Page";

const App = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Helvetica;
`;

export default () => (
  <App>
    <Route path="/page/:pageNumber" component={Page} />
  </App>
);
