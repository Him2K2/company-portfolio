import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Employees.module.scss";
import Footer from "../Footer";
import img from "../../assets/img/error.png"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const cx = classNames.bind(styles);
const data = JSON.parse(localStorage.getItem("data"));

export default function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const el = data?.portfolioEmployees || [];
    setEmployees(el);
  }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>Thành Viên Của Chúng Tôi</div>
      <div className={cx("container")}>
        {employees.map((item, index) => (
          <div className={cx("item")} key={index}>
            <div className={cx("boder")}>
            <img
              className={cx("avatar")}
              src={item.avatar || img}
            />
            <div className={cx("name")}>{item.employee_name}</div>
            <div className={cx("position")}>{item.position}</div>
            <div className={cx("experience")}>
              {item.experience} năm kinh nghiệm
            </div>
            <div className={cx("contact")}>
            <FaFacebookF />
            <FaTwitter />
            <FaDribbble />
            <FaGithub />
            </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
