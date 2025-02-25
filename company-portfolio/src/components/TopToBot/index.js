import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./TopToBot.module.scss";
import Footer from "../Footer";

const cx = classNames.bind(styles);

const data = JSON.parse(localStorage.getItem("data"));
const products = data.productsData;

export default function TopToBot({ productId, template, imgID = [] }) {
  const [productData, setProductData] = useState(null);
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    const product = products.find((item) => item.id === productId);

    if (product) {
      console.log(product);

      setProductData(product);

      const imgData = product.img
        .filter((item) => imgID.includes(item.id))
        .map((item) => item.image_url);

      setImageData(imgData);
    }
  }, [productId, imgID]);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("top")}>
        <img className={cx("avatar")} src={imageData[0]}></img>
        <div>
          <div></div>
          <div className={cx("productname")}>{productData?.name}</div>
          <div></div>
        </div>
        <div className={cx("info")}>{productData?.description}</div>
        <div className={cx("descrip")}>
          <button className={cx("btn")}>FontEnd</button>
          <div className={cx("year")}>{productData?.manufacture_year}</div>
        </div>
      </div>

      <div className={cx("bot")}>
        <div className={cx("background")}>
          <img className={cx("imgbackground")} src={imageData[1]}></img>
          <div className={cx("contact")}>Dự Án Game</div>
        </div>
        <div></div>
      </div>
      <Footer pagecount={12}></Footer>
    </div>
  );
}
