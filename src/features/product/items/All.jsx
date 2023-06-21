import React from "react";
import Items from "./Items";

import { returnAll, filterByLowPrice, filterByMiddilePrice, filterByHighPrice, searchQuery } from "../../../redux/actions/filter/filterItemsSlice";
import { useSelector, useDispatch } from "react-redux";

const All = () => {
  const ALLLIST = useSelector((state) => state.filter);
  const query = useSelector(state => state.filter.value)
  // console.log(ALLLIST)
  const dispatch = useDispatch();

  const handleSubmit = (e)  => {
    e.preventDefault();
    console.log('submit', query)

  }
  const handleOnchange = (e) => {
    dispatch(searchQuery(e.target.value))
    console.log(query)
  }
  return (
    <Items
      name={"All"}
      categories={ALLLIST.all}
      returnAll={() => dispatch(returnAll())}
      filterLowPrice={() => dispatch(filterByLowPrice())}
      filterMiddlePrice={() => dispatch(filterByMiddilePrice())}
      filterHighPrice={() => dispatch(filterByHighPrice())}
      handleSubmit={handleSubmit}
      handleOnchange={handleOnchange}
    />
  );
};

export default All;
