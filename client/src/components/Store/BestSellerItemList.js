import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RatingStars } from "./RatingStars";
import { productLikeUpdate } from "../actions/store/productLikeUpdate";
import { addItemToCart } from "../actions/home/cart";
import { useHistory } from "react-router-dom";

export const BestSellerItemList = (props) => {
  const category = props.category;
  const [visibleItems, setVisibleItems] = useState(8);
  const productsDetail = useSelector((state) => state.productsDetail);
  const cartItems = useSelector((state) => state.cartData);
  const cart = cartItems.cart;
  const products = productsDetail.products;
  const dispatch = useDispatch();
  const history = useHistory();
  let bestsellerproducts = [];

  if (category === "all") {
    bestsellerproducts = products.filter((item) => {
      const { rating_points, total_sale } = item;
      return rating_points >= 3.5 && total_sale >= 10;
    });
  } else {
    bestsellerproducts = products.filter((item) => {
      const { rating_points, total_sale, category: itemCategory } = item;
      const propCategory = category.toLowerCase();
      return (
        rating_points >= 3 && total_sale >= 10 && itemCategory === propCategory
      );
    });
  }

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
      <div className="bestseller-item-container">
        {bestsellerproducts.slice(0, visibleItems).map((item) => {
          const {
            id,
            img_src,
            item_description,
            rating_points,
            old_price,
            new_price,
            liked
          } = item;
          return (
            <div className="item" key={id} id={id}>
              <p>HOT</p>
              <img
                src={img_src}
                alt={`product_id = ${id}}`}
                className="bestseller-img"
              />
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
      <div className="bestseller-loadmoreitems">
        <button onClick={() => setVisibleItems((prev) => prev + 8)}>
          Load More
        </button>
      </div>
    </>
  );
};
