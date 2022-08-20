import { ActionsContador } from "../types/index";

export const sumar = (): ActionsContador => ({ type: "INCREMENTAR" });

export const restar = (): ActionsContador => ({ type: "DECREMENTAR" });

export const sumar5 = (value: number): ActionsContador => ({
  type: "INCREMENTAR5",
  payload: value,
});

export const restar5 = (value: number): ActionsContador => ({
  type: "DECREMENTAR5",
  payload: value,
});

export const reset = (): ActionsContador => ({ type: "RESET" });
