import { navdata } from "./storeNavData";
import { footerData } from "./footerdata";
import { cartData } from "./cartdata";
import { bestSellerNavData } from "./bestsellernav";
import { productsDetail } from "./productDetails";
import { combineReducers } from "redux";
import { filterProduct } from "./productFilterData";
import { updateCpbFilter } from "./cpbFilter";
import { updateTotalProducts } from "./totalDisplayProducts";
import { getDiscountCoupon } from "./getCoupon";
const rootReducer = combineReducers({
  navdata,
  footerData,
  cartData,
  bestSellerNavData,
  productsDetail,
  filterProduct,
  updateCpbFilter,
  updateTotalProducts,
  getDiscountCoupon
});

export default rootReducer;
