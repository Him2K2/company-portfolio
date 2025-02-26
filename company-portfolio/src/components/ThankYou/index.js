import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./ThankYou.module.scss";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaLink } from "react-icons/fa";
import Footer from "../Footer";

const cx = classNames.bind(styles);

const data = JSON.parse(localStorage.getItem("data"));

export default function ThankYou() {
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const company = data?.company;
    if (company) {
      console.log(company);

      setCompany(company);
    }
  }, []);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("block")}></div>
      <div className={cx("thankyou")}>
        <div className={cx("ham")}>
          <div className={cx("cham1")}></div>
          <div className={cx("cham2")}></div>
          <div className={cx("cham3")}></div>
        </div>
      <div className={cx("a")}>
            <div className={cx("brownblock1")}></div>
            <div className={cx("thank")}>Thank You</div>
            <div className={cx("brownblock2")}></div>
      </div>
      </div>
      <div className={cx("contact")}>
        <div className={cx("email")}><MdOutlineMailOutline className={cx("emailicon")} />{company?.email}</div>
        <div className={cx("phone")}><IoCallOutline className={cx("phoneicon")}  />{company?.phone}</div>
        <div className={cx("website")}><FaLink className={cx("linkicon")} />{company?.website}</div>
      </div>
      <footer className={cx("footer")}>

      </footer>
    </div>
  );
}
