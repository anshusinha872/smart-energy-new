import styles from "./FrameComponent17.module.css";
import Logo from "../assets/images/logo2.png"
import Profile from "../assets/images/profile.png"
import Downarrow from "../assets/images/downarrow.png"

const FrameComponent17 = () => {
  return (
    <header className={styles.boxTitleWrapper}>
      <div className={styles.boxTitle}>
        <img className={styles.icon} loading="lazy" alt="" src={Logo} />
        <button className={styles.boxTitleInner}>
          <div className={styles.frameParent}>
            <div className={styles.healthiconsuiUserProfileParent}>
              <img className={styles.healthiconsuiUserProfile} alt="" src={Profile}/>
              <div className={styles.alexCooperWrapper}>
                <div className={styles.alexCooper}>Alex Cooper</div>
              </div>
            </div>
            <div className={styles.ictwotoneArrowDropDownWrapper}>
              <img className={styles.ictwotoneArrowDropDownIcon} alt="" src={Downarrow} />
            </div>
          </div>
        </button>
      </div>
    </header>
  );
};

export default FrameComponent17;
