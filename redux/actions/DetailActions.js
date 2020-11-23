import * as actionTypes from "./types";
import apiClient from "../Api/apiClient";

export function getDetails(url) {
  return (dispatch, getState) => {
    return apiClient
      .get(url)
      .then(resp => {
        let Details = getState().Details ? resp : {};
        dispatch(
          setPokemonDetails({
            Details: Details
          })
        );
      })
      .catch(ex => {
        console.error(ex);
      });
  };
}

export function setPokemonDetails({ Details }) {
  return {
    type: actionTypes.DETAILS,
    Details
  };
}