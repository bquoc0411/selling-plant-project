import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../actions/cartSlice/cartSlice";
import filterItemsSlice from "../actions/filter/filterItemsSlice";
import loginSlice from "../actions/loginSlice/loginSlice";

export default configureStore({
  reducer: {
    cart: cartSlice,
    filter: filterItemsSlice,
    login: loginSlice
  },
});
