import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./UsService.module.scss";
import Footer from "../Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faToolbox,
  faMobileAlt,
  faCode,
  faPalette,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const data = JSON.parse(localStorage.getItem("data"));

export default function UsService({ companyId }) {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const sv = data?.service?.filter((item) => item.company_id === companyId);
    if (sv?.length) {
      setServices(sv);
    }
  }, [companyId]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("background")}>
        <div className={cx("title")}>DỊCH VỤ CỦA CHÚNG TÔI</div>
        <div className={cx("service")}>
          {services.slice(0, 5).map((item, index) => {
            const icons = [
              faToolbox,
              faMobileAlt,
              faCode,
              faPalette,
              faGamepad,
            ]; 
            return (
              <div key={item.id} className={cx(`service${index + 1}`)}>
                <div className={cx(`circleblue${index + 1}`)}>
                  <FontAwesomeIcon icon={icons[index]} size="2x" color="#fff" />
                </div>
                <div className={cx("sv")}>{item.service}</div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer pagecount={19} />
    </div>
  );
}
