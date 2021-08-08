import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles({
  table: {
    width: "90%",
    margin: "auto"
  },
  tableHeadCell: {
    color: "#fff",
    fontWeight: "600"
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

function createData(imgSrc, itemDes, price, unitprice) {
  return { imgSrc, itemDes, price, unitprice };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];

const btnClicked = () => {
  alert("Button Clicked");
};

const Cartdetails = () => {
  const classes = useStyles();
  return (
    <div className="cart-details">
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow className={classes.tableRow}>
              <TableCell className={classes.tableHeadCell}>Product</TableCell>
              <TableCell className={classes.tableHeadCell} align="right">
                Price
              </TableCell>
              <TableCell className={classes.tableHeadCell} align="right">
                Qty
              </TableCell>
              <TableCell className={classes.tableHeadCell} align="right">
                Unit Price
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} className={classes.tableRowHeight}>
                <TableCell>
                  <div className="product-des flex-row">
                    <div className="flex-column justify-center pointer clear-color">
                      <ClearIcon onClick={() => btnClicked()} />
                    </div>
                    <div>
                      <img
                        src="/images/headphone.jpg"
                        alt="headphone logo"
                        className={classes.itemImgSize}
                      />
                    </div>
                    <div className="item-des flex-column justify-center">
                      Philips Hue 7W BR30 Connected Downlight Lamp
                    </div>
                  </div>
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Cartdetails;
