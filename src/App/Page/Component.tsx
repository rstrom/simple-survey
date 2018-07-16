import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export interface IProps {
  match: {
    params: {
      pageNumber: number;
    };
  };
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
`;

const Component: React.ComponentType<IProps> = ({
  match: {
    params: { pageNumber }
  }
}) => (
  <Page>
    <h1>Page {pageNumber}</h1>
    <Link to={`/page/${Number(pageNumber) + 1}`}>Submit</Link>
  </Page>
);

export default Component;
