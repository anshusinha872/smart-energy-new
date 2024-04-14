import styles from "./FrameComponent10.module.css";
import Group_1 from "../assets/Group_1.png";
import icon from "../assets/icon.png";
import Group_5324 from "../assets/Group_5324.png";
const FrameComponent10 = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>
            <div className={styles.patternMatcherParent}>
              {/* <div className={styles.patternMatcher}>
                <img className={styles.elementIcon} alt="" />
              </div> */}
              <div className={styles.timingControlWrapper}>
                <div className={styles.timingControl}>
                  <div className={styles.errorHandler}>
                    <div className={styles.errorHandlerChild} />
                  </div>
                  <div className={styles.timingControlChild} />
                </div>
              </div>
              <div className={styles.ourFeatures}>our features</div>
              <div className={styles.timingControlWrapper}>
                <div className={styles.timingControl}>
                  <div className={styles.timingControlChild} />
                  <div className={styles.errorHandler}>
                    <div className={styles.errorHandlerChild} />
                  </div>
                </div>
              </div>
            </div>
            <h2 className={styles.exploreWhatSets}>
              Explore What Sets Us Apart
            </h2>
          </div>
        </div>
        <div className={styles.div}>
          <div className={styles.bg} />
          <div className={styles.inner}>
            <div className={styles.iconParent}>
              <img className={styles.icon} src={icon} loading="lazy" alt="" />
              <img className={styles.frameChild} src={Group_1} alt="" />
            </div>
          </div>
          <div className={styles.realTimeEnergyConsumption}>
            Real-time energy consumption monitoring
          </div>
        </div>
        <div className={styles.div1}>
          <div className={styles.bg} />
          <div className={styles.inner}>
            <div className={styles.iconParent}>
              <img className={styles.icon} style={{
                opacity: 0.3
              }} src={icon} loading="lazy" alt="" />
              <img className={styles.frameChild} src={Group_5324} alt="" />
            </div>
          </div>
          <div className={styles.realTimeEnergyConsumption}>
            Predictive & Reporting analytics capabilities
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent10;
