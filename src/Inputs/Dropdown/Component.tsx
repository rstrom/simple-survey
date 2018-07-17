import * as React from "react";
import styled from "styled-components";

export interface IProps {
  values: string[];
}

const Dropdown = styled.select.attrs({ className: "dropdown" })`
  flex: 1 0 auto;
`;

const Component: React.ComponentType<IProps> = ({ values }) => (
  <Dropdown>
    {values.map((value, i) => (
      <option key={i} value={value}>
        {value}
      </option>
    ))}
  </Dropdown>
);

export default Component;
