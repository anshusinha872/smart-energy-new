import FrameComponent7 from "./FrameComponent7";
import GroupComponent from "./GroupComponent";
import styles from "./FrameComponent6.module.css";

const FrameComponent6 = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <FrameComponent7
          acrossDomains="across domains"
          weAreExcitedToHaveYouJoin="We are excited to have you join us "
        />
        <div className={styles.frameGroup}>
          <div className={styles.maskGroupParent}>
            <img className={styles.maskGroupIcon} alt="" />
            <div className={styles.box}>
              <b className={styles.smallToMediumSized}>
                Small to Medium-sized Businesses
              </b>
            </div>
          </div>
          <GroupComponent
            maskGroup="400x405x-397046452"
            hospitalityIndustry="Hospitality Industry "
          />
          <GroupComponent
            maskGroup="400x405x700706450"
            hospitalityIndustry="Retail Chains"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;
