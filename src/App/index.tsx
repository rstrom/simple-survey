import { array, func, object } from "prop-types";
import { compose, lifecycle, withContext, withStateHandlers } from "recompose";
import Component, { IProps } from "./Component";

export default compose<{}, IProps>(
  lifecycle({}),
  withStateHandlers(() => ({ responses: {} }), {
    respond: ({ responses }) => (index, value) => ({
      responses: {
        ...responses,
        [index]: value
      }
    })
  }),
  withContext(
    {
      questions: array,
      respond: func,
      responses: object
    },
    props => props
  )
)(Component);
