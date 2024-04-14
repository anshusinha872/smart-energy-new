import FrameComponent1 from "./FrameComponent1";
import styles from "./SideBarNotificationProC3.module.css";

const SideBarNotificationProC3 = () => {
  return (
    <div className={styles.sidebarNotificationProC}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.wrapper}>
          <img className={styles.icon} loading="lazy" alt="" />
        </div>
        <img className={styles.separatorIcon} loading="lazy" alt="" />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
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
            <div className={styles.active} />
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameWrapper}>
              <a className={styles.frameParent1}>
                <div className={styles.iconWrapper}>
                  <img className={styles.icon1} loading="lazy" alt="" />
                </div>
                <div className={styles.pagetitle1}>Reports</div>
              </a>
            </div>
            <div className={styles.active1} />
          </div>
        </div>
        <div className={styles.frameParent2}>
          <div className={styles.frameParent3}>
            <div className={styles.frameWrapper1}>
              <a className={styles.frameParent4}>
                <div className={styles.iconContainer}>
                  <img className={styles.icon2} loading="lazy" alt="" />
                </div>
                <div className={styles.pagetitle2}>Alerts</div>
              </a>
            </div>
            <div className={styles.active2} />
          </div>
          <div className={styles.frameParent5}>
            <div className={styles.frameWrapper2}>
              <a className={styles.frameParent6}>
                <div className={styles.iconFrame}>
                  <img className={styles.icon3} loading="lazy" alt="" />
                </div>
                <div className={styles.pagetitle3}>Settings</div>
              </a>
            </div>
            <div className={styles.active3} />
          </div>
        </div>
      </div>
      <FrameComponent1
        background="175x108.54x-367392904"
        background1="175x108.54x1189033540"
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

export default SideBarNotificationProC3;
