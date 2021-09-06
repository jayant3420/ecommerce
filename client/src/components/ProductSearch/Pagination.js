import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(4),
      backgroundColor: "#f6f7f8",
      height: "3rem",
      lineHeight: "3rem"
    }
  }
}));

const PaginationRounded = () => {
  const classes = useStyles();
  const totalDisplayProducts = useSelector(
    (state) => state.updateTotalProducts
  );
  const cpbFilter = useSelector((state) => state.updateCpbFilter);
  const selectShow = cpbFilter.showCount;
  const pageNumber = cpbFilter.pageNumber;
  const totalProducts = totalDisplayProducts.totalProducts;
  const totalPages = Math.ceil(totalProducts / selectShow);
  const dispatch = useDispatch();
  const handleChange = (event, value) => {
    dispatch({ type: "PAGENUMBERUPDATE", payload: value });
  };
  useEffect(() => {
    dispatch({ type: "PAGENUMBERUPDATE", payload: 1 });
  }, [selectShow]);
  return (
    <>
      <div className={classes.root}>
        <Pagination
          page={pageNumber}
          count={totalPages}
          variant="outlined"
          shape="rounded"
          className="pagination-item"
          showFirstButton={true}
          showLastButton={true}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default PaginationRounded;
