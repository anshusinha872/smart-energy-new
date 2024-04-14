import FrameComponent4 from "./FrameComponent4";
import styles from "./RotationRoles.module.css";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
const RotationRoles = () => {
  return (
    <div className={styles.rotationRoles}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.patternMatcherParent}>
                <div className={styles.timingControlWrapper}>
                  <div className={styles.timingControl}>
                    <div className={styles.errorHandler}>
                      <div className={styles.errorHandlerChild} />
                    </div>
                    <div className={styles.timingControlChild} />
                  </div>
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
            maskGroup={team1}
            coFounder="Co-Founder"
            stewartKarry="Stewart Karry"
          />
          <div className={styles.maskGroupParent}>
            <img className={styles.maskGroupIcon} src={team2} alt="" />
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
            maskGroup={team3}
            coFounder="CEO"
            stewartKarry="Tim Koulee"
          />
        </div>
      </div>
    </div>
  );
};

export default RotationRoles;
