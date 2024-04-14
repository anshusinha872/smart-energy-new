import FrameComponent7 from "./FrameComponent7";
import GroupComponent from "./GroupComponent";
import styles from "./FrameComponent6.module.css";
import Group_5316 from "../assets/Group_5316.png";
import Group_5317 from "../assets/Group_5317.png";
import Group_5318 from "../assets/Group_5318.png";
import Group_5319 from "../assets/Group_5319.png";
import Group_5320 from "../assets/Group_5320.png";
import Group_5321 from "../assets/Group_5321.png";
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
            <img className={styles.maskGroupIcon} src={Group_5316} alt="" />
            <div className={styles.box}>
              <b className={styles.smallToMediumSized}>
                Small to Medium-sized Businesses
              </b>
            </div>
          </div>
          <div className={styles.maskGroupParent}>
            <img className={styles.maskGroupIcon} src={Group_5317} alt="" />
            <div className={styles.box}>
              <b className={styles.smallToMediumSized}>Hospitality Industry</b>
            </div>
          </div>
          <div className={styles.maskGroupParent}>
            <img className={styles.maskGroupIcon} src={Group_5318} alt="" />
            <div className={styles.box}>
              <b className={styles.smallToMediumSized}>Retail Chains</b>
            </div>
          </div>
          {/* <div className={styles.maskGroupParent}>
            <img className={styles.maskGroupIcon} src={Group_5316} alt="" />
            <div className={styles.box}>
              <b className={styles.smallToMediumSized}>
                Small to Medium-sized Businesses
              </b>
            </div>
          </div> */}
          {/* <GroupComponent
            maskGroup={Group_5317}
            hospitalityIndustry="Hospitality Industry "
          />
          <GroupComponent
            maskGroup="400x405x700706450"
            hospitalityIndustry="Retail Chains"
          /> */}
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.maskGroupParent}>
            <img className={styles.maskGroupIcon} src={Group_5319} alt="" />
            <div className={styles.box}>
              <b className={styles.smallToMediumSized}>
                Educational Institutions
              </b>
            </div>
          </div>
          <div className={styles.maskGroupParent}>
            <img className={styles.maskGroupIcon} src={Group_5320} alt="" />
            <div className={styles.box}>
              <b className={styles.smallToMediumSized}>
                Recreational Facilities
              </b>
            </div>
          </div>
          <div className={styles.maskGroupParent}>
            <img className={styles.maskGroupIcon} src={Group_5321} alt="" />
            <div className={styles.box}>
              <b className={styles.smallToMediumSized}>Museums & Galleries</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;
