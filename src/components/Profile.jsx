import {} from "@mui/material";
import styles from "./Profile.module.css";
import element_3 from "../assets/element_3.png";
import healthicons_ui_user_profile from "../assets/healthicons_ui-user_profile.png";
import help from "../assets/help.png";
import arrow_img from "../assets/arrow_img.png";
const Profile = ({ onClose }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.profileChild} />
      {/* <div className={styles.container}>
        <div className={styles.healthiconsuiUserProfileParent}>
          <img
            className={styles.healthiconsuiUserProfile}
            loading="lazy"
            alt=""
          />
          <div className={styles.alexCooperLabelWrapper}>
            <div className={styles.alexCooperLabel}>
              <div className={styles.alexCooperWrapper}>
                <div className={styles.alexCooper}>Alex Cooper</div>
              </div>
              <img className={styles.ictwotoneArrowDropDownIcon} alt="" />
            </div>
          </div>
        </div>
      </div> */}
      <div className={styles.profileItem} />
      <div className={styles.profileInner}>
        <div className={styles.vuesaxboldelement3Parent}>
          <img
            className={styles.vuesaxboldelement3Icon}
            loading="lazy"
            alt=""
            src={element_3}
          />
          <div className={styles.dashboardWrapper}>
            <div className={styles.dashboard}>Dashboard</div>
          </div>
        </div>
      </div>
      <div className={styles.lineDiv} />
      <div className={styles.frameDiv}>
        <div className={styles.iconParent}>
          <img className={styles.icon} loading="lazy" src={healthicons_ui_user_profile} alt="" />
          <div className={styles.profileWrapper}>
            <div className={styles.profile1}>Profile</div>
          </div>
        </div>
      </div>
      <div className={styles.profileChild1} />
      <div className={styles.profileInner1}>
        <div className={styles.helpParent}>
          <img className={styles.helpIcon} src={help} loading="lazy" alt="" />
          <div className={styles.supportWrapper}>
            <div className={styles.support}>Support</div>
          </div>
        </div>
      </div>
      <div className={styles.profileChild2} />
      <div className={styles.profileInner2}>
        <div className={styles.vuesaxbulkloginParent}>
          <img className={styles.vuesaxbulkloginIcon} src={arrow_img} loading="lazy" alt="" />
          <div className={styles.logoutWrapper}>
            <div className={styles.logout}>Logout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
