import Box4 from "./Box4";
import styles from "./FrameComponent8.module.css";
import Mask_group from "../assets/Mask_group_(1).png";
import Group_2 from "../assets/Group_2.png";
import compress_svgrepo_com from "../assets/compress_svgrepo.com.png";
import Group_1000004756 from "../assets/Group_1000004756.png";
import Group_1000004759 from "../assets/Group_1000004759.png";
const FrameComponent8 = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.frameContainer}>
          <div className={styles.frameGroup}>
            <div className={styles.frameDiv}>
              <div className={styles.patternMatcherParent}>
                <div className={styles.lineWrapper}>
                  <div className={styles.frameChild} />
                </div>
                <div className={styles.rectangleWrapper}>
                  <div className={styles.frameItem} />
                </div>
                <div className={styles.howItWorks}>How it works</div>
                <div className={styles.rectangleWrapper}>
                  <div className={styles.frameItem} />
                </div>
                <div className={styles.lineWrapper}>
                  <div className={styles.frameChild} />
                </div>
                
              </div>
            </div>
            <h2 className={styles.navigateOurOperational}>
              navigate Our Operational Approach
            </h2>
          </div>
        </div>
        <div className={styles.boxParent}>
          <Box4 group={Group_2} analyze="Analyze" />
          <div className={styles.box}>
            <div className={styles.compressSvgrepocomWrapper}>
              <img
                className={styles.compressSvgrepocomIcon}
                loading="lazy"
                alt=""
                src={compress_svgrepo_com}
              />
            </div>
            <b className={styles.diagnose}>Diagnose</b>
          </div>
          <Box4
            group={Group_1000004756}
            analyze="Optimize"
            propPadding="var(--padding-17xl-4) var(--padding-21xl) var(--padding-17xl-5)"
            propGap="18.1px"
          />
          <div className={styles.box1}>
            <div className={styles.boxInner}>
              <img className={styles.frameInner} src={Group_1000004759} loading="lazy" alt="" />
            </div>
            <b className={styles.maintain}>Maintain</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent8;
