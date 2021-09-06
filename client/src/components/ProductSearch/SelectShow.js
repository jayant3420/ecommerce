import React from "react";
import { useSelector, useDispatch } from "react-redux";

const SelectShow = ({ totalItems }) => {
  const sets = totalItems / 6;
  let totalCount = `${
    sets > Math.floor(sets) ? 6 * Math.ceil(sets) : 6 * sets
  }`;
  let optionArray = [];
  if (totalCount > 24) {
    totalCount = 24;
  }
  for (let i = 6; i <= totalCount; i = i + 6) {
    optionArray.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }
  const cpbFilter = useSelector((state) => state.updateCpbFilter);
  const dispatch = useDispatch();
  const showCount = cpbFilter.showCount;
  return (
    <div className="select-container">
      <select
        name="show"
        id="show"
        value={showCount}
        onChange={(event) =>
          dispatch({
            type: "SHOWCOUNTUPDATE",
            payload: Number(event.target.value)
          })
        }
      >
        {optionArray.map((item) => {
          return item;
        })}
      </select>
    </div>
  );
};

export default SelectShow;
