import * as React from "react";
import styled from "styled-components";

export interface IProps {
  match: {
    params: {
      pageNumber: string;
    };
  };
  question: {
    label: string;
  };
  responses: object;
  handleBack(): void;
  handleNext(): void;
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  pointer-events: ${p => (p.disabled ? "none" : "auto")};
`;

const Component: React.ComponentType<IProps> = ({
  children,
  handleBack,
  handleNext,
  match: {
    params: { pageNumber }
  },
  question,
  responses
}) => (
  <Page>
    <Button
      className="back"
      onClick={handleBack}
      disabled={!responses[Number(pageNumber) - 1]}
    >
      Back
    </Button>
    <h1>Page {pageNumber}</h1>
    <p>{question.label}</p>
    {children}
    <Button
      className="next"
      onClick={handleNext}
      disabled={!responses[Number(pageNumber) - 1]}
    >
      Next
    </Button>
  </Page>
);

export default Component;
