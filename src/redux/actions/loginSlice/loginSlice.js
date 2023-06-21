import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    addUser(state, action) {
      return [state = action.payload];
    },
    removeUser() {
      return [];
    },
  },
});

export const { addUser, removeUser } = loginSlice.actions;
export default loginSlice.reducer;
