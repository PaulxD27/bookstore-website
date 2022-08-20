import { combineReducers } from "redux";
import { contadorReducer } from "./contadorReducer";

export interface ReducersContador {
  contador: number;
}

const reducer = combineReducers<ReducersContador>({
  contador: contadorReducer,
});

export default reducer;
