import * as React from "react";
import styled from "styled-components";

export interface IProps {
  questions: Array<{
    label: string;
  }>;
  responses: {
    [index: string]: string;
  };
}

const Summary = styled.div.attrs({ className: "summary" })`
  display: flex;
  flex-direction: column;
`;

const Component: React.ComponentType<IProps> = ({ questions, responses }) => (
  <Summary>
    <h1>Thanks for answering our survey!</h1>
    <p>Here are your responses:</p>
    {questions.map(({ label }, i) => (
      <p key={i}>
        <i>{label}</i> {responses[i]}
      </p>
    ))}
  </Summary>
);

export default Component;
