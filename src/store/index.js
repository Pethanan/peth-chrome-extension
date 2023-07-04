import { configureStore } from "@reduxjs/toolkit";
import { queriesStateSliceReducer } from "./queriesStateSlice";

const store = configureStore({
  reducer: { queries: queriesStateSliceReducer },
});

export default store;
