import FrameComponent1 from "./FrameComponent1";
import styles from "./SideBarNotificationProC.module.css";

const SideBarNotificationProC = () => {
  return (
    <div className={styles.sidebarNotificationProC}>
      <div className={styles.inputPort}>
        <div className={styles.inputPortChild} />
        <div className={styles.outputPort}>
          <img className={styles.operatorIcon} loading="lazy" alt="" />
        </div>
        <img className={styles.separatorIcon} loading="lazy" alt="" />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <a className={styles.frameA}>
                  <div className={styles.vuesaxboldelement3Wrapper}>
                    <img
                      className={styles.vuesaxboldelement3Icon}
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div className={styles.pagetitle}>Dashboard</div>
                </a>
              </div>
              <div className={styles.frameWrapper1}>
                <a className={styles.frameParent1}>
                  <div className={styles.iconWrapper}>
                    <img className={styles.icon} loading="lazy" alt="" />
                  </div>
                  <div className={styles.pagetitle1}>Reports</div>
                </a>
              </div>
              <a className={styles.frameParent2}>
                <div className={styles.iconContainer}>
                  <img className={styles.icon1} loading="lazy" alt="" />
                </div>
                <div className={styles.pagetitle2}>Alerts</div>
              </a>
            </div>
          </div>
          <div className={styles.frameParent3}>
            <div className={styles.activeWrapper}>
              <div className={styles.active} />
            </div>
            <div className={styles.activeParent}>
              <div className={styles.active1} />
              <div className={styles.active2} />
            </div>
          </div>
        </div>
        <div className={styles.frameParent4}>
          <div className={styles.frameWrapper2}>
            <a className={styles.frameParent5}>
              <div className={styles.iconFrame}>
                <img className={styles.icon2} loading="lazy" alt="" />
              </div>
              <div className={styles.pagetitle3}>Settings</div>
            </a>
          </div>
          <div className={styles.active3} />
        </div>
      </div>
      <FrameComponent1
        cVVDisplay="inline-block"
        xDisplay="inline-block"
        vALIDTHRUDisplay="inline-block"
        divDisplay="inline-block"
        cVVDisplay1="inline-block"
        xDisplay1="inline-block"
        vALIDTHRUDisplay1="inline-block"
        divDisplay1="inline-block"
      />
    </div>
  );
};

export default SideBarNotificationProC;
