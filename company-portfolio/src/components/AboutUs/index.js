import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./AboutUs.module.scss";
import Footer from "../Footer";

const cx = classNames.bind(styles);

export default function AboutUs() {
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      if (parsedData?.company) {
        const descriptionArray = JSON.parse(parsedData.company.description); // Chuyển description thành mảng
        setCompany({ ...parsedData.company, description: descriptionArray });
      }
    }
  }, []);
  

  return (
    <div className={cx("wrapper")}>
      <div className={cx("bodyy")}>
        <div className={cx("left")}>
          <div className={cx("cucxanh")}></div>
          <img className={cx("avatar")} src={company?.background_img_url} alt="Ảnh 1" />
        </div>
        <div className={cx("right")}>
          <h1 className={cx("usme")}>Về Chúng Tôi</h1>
          <div className={cx("ham")}>
            <div className={cx("cham1")}></div>
            <div className={cx("cham2")}></div>
            <div className={cx("cham3")}></div>
          </div>
          <div className={cx("info")}>{company?.info}</div>
          <div className={cx("description")}>
            <div className={cx("description1")}><button className={cx("btn1")} >1</button> <div>{company?.description[0]}</div></div>
           <div className={cx("description2")}><button className={cx("btn2")}>2</button> <div>{company?.description[1]}</div></div>
          </div>
        </div>
      </div>
      <Footer pagecount={2} />
    </div>
  );
}
