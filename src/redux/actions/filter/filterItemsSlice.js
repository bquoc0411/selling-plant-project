import { createSlice, current } from "@reduxjs/toolkit";
import ALL from "../../../features/product/data/all";

const initialState = { all: ALL, value: "" };
const filterItemsSlice = createSlice({
  name: "filterByPrice",
  initialState,
  reducers: {
    filterByLowPrice(state) {
      state.all = initialState.all.filter(
        (item) => 0 <= item.price && item.price <= 30
      );
    },
    filterByMiddilePrice(state) {
      state.all = initialState.all.filter(
        (item) => 30 < item.price && item.price <= 70
      );
     
    },
    filterByHighPrice(state) {
      state.all = initialState.all.filter((item) => item.price > 70);
     
    },
    returnAll() {
      return initialState;
    },

    searchQuery(state, action) {
      state.value = action.payload
      state.all = initialState.all.filter(item => item.name.toLowerCase().includes(action.payload.toLowerCase()))
      console.log(current(state))
    }

    //filter search here
  },
});

export const {
  filterByLowPrice,
  filterByMiddilePrice,
  filterByHighPrice,
  returnAll,
  searchQuery
} = filterItemsSlice.actions;
export default filterItemsSlice.reducer;

