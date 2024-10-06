import { createSlice } from "@reduxjs/toolkit";

export const spaceOverviewService = createSlice({
  name: "spaceOverviewService",
  initialState: {
    spaceOverViewList: [],
  },
  reducers: {
    setSpaceOverViewList: (state, action) => {
      state.spaceOverViewList = action.payload;
    },
    clearSpaceOverViewList: (state) => {
      state.spaceOverViewList = [];
    },
  },
});

export const { setSpaceOverViewList, clearSpaceOverViewList } = spaceOverviewService.actions;

export default spaceOverviewService.reducer;
