import * as React from "react";
import styled from "styled-components";

export interface IProps {
  values: string[];
  defaultValue: string;
  onChange(value: string): void;
}

const Dropdown = styled.select.attrs({ className: "dropdown" })`
  flex: 1 0 auto;
  font-size: 1em;
`;

const Component: React.ComponentType<IProps> = ({
  defaultValue,
  values,
  onChange
}) => (
  <Dropdown
    innerRef={ref => ref && ref.focus()}
    onChange={e => onChange(e.target.value)}
    value={defaultValue}
  >
    <option disabled={true} selected={true}>
      {" "}
      -- select an option --{" "}
    </option>
    {values.map((value, i) => (
      <option key={i} value={value}>
        {value}
      </option>
    ))}
  </Dropdown>
);

export default Component;
