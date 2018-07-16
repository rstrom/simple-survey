import { array } from "prop-types";
import { withContext } from "recompose";
import Component from "./Component";

export default withContext(
  {
    questions: array
  },
  props => props
)(Component);
