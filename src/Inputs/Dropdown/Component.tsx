import * as React from "react";
import styled from "styled-components";

export interface IProps {
  values: string[];
  onChange(value: string): void;
}

const Dropdown = styled.select.attrs({ className: "dropdown" })`
  flex: 1 0 auto;
`;

const Component: React.ComponentType<IProps> = ({ values, onChange }) => (
  <Dropdown
    onChange={e => {
      console.log(e.target.value, e);
      onChange(e.target.value);
    }}
  >
    {values.map((value, i) => (
      <option key={i} value={value}>
        {value}
      </option>
    ))}
  </Dropdown>
);

export default Component;
