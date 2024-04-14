import FrameComponent17 from "./FrameComponent17";
import FrameComponent16 from "./FrameComponent16";
import Footer from "./Footer";
import styles from "./Pricing.module.css";

const Pricing = () => {
  return (
    <div className={styles.pricing}>
      <section className={styles.pricingInner}>
        <div className={styles.frameParent}>
          <FrameComponent17 />
          <FrameComponent16 />
        </div>
      </section>
      <Footer propAlignSelf="stretch" />
    </div>
  );
};

export default Pricing;
