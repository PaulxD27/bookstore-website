import { ActionsContador } from "../types/index";

const initialState: number = 0;

export const contadorReducer = (
  state: number = initialState,
  action: ActionsContador
): number => {
  switch (action.type) {
    case "INCREMENTAR":
      return state + 1;
    case "DECREMENTAR":
      return state - 1;

    case "INCREMENTAR5":
      return state + action.payload;

    case "DECREMENTAR5":
      return state - action.payload;

    case "RESET":
      return initialState;

    default:
      return state;
  }
};
