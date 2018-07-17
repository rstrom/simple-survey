import { get } from "lodash";
import { array } from "prop-types";
import * as React from "react";
import { compose, getContext, mapProps } from "recompose";
import Dropdown from "../../Inputs/Dropdown";
import Radio from "../../Inputs/Radio";
import TextField from "../../Inputs/TextField";
import Component from "./Component";

const InputComponents = {
  Dropdown,
  Radio,
  TextField
};

export default compose(
  getContext({
    questions: array
  }),
  mapProps(props => {
    const componentType = get(
      props,
      `questions.${get(props, "match.params.pageNumber") - 1}.component`
    );
    const InputComponent = get(InputComponents, componentType);
    const inputProps = get(
      props,
      `questions.${get(props, "match.params.pageNumber") - 1}`
    );
    return {
      ...props,
      children: <InputComponent {...inputProps} />
    };
  })
)(Component);
