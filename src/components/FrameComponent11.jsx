import styles from "./FrameComponent11.module.css";
import imgparent from "../assets/imgparent.png";
import circle_check from "../assets/circle-check.png";
import Mask_group_1 from "../assets/Mask_group_1.png";
const FrameComponent11 = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.imgParent}>
        <img className={styles.imgIcon} src={imgparent} alt="" />
        <div className={styles.frameWrapper}>
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
            <div className={styles.ourSolution}>our Solution</div>
            <div className={styles.timingControlWrapper}>
              <div className={styles.timingControl}>
                <div className={styles.timingControlChild} />
                <div className={styles.errorHandler}>
                  <div className={styles.errorHandlerChild} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.discoverHowOurSolutionCanWrapper}>
                <h2 className={styles.discoverHowOur}>
                  Discover how our solution can benefit your business.
                </h2>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.frameWrapper1}>
                  <div className={styles.circleCheckParent}>
                    <div className={styles.circleCheck}>
                      <img src={circle_check} alt="" />
                    </div>
                    <div className={styles.circleCheck1}>
                      <img src={circle_check} alt="" />
                    </div>
                    <div className={styles.circleCheck2}>
                      <img src={circle_check} alt="" />
                    </div>
                    <div className={styles.circleCheck3}>
                      <img src={circle_check} alt="" />
                    </div>
                    <div className={styles.circleCheck4}>
                      <img src={circle_check} alt="" />
                    </div>
                  </div>
                </div>
                <div className={styles.weTackleEnergyContainer}>
                  <p className={styles.weTackleEnergy}>
                    We tackle energy waste in commercial buildings through
                    real-time data and smart recommendations. Sensors and
                    machine learning analyze energy use, suggesting actions like
                    turning off unused areas or adjusting heating/cooling based
                    on weather. Predictive analytics also help businesses plan
                    future energy needs and justify investments in
                    energy-efficient upgrades. Here's how we achieve this:
                  </p>
                  <p
                    className={styles.realTimeVisibilityEnhanceme}
                  >{`Real-time Visibility Enhancement         `}</p>
                  <p className={styles.costMitigation}>{`Cost Mitigation `}</p>
                  <p className={styles.energyEfficiencyImprovement}>
                    Energy Efficiency Improvement
                  </p>
                  <p className={styles.effectiveManagementOf}>
                    Effective Management of Seasonal Demand Fluctuations
                  </p>
                  <p className={styles.streamlinedOversightAnd}>
                    Streamlined Oversight and Accountability
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.line} />
        </div>
      </div>
      <div className={styles.maskGroupParent}>
        <img className={styles.maskGroupIcon} src={Mask_group_1} loading="lazy" alt="" />
        <div className={styles.line1} />
      </div>
    </section>
  );
};

export default FrameComponent11;
