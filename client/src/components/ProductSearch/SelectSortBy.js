import React from "react";
import { useSelector, useDispatch } from "react-redux";

const SelectSortBy = () => {
  const cpbFilter = useSelector((state) => state.updateCpbFilter);
  const dispatch = useDispatch();
  const sortBy = cpbFilter.sortBy;
  return (
    <div className="select-container">
      <select
        name="sort_by"
        id="sort_by"
        value={sortBy}
        onChange={(event) =>
          dispatch({
            type: "SORTBYUPDATE",
            payload: event.target.value
          })
        }
      >
        <option value="name">Name</option>
        <option value="price">Price</option>
        <option value="rating_points">Rating</option>
      </select>
    </div>
  );
};

export default SelectSortBy;
