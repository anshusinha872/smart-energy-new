import NestedLoop from "./NestedLoop";
import Footer from "./Footer";
import styles from "./Payment.module.css";

const Payment = () => {
  return (
    <div className={styles.payment}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
      </div>
      <section className={styles.nestedLoopWrapper}>
        <NestedLoop />
      </section>
      <Footer />
    </div>
  );
};

export default Payment;
