import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./ProductIntroduction2.module.scss";

const cx = classNames.bind(styles);

const data = JSON.parse(localStorage.getItem("data"));
const products = data.productsData;

export default function ProductIntroduction2({
  productId,
  template,
  imgID = [],
}) {
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
      <div className={cx("background")}>
        <div className={cx("left")}>
          <div className={cx("row1")}>
            <img  src={imageData[4]} className={cx("img")}></img>
            <img  src={imageData[0]} className={cx("img")}></img>
          </div>
          <div className={cx("row2")}>
              <h1 className={cx("title1")}>Phần II</h1>
              <p className={cx("title2")}>Dự Án Game</p>
          </div>
          <div className={cx("row3")}>
            <img src={imageData[3]} className={cx("img")}></img>
            <img src={imageData[2]} className={cx("img")}></img>
          </div>
        </div>
        <div className={cx("right")}>
          <img src={imageData[1]} className={cx("img1")}></img>
        </div>
      </div>
    </div>
  );
}
