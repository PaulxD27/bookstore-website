import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducers";
import { ReducersContador } from "../reducers/index";

const store = configureStore<ReducersContador>({ reducer });

store.subscribe(() => console.log(store));

export default store;
