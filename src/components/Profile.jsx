import {} from "@mui/material";
import styles from "./Profile.module.css";

const Profile = ({ onClose }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.profileChild} />
      <div className={styles.container}>
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
      </div>
      <div className={styles.profileItem} />
      <div className={styles.profileInner}>
        <div className={styles.vuesaxboldelement3Parent}>
          <img
            className={styles.vuesaxboldelement3Icon}
            loading="lazy"
            alt=""
          />
          <div className={styles.dashboardWrapper}>
            <div className={styles.dashboard}>Dashboard</div>
          </div>
        </div>
      </div>
      <div className={styles.lineDiv} />
      <div className={styles.frameDiv}>
        <div className={styles.iconParent}>
          <img className={styles.icon} loading="lazy" alt="" />
          <div className={styles.profileWrapper}>
            <div className={styles.profile1}>Profile</div>
          </div>
        </div>
      </div>
      <div className={styles.profileChild1} />
      <div className={styles.profileInner1}>
        <div className={styles.helpParent}>
          <img className={styles.helpIcon} loading="lazy" alt="" />
          <div className={styles.supportWrapper}>
            <div className={styles.support}>Support</div>
          </div>
        </div>
      </div>
      <div className={styles.profileChild2} />
      <div className={styles.profileInner2}>
        <div className={styles.vuesaxbulkloginParent}>
          <img className={styles.vuesaxbulkloginIcon} loading="lazy" alt="" />
          <div className={styles.logoutWrapper}>
            <div className={styles.logout}>Logout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
