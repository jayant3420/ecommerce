import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector, useDispatch } from "react-redux";
import { RatingStars } from "./RatingStars";
import { useHistory } from "react-router-dom";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import { addItemToCart } from "../actions/home/cart";
SwiperCore.use([Pagination, Navigation]);

const FeaturedProductSlider = () => {
  const productDetail = useSelector((state) => state.productsDetail);
  const products = productDetail.products;
  const cartData = useSelector((state) => state.cartData);
  const cart = cartData.cart;
  const dispatch = useDispatch();
  const history = useHistory();
  let featuredProducts = products.filter((item) => {
    const { rating_points, total_sale } = item;
    return rating_points >= 2.9 && rating_points <= 3.6 && total_sale < 10;
  });

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

  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={`${size[0] <= 1375 ? 1 : 3}`}
        pagination={{ clickable: true }}
        navigation={true}
        className="mySwiper"
      >
        {featuredProducts.map((item) => {
          const {
            id,
            img_src,
            item_description,
            rating_points,
            old_price,
            new_price
          } = item;
          return (
            <SwiperSlide key={id}>
              <div
                className="featured-item flex-row"
                onClick={() => addToCart(id)}
              >
                <div className="fi-ib">
                  <img
                    src={img_src}
                    alt={`product id - ${id}`}
                    className="fi-img"
                  />
                </div>

                <div className="fi-des">
                  <p>{item_description}</p>
                  <ul className="fi-des-ul flex-row">
                    <RatingStars points={rating_points} />
                  </ul>
                  <p className="fi-price">
                    <span>&#36;{new_price}</span>
                    <span>
                      <s>&#36;{old_price}</s>
                    </span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default FeaturedProductSlider;
