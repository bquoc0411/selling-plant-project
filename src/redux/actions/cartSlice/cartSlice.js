import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      // console.log(action)
      // state.push(action.payload);
      const find = state.find((item) => item.id === action.payload.id);

      if (find) {
        return state.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      } else {
        state.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },

    increasement(state, action) {
      return state.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    },
    decreasement(state, action) {
      return state.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      );
    },
  },
});

export const { add, remove, sumAmount, increasement, decreasement } = cartSlice.actions;
export default cartSlice.reducer;
