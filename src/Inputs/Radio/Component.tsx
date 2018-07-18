import * as React from "react";
import styled from "styled-components";

export interface IProps {
  values: string[];
  onChange(value: string): void;
}

const Radio = styled.div.attrs({ className: "radio" })`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;

  & label {
    flex: 1 0 auto;
  }
`;

const Component: React.ComponentType<IProps> = ({ values, onChange }) => (
  <Radio onChange={e => onChange((e.target as HTMLInputElement).value)}>
    {values.map((value, i) => (
      <label key={i}>
        <input value={value} type="radio" name="group" />
        {value}
      </label>
    ))}
  </Radio>
);

export default Component;
