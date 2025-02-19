import classNames from "classnames/bind";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("backgound")}>
        <div className={cx("overlay")}></div>
      </div>
      <div className={cx("backgroundlogo")}>
        <img
          className={cx("logo")}
          src="https://suno.vn/blog/wp-content/uploads/2014/12/nike-lich-su-thiet-ke-logo.jpg"
          alt="Facebook Logo"
        ></img>
      </div>
      <div className={cx("chuc")}>C</div>
      <div></div>
    </div>
  );
}

export default Home;
