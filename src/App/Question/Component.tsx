import * as React from "react";
import styled from "styled-components";
import { color, fontSize, space } from "styled-system";

export interface IProps {
  match: {
    params: {
      pageNumber: string;
    };
  };
  questions: Array<{
    label: string;
  }>;
  question: {
    label: string;
  };
  responses: object;
  handleBack(): void;
  handleNext(): void;
}

const Wrapper = styled.div`
  margin-top: 1rem;
`;

const ProgressBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 1rem;
  width: 100%;
  box-shadow: 0 0.25rem 1rem rgba(127, 127, 127, 0.05);
  ${color};
`;

const ProgressBar = styled.div<{ width: number; bg: string }>`
  height: 1rem;
  width: ${p => p.width * 100}%;
  ${color};
`;

const Question = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  border-radius: 0.25rem;
  box-shadow: 0 0.25rem 1rem rgba(127, 127, 127, 0.1);
  ${space};
  ${color};
`;

const Text = styled.div`
  ${space}
  ${fontSize}
  ${color}
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
  questions,
  question,
  responses
}) => (
  <Wrapper>
    <ProgressBackground bg="black">
      <ProgressBar
        bg="blue"
        width={0.1 + (0.9 * (Number(pageNumber) - 1)) / questions.length}
      />
    </ProgressBackground>
    <Button
      className="back"
      onClick={handleBack}
      disabled={!responses[Number(pageNumber) - 1]}
    >
      Back
    </Button>
    <Question bg="#fff" m="1rem" p="1rem" width={[1, 1 / 2, 1 / 4]}>
      <Text fontSize="0.875em" color="gray">
        Question {pageNumber} of {questions.length}
      </Text>
      <Text>{question.label}</Text>
      {children}
      <Button
        className="next"
        onClick={handleNext}
        disabled={!responses[Number(pageNumber) - 1]}
      >
        Next
      </Button>
    </Question>
  </Wrapper>
);

export default Component;
