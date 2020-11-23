import createReducer from "../../Api/createReducer";
import * as actionTypes from "../actions/types";

export const Details = createReducer(
  {},
  {
    [actionTypes.DETAILS](state, action) {
      let updatedState = action.Details;
      return updatedState;
    }
  }
);