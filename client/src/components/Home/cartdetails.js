import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import ClearIcon from "@material-ui/icons/Clear";
import { useSelector, useDispatch } from "react-redux";
import { deleteCartItem, updatCartItem } from "../actions/home/cart";
const useStyles = makeStyles({
  table: {
    width: "90%",
    margin: "auto"
  },
  tableHeadCell: {
    color: "#fff",
    fontWeight: "600",
    width: "6rem"
  },
  tableRow: {
    backgroundColor: "var(--color-black)"
  },
  tableRowHeight: {
    height: "11rem"
  },
  itemImgSize: {
    height: "6rem",
    width: "11rem"
  }
});

const BlankCartIndicator = () => {
  return (
    <div className="blank-cart-container">
      <span>cart is empty</span>
    </div>
  );
};

const Cartdetails = () => {
  let cartData = useSelector((state) => state.cartData);
  let cart = cartData.cart;
  const dispatch = useDispatch();
  const classes = useStyles();

  const cartItemRemove = (id) => {
    dispatch(deleteCartItem(id));
  };

  const itemQuantityDecrement = (id, quantity) => {
    dispatch(updatCartItem(id, quantity - 1, "QTYDECREMENT"));
  };

  const itemQuantityIncrement = (id, quantity) => {
    dispatch(updatCartItem(id, quantity + 1, "QTYINCREMENT"));
  };

  return (
    <>
      <div className="cart-details">
        {cart.length === 0 ? <BlankCartIndicator /> : null}
        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow className={classes.tableRow}>
                <TableCell className={classes.tableHeadCell}>
                  Products
                </TableCell>
                <TableCell className={classes.tableHeadCell} align="right">
                  Price
                </TableCell>
                <TableCell className={classes.tableHeadCell} align="right">
                  Quantity
                </TableCell>
                <TableCell className={classes.tableHeadCell} align="right">
                  Unit Price
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((row, index) => {
                const {
                  _id: id,
                  img_src,
                  item_description,
                  quantity,
                  new_price
                } = row;
                return (
                  <TableRow key={index} className={classes.tableRowHeight}>
                    <TableCell>
                      <div className="product-des flex-row">
                        <div className="flex-column justify-center pointer clear-color">
                          <ClearIcon onClick={() => cartItemRemove(id)} />
                        </div>
                        <div className="item-img-container">
                          <img src={img_src} alt={`Product Id : ${id}`} />
                        </div>
                        <div className="item-des flex-column justify-center">
                          {item_description}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell align="right">
                      &#36;{quantity * new_price}
                    </TableCell>
                    <TableCell align="right">
                      <div className="quantity-manage">
                        <span className="flex-row flex-space-btw qty-btn">
                          <button
                            onClick={() => itemQuantityDecrement(id, quantity)}
                          >
                            {quantity === 1 ? (
                              <i
                                className="far fa-trash-alt"
                                onClick={() => cartItemRemove(id)}
                              ></i>
                            ) : (
                              "-"
                            )}
                          </button>
                          {quantity}
                          <button
                            onClick={() => itemQuantityIncrement(id, quantity)}
                          >
                            +
                          </button>
                        </span>
                      </div>
                    </TableCell>
                    <TableCell align="right">&#36;{new_price}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/*Cart Item for Mobile View*/}
      <div className="cart-details-mobile-view">
        {cart.length === 0 ? <BlankCartIndicator /> : null}
        {cart.map((row, index) => {
          const {
            _id: id,
            img_src,
            item_description,
            quantity,
            new_price
          } = row;
          return (
            <div className="cart-item-container" key={index}>
              <p className="mobile-view-itemremove">
                <ClearIcon onClick={() => cartItemRemove(id)} />
              </p>
              <div className="cart-item-mobile-des">
                <img
                  src={img_src}
                  alt={`Product Id: ${id}`}
                  className="cart-itemimg-mobile"
                />
                <div className="cart-text-quantity">
                  <p className="cart-des-mobile">{item_description}</p>
                  <div className="quantity-container-mobile flex-row">
                    <div className="quantity-manage-mobile">
                      <span className="flex-row qty-btn-mobile flex-space-btw">
                        <button
                          onClick={() => itemQuantityDecrement(id, quantity)}
                        >
                          {quantity === 1 ? (
                            <i
                              className="far fa-trash-alt"
                              onClick={() => cartItemRemove(id)}
                            ></i>
                          ) : (
                            "-"
                          )}
                        </button>
                        {quantity}
                        <button
                          onClick={() => itemQuantityIncrement(id, quantity)}
                        >
                          +
                        </button>
                      </span>
                    </div>
                    <span className="mobile-price">&#36;{new_price}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cartdetails;
