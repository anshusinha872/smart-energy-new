import Box3 from "./Box3";
import Box2 from "./Box2";
import Box1 from "./Box1";
import styles from "./FrameComponent16.module.css";

const FrameComponent16 = () => {
  return (
    <div className={styles.subscriptionBoxParent}>
      <div className={styles.subscriptionBox}>
        <div className={styles.title}>
          <h2 className={styles.chooseTheBest}>Choose the best plan for you</h2>
        </div>
      </div>
      <div className={styles.predictiveAnalysisIcon}>
        <img
          className={styles.predictiveAnalysisIconChild}
          loading="lazy"
          alt=""
        />
        <div className={styles.wrapper}>
          <Box3 />
          <Box2 />
          <Box1 />
        </div>
        <div className={styles.perReport}>/per report</div>
      </div>
    </div>
  );
};

export default FrameComponent16;
