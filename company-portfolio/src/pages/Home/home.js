import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/Footer";


const cx = classNames.bind(styles)
function Home() {
  const [portfolioData, setPortfolioData] = useState(null);

  const loadDataPortfolio = async () => {
    try {
      const result = await axios.get("/portfolios?id=1");
      const data = result.data;
      setPortfolioData(data); 
      localStorage.setItem("data", JSON.stringify(data)); 
    } catch (error) {
      console.error("Lỗi khi tải portfolio:", error);
    }
  };
  const loadDataProducts = async () => {
    try {
      const result = await axios.get("/products");
      const data = result.data;
      localStorage.setItem("productData", JSON.stringify(data)); 
    } catch (error) {
      console.error("Lỗi khi tải portfolio:", error);
    }
  };
  

  useEffect(() => {
    loadDataPortfolio();
    loadDataProducts();
  }, []);

  if (!portfolioData) {
    return <div>Đang tải dữ liệu...</div>; 
  }

  return (
    <div className={cx("wrapper")}>
      <div className={cx("background")}>
        <img src={portfolioData.company.background_img_url} alt="Background" />
        <div className={cx("overlay")}></div>
      </div>
      <div className={cx("backgroundlogo")}>
        <img
          className={cx("logo")}
          src={portfolioData.company.logo_img_url}
          alt="Logo"
        />
      </div>
      <div className={cx("chuc")}>C</div>
      <div className={cx("companyname")}>{portfolioData.company.name}</div>
      <div className={cx("info")}>{portfolioData.company.info}</div>
    </div>
  );
}

export default Home;
