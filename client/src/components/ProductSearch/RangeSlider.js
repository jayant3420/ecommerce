import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  sliderProps: {
    color: "#33a0ff"
  }
});

function RangeSlider({ min, max }) {
  const dispatch = useDispatch();
  const cpbFilter = useSelector((state) => state.updateCpbFilter);
  const priceRange = cpbFilter.priceRange;
  const [value, setValue] = useState([]);
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    dispatch({ type: "PRICERANGEUPDATE", payload: newValue });
    dispatch({ type: "PAGENUMBERUPDATE", payload: 1 });
  };
  useEffect(() => {
    setValue(priceRange);
  }, [priceRange]);
  return (
    <div className={classes.root}>
      <Slider
        value={value}
        min={min}
        max={max}
        step={0.5}
        onChange={handleChange}
        aria-labelledby="range-slider"
        className={classes.sliderProps}
      />
    </div>
  );
}

export default RangeSlider;
