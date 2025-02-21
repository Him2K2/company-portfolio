import React from "react";
import classNames from "classnames/bind";
import styles from "./ProductRightToLeft.module.scss";
import Footer from "../Footer";

const cx = classNames.bind(styles);

//  const productData = localStorage.getItem("productData")

export default function ProductRightToLeft({ productId }) {
  // console.log(product);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("cucmauxanh")}></div>
      <div className={cx("cucmauxanhkhac")}></div>
      <div className={cx("left")}>
        <div className={cx("productname")}>FINBOX</div>
        <div className={cx("link")}>
          <div className={cx("ham")}>
            <div className={cx("cham1")}></div>
            <div className={cx("cham2")}></div>
            <div className={cx("cham3")}></div>
          </div>
          <div className={cx("url")}>https://about.finbox.vn/</div>
        </div>
        <div className={cx("description")}>
          Hệ sinh thái khuyến nghị đầu tư đơn giản và đầy đủ nhằm hỗ trợ nhà đầu
          tư Việt chủ động trong việc đầu tư tài chính.
        </div>
        <div className={cx("threebutton")}>
          <button className={cx("button3")}>Design</button>
          <button className={cx("button3")}>Back End</button>
          <button className={cx("button3")}>Front End</button>
        </div>
        <div className={cx("year")}>2019</div>
      </div>
      <div className={cx("right")}>
        <img
          src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/311009126_627063452137134_6375312537694953198_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHU5KX7BcfIxbefsVmNNjVi9PpQHV_wNVn0-lAdX_A1WXwW8IlNFl8hJB_T78kFLJVem0l3r2nh0E4-6b2D-lZZ&_nc_ohc=dU1jbuPmTq4Q7kNvgFZ6A27&_nc_oc=AdjddCTR4zZyz9NgboI3Wjk66MupEBGLOmlF8_njJw4sbfRQufnnvS-MftqqoaK6udsGhmNqH7tEp2Ia2TF-Oqkm&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=AUU6q18ph8OyzrdG4A-eBMi&oh=00_AYA5vUbol7L0j0y_Uold-TAf2vtiNh-8PFayPfnQAuB8WA&oe=67BE217B"
          className={cx("avatar")}
        ></img>
        <div className={cx("footeravatar")}></div>
      </div>
    </div>
  );
}
