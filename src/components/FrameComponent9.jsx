import styles from "./FrameComponent9.module.css";
import icon from "../assets/icon.png";
import Group_5326 from "../assets/Group_5326.png";
import swimming_pool_5882849 from "../assets/swimming-pool_5882849.png";
import Group_5328 from "../assets/Group_5328.png";
const FrameComponent9 = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.div}>
        <div className={styles.bg} />
        <div className={styles.iconParent}>
          <img className={styles.icon} src={icon} alt="" />
          <img className={styles.frameChild} src={Group_5326} alt="" />
        </div>
        <div
          className={styles.faultDetectionAlgorithms}
        >{`Fault detection algorithms `}</div>
      </div>
      <div className={styles.div1}>
        <div className={styles.bg1} />
        <div className={styles.iconParent}>
          <img className={styles.icon} src={icon} alt="" />
          <img className={styles.frameChild} src={swimming_pool_5882849} alt="" />
        </div>
        <div className={styles.energyEfficiencyRecommendati}>
          Energy efficiency recommendations
        </div>
      </div>
      <div className={styles.div2}>
        <div className={styles.bg2} />
        <div className={styles.iconGroup}>
          <img className={styles.icon2} src={icon} alt="" />
          <img className={styles.frameItem} src={Group_5328} alt="" />
        </div>
        <div
          className={styles.integrationCompatibility}
        >{`Integration & compatibility`}</div>
      </div>
    </div>
  );
};

export default FrameComponent9;
