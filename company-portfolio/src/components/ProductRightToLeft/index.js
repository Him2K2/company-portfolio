import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./ProductRightToLeft.module.scss";
import Footer from "../Footer";

const cx = classNames.bind(styles);

const data = JSON.parse(localStorage.getItem("data"));
const products = data.productsData;

export default function ProductRightToLeft({ productId, template, imgID = [] }) {
  const [productData, setProductData] = useState(null);
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    const product = products.find((item) => item.id === productId);

    if (product) {
      setProductData(product);

    
      const imgData = product.img
        .filter((item) => imgID.includes(item.id))
        .map((item) => item.image_url);

      setImageData(imgData); 
    }
  }, [productId, imgID]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("cucmauxanh")}></div>
      <div className={cx("cucmauxanhkhac")}></div>
      <div className={cx("left")}>
        <div className={cx("productname")}>{productData?.name}</div>
        <div className={cx("link")}>
          <div className={cx("ham")}>
            <div className={cx("cham1")}></div>
            <div className={cx("cham2")}></div>
            <div className={cx("cham3")}></div>
          </div>
          <div className={cx("url")}>{productData?.url_web}</div>
        </div>
        <div className={cx("description")}>{productData?.description}</div>
        <div className={cx("threebutton")}>
          <button className={cx("button3")}>Design</button>
          <button className={cx("button3")}>Back End</button>
          <button className={cx("button3")}>Front End</button>
        </div>
        <div className={cx("year")}>{productData?.manufacture_year}</div>
      </div>

      <div className={cx("right")}>
 
        <img
          src={imageData[0] || "https://via.placeholder.com/150"}
          alt="Ảnh 1"
          className={cx("avatar")}
        />
        <div className={cx("footeravatar")}></div>
      </div>
    </div>
  );
}
