import * as React from "react";
import styled from "styled-components";

export interface IProps {
  defaultValue: string;
  onChange(value: string): void;
}

const TextField = styled.input.attrs({ className: "text-field", type: "text" })`
  flex: 1 0 auto;
`;

const Component: React.ComponentType<IProps> = ({ onChange, defaultValue }) => (
  <TextField
    innerRef={ref => ref && ref.focus()}
    onChange={e => onChange(e.target.value)}
    defaultValue={defaultValue}
  />
);

export default Component;
