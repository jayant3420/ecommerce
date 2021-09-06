import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const ForwardBackword = () => {
  const [disabledValue, setDisabledValue] = useState({
    disabledPrevValue: false,
    disabledNextValue: false
  });
  const updateTotalProducts = useSelector((state) => state.updateTotalProducts);
  const totalProducts = updateTotalProducts.totalProducts;
  const updateCpbFilter = useSelector((state) => state.updateCpbFilter);
  let pageNumber = updateCpbFilter.pageNumber;
  const dispatch = useDispatch();
  useEffect(() => {
    if (pageNumber === 1 && totalProducts > 6 * pageNumber) {
      setDisabledValue({ disabledPrevValue: true, disabledNextValue: false });
    } else if (pageNumber > 1 && totalProducts < 6 * pageNumber) {
      setDisabledValue({ disabledPrevValue: false, disabledNextValue: true });
    } else if (pageNumber > 1 && totalProducts > 6 * pageNumber) {
      setDisabledValue({ disabledPrevValue: false, disabledNextValue: false });
    } else {
      setDisabledValue({ disabledPrevValue: true, disabledNextValue: true });
    }
  }, [totalProducts, pageNumber]);
  return (
    <div className="mobile-view-showbtn">
      <button
        className={`prevBtn${
          disabledValue.disabledPrevValue === false ? " btn-active" : ""
        }`}
        disabled={disabledValue.disabledPrevValue}
        onClick={() =>
          dispatch({ type: "PAGENUMBERUPDATE", payload: --pageNumber })
        }
      >
        <i className="fas fa-long-arrow-alt-left"></i>
        <span>Previous</span>
      </button>
      <button
        className={`nextBtn${
          disabledValue.disabledNextValue === false ? " btn-active" : ""
        }`}
        disabled={disabledValue.disabledNextValue}
        onClick={() =>
          dispatch({ type: "PAGENUMBERUPDATE", payload: ++pageNumber })
        }
      >
        <span>Next</span>
        <i className="fas fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};

export default ForwardBackword;
