import * as React from "react";
import styled from "styled-components";

export interface IProps {
  onChange(value: string): void;
}

const TextField = styled.input.attrs({ className: "text-field", type: "text" })`
  flex: 1 0 auto;
`;

const Component: React.ComponentType<IProps> = ({ onChange }) => (
  <TextField onChange={e => onChange(e.target.value)} />
);

export default Component;
