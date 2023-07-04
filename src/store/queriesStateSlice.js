import { createSlice } from "@reduxjs/toolkit";

const queriesSliceInitialState = { queries: [] };

const queriesStateSlice = createSlice({
  name: "queries",
  initialState: queriesSliceInitialState,
  reducers: {
    addQuery(state, action) {
      console.log(action.payload);
      state.queries = [...state.queries, action.payload];
      console.log(state.queries);
    },
    retrieveQueries(state, action) {
      state.queries = { ...action.payload };
    },
  },
});

export const queriesStateSliceReducer = queriesStateSlice.reducer;
export const queriesStateSliceActions = queriesStateSlice.actions;
