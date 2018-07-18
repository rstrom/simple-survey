import * as React from "react";
import styled from "styled-components";
import { color, space } from "styled-system";

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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.2);
  ${space};
  ${color};
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
  <div>
    <Button
      className="back"
      onClick={handleBack}
      disabled={!responses[Number(pageNumber) - 1]}
    >
      Back
    </Button>
    <Wrapper bg="#fff" m="1rem" p="1rem" width={[1, 1 / 2, 1 / 4]}>
      <p>{question.label}</p>
      {children}
      <Button
        className="next"
        onClick={handleNext}
        disabled={!responses[Number(pageNumber) - 1]}
      >
        Next
      </Button>
    </Wrapper>
  </div>
);

export default Component;
