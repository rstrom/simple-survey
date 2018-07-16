import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export interface IProps {
  questions: Array<{
    type: string;
  }>;
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
`;

const Component: React.ComponentType<IProps> = ({ questions }) => (
  <Page>
    <h1>Welcome to the Survey</h1>
    <p>It's {questions.length} questions long</p>
    <Link to={"/page/1"}>Start</Link>
  </Page>
);

export default Component;
