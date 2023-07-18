import Navbar from "@/components/navbar";

import styles from "./AppLayout.module.scss";

const AppLayout = ({ children }) => {
  return (
    <div className={styles.AppLayout}>
      <Navbar />
      {children}
    </div>
  );
};

export default AppLayout;
