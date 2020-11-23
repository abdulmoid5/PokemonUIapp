import { combineReducers } from "redux";
import * as Pokemons from "./Pokemons";
import * as Details from "./Details";

export default combineReducers(Object.assign(Pokemons, Details));