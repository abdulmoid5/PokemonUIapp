import createReducer from "../../Api/createReducer";
import * as actionTypes from "../actions/types";

export const Pokemons = createReducer(
  {},
  {
    [actionTypes.POKEMONS](state, action) {
      let updatedState = action.Pokemons;
      return updatedState;
    }
  }
);