import React from "react";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

export default function Footer({ pagecount }) {
  return (
    <div className={cx("wrapper")}>
      <button className={cx("countPage")}>Page No: {pagecount}</button>
      <div className={cx("footer")}></div>
    </div>
  );
}
