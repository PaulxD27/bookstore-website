// CONTADOR

export type ActionsContador =
  | {
      type: "INCREMENTAR";
    }
  | {
      type: "DECREMENTAR";
    }
  | {
      type: "INCREMENTAR5";
      payload: number;
    }
  | {
      type: "DECREMENTAR5";
      payload: number;
    }
  | {
      type: "RESET";
    };
