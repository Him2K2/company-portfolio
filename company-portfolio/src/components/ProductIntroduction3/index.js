import React from 'react'
import classNames from "classnames/bind";
import styles from "./ProductIntroduction3.module.scss";
import Footer from '../Footer';

const cx = classNames.bind(styles);

export default function ProductIntroduction3() {
  return (

    <div className={cx("wrapper")}>
      <div className={cx("background")}>
        <div className={cx("header")}></div>
        <div className={cx("info")}>
          <div className={cx("info1")}>Phần III</div>
          <div className={cx("info2")}>Về YoTeach</div>
        </div>
        <div className={cx("header")}></div>
         <img className={cx("img")} src='https://assets.isu.pub/document-structure/210223115830-036e7682e1864777c239384ea8c317ad/v1/94ef7dbb1ab92e548bd2fcbb8f028f3c.jpg?width=720&quality=85,50'></img>
      </div>
      <Footer pagecount={18}></Footer>
    </div>
  )

}
