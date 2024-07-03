import styles from "./layout.module.scss";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.layout}>
        <div className={styles.header}></div>
        <div className={styles.body}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
