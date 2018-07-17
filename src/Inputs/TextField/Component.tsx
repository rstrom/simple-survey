import * as React from "react";
import styled from "styled-components";

const TextField = styled.input.attrs({ className: "text-field", type: "text" })`
  flex: 1 0 auto;
`;

export default () => <TextField />;
