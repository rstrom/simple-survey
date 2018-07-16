import * as React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Page from "./Page";

export interface IProps {
  questions: Array<{
    type: string;
  }>;
}

const App = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Helvetica;
`;

const Component: React.ComponentType<IProps> = ({ questions }) => (
  <App>
    <Route path="/page/:pageNumber" component={Page} />
  </App>
);

export default Component;
