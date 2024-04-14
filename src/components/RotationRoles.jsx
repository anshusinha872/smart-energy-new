import FrameComponent4 from "./FrameComponent4";
import styles from "./RotationRoles.module.css";

const RotationRoles = () => {
  return (
    <div className={styles.rotationRoles}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.patternMatcherParent}>
                <div className={styles.patternMatcher}>
                  <img className={styles.elementIcon} alt="" />
                </div>
                <div className={styles.ourTeam}>Our Team</div>
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
            <h2 className={styles.getAcquaintedWith}>
              Get Acquainted with the Passionate Individuals Dedicated to
              Enhancing Your Smart Energy Experience.
            </h2>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <FrameComponent4
            maskGroup="380.67x500x1765359222"
            coFounder="Co-Founder"
            stewartKarry="Stewart Karry"
          />
          <div className={styles.maskGroupParent}>
            <img className={styles.maskGroupIcon} alt="" />
            <div className={styles.wrapper}>
              <div className={styles.box}>
                <div className={styles.title}>
                  <div className={styles.coFounder}>Co-Founder</div>
                  <b className={styles.toupeWalman}> Toupe Walman</b>
                </div>
              </div>
            </div>
          </div>
          <FrameComponent4
            maskGroup="380.67x500x1907160166"
            coFounder="CEO"
            stewartKarry="Tim Koulee"
          />
        </div>
      </div>
    </div>
  );
};

export default RotationRoles;
