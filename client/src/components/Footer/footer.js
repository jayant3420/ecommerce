import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { footerDataFetch } from "../actions/footer";
import "./footer.css";

export const SocialMediaShareIcons = (props) => {
  return props.title === "Follow Us" ? (
    <p className="sm-icons">
      <i className="fab fa-facebook-f"></i>
      <i className="fab fa-twitter"></i>
    </p>
  ) : null;
};

const Footer = () => {
  const footdata = useSelector((state) => state.footerData);
  const footerData = footdata.footer;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(footerDataFetch());
  }, []);

  const [updata, ...lowdata] = footerData;
  const upperdata = updata ? updata.data : [];
  return (
    <>
      <div className="footer-container">
        <hr />
        <div className="footer-subitems-1">
          {upperdata.map((item, index) => {
            const { title, data: detail } = item;
            if (title === "iSHOP") {
              return (
                <div className="fssc-1" key={index}>
                  <h1>{title}</h1>
                  <p className="fssc-text">{detail}</p>
                </div>
              );
            } else {
              return (
                <div className="fssc-1" key={index}>
                  <h4 className="fu">{title}</h4>
                  <p className="fssc-text">{detail}</p>
                  <SocialMediaShareIcons title={title} />
                </div>
              );
            }
          })}
        </div>
        <hr className="fs1-2nd-hr" />
        <div className="footer-subitems-2">
          {lowdata.map((item, index) => {
            const { id, title, data: lowerdata } = item;
            return (
              <div className="fsl" key={id}>
                <ul>
                  <li className="link-head">{title}</li>
                  {lowerdata.map((LiItem, index) => {
                    return (
                      <li key={index}>
                        <span>{LiItem}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <hr />
        <div className="digital-payment-support flex-row">
          <div className="dps-icon">
            <img src="/images/westernunion.png" alt="western union icon" />
          </div>
          <div className="dps-icon">
            <img src="/images/mastercard.png" alt="western union icon" />
          </div>
          <div className="dps-icon">
            <img src="/images/paypal.png" alt="western union icon" />
          </div>
          <div className="dps-icon">
            <img src="/images/visa.png" alt="western union icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
