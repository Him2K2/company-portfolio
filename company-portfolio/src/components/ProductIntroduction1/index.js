import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./ProductIntroduction1.module.scss";

const cx = classNames.bind(styles);

const data = JSON.parse(localStorage.getItem("data"));
const products = data.productsData;

export default function ProductIntroduction1({
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
      <div className={cx("backgroundAll")}>
        <img className={cx("background")} src={imageData[0]} alt="Background" />
        <div className={cx("overlay")}></div>
        <div className={cx("left")}>
        <div className={cx("thanhdoc")}></div>
        </div>
        <div className={cx("right")}>
          <div className={cx("introduction")}>
            <div className={cx("header")}>Phần I</div>
            <div className={cx("introduct")}>Dự án WEB/APP</div>
          </div>
        </div>
      </div>
    </div>
  );
}
