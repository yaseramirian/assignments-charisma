import cx from "classnames";
import styles from "./index.module.scss";

const Layout = ({ children }) => {
  return (
    <main className={cx(styles.layout, "h-100 w-100")}>
      <div className={cx(styles.container)}>{children}</div>
    </main>
  );
};

export default Layout;
