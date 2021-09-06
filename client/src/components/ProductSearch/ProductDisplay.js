import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RatingStars } from "../Store/RatingStars";
import { productLikeUpdate } from "../actions/store/productLikeUpdate";
import { addItemToCart } from "../actions/home/cart";
import { useHistory } from "react-router-dom";
import Pagination from "./Pagination";
import ForwardBackword from "./ForwardBackword";

const ProductDisplay = () => {
  let filterProduct = useSelector((state) => state.filterProduct);
  let products = filterProduct.subcategoriesProducts;
  const cartItems = useSelector((state) => state.cartData);
  const cart = cartItems.cart;
  const cpbFilter = useSelector((state) => state.updateCpbFilter);
  const showCount = cpbFilter.showCount;
  const sortBy = cpbFilter.sortBy;
  const brand = cpbFilter.brand;
  const color = cpbFilter.color;
  const priceRange = cpbFilter.priceRange;
  const pageNumber = cpbFilter.pageNumber;

  if (sortBy === "name") {
    products.sort((a, b) => {
      let nameA = a.item_description.toUpperCase();
      let nameB = b.item_description.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  } else if (sortBy === "price") {
    products.sort((a, b) => {
      return a.new_price - b.new_price;
    });
  } else if (sortBy === "rating_points") {
    products.sort((a, b) => {
      return b.rating_points - a.rating_points;
    });
  }

  /*filtering products based on brand*/
  products = products.filter((item) => {
    if (brand === "all") {
      return true;
    }
    return item.brand === brand;
  });

  /*filtering products based on color*/
  products = products.filter((item) => {
    if (color === "all") {
      return true;
    }
    return item.color === color;
  });

  /*filtering products based on price range*/
  products = products.filter((item) => {
    return item.new_price >= priceRange[0] && item.new_price <= priceRange[1];
  });

  useEffect(() => {
    const brandUpdate = () => {
      dispatch({ type: "TOTALPRODUCTUPDATE", payload: products.length });
    };
    brandUpdate();
  }, [products]);

  const dispatch = useDispatch();
  const history = useHistory();

  const LikeItem = (id, like) => {
    dispatch(productLikeUpdate(id, like));
  };

  const addToCart = async (id) => {
    for (const item of cart) {
      if (item.id === id) {
        history.push("/home");
        return;
      }
    }
    for (const item of products) {
      if (item.id === id) {
        await dispatch(addItemToCart(item));
        history.push("/home");
        return;
      }
    }
  };

  return (
    <>
      <div className="product-display-container">
        {products
          .slice(pageNumber * showCount - showCount, pageNumber * showCount)
          .map((item) => {
            const {
              id,
              img_src,
              item_description,
              rating_points,
              liked,
              old_price,
              new_price
            } = item;
            return (
              <div className="item" key={id} id={id}>
                <img src={img_src} alt="ipad" className="bestseller-img" />
                <div className="item-icons">
                  {liked === "no" ? (
                    <i
                      className="far fa-heart"
                      onClick={() => LikeItem(id, "yes")}
                    ></i>
                  ) : (
                    <i
                      className="fas fa-heart heart-red"
                      onClick={() => LikeItem(id, "no")}
                    ></i>
                  )}
                  <i
                    className="fas fa-cart-plus"
                    onClick={() => {
                      addToCart(id);
                    }}
                  ></i>
                </div>
                <p className="bestseller-item-des">{item_description}</p>
                <ul className="bestseller-rating flex-row">
                  <RatingStars points={rating_points} />
                </ul>
                <p className="bestseller-item-price">
                  <span>&#36;{new_price}</span>
                  <span>
                    <s>&#36;{old_price}</s>
                  </span>
                </p>
              </div>
            );
          })}
      </div>
      <Pagination />
      <ForwardBackword />
    </>
  );
};

export default ProductDisplay;
