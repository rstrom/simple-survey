import { get } from "lodash";
import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export interface IProps {
  match: {
    params: {
      pageNumber: number;
    };
  };
  questions: Array<{
    type: string;
  }>;
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
`;

const Component: React.ComponentType<IProps> = ({
  match: {
    params: { pageNumber }
  },
  questions
}) => (
  <Page>
    <h1>Page {pageNumber}</h1>
    <p>{get(questions, `${pageNumber - 1}.type`, "Not found")}</p>
    <Link to={`/page/${Number(pageNumber) + 1}`}>Submit</Link>
  </Page>
);

export default Component;
