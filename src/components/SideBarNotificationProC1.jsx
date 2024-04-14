import FrameComponent1 from "./FrameComponent1";
import styles from "./SideBarNotificationProC1.module.css";

const SideBarNotificationProC1 = () => {
  return (
    <div className={styles.sidebarNotificationProC}>
      <div className={styles.sideBarSeparator}>
        <div className={styles.sideBarSeparatorChild} />
        <div className={styles.wrapper}>
          <img className={styles.icon} loading="lazy" alt="" />
        </div>
        <img
          className={styles.separatorIcon}
          loading="lazy"
          alt=""
          src="/separator.svg"
        />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.vuesaxBoldElementWrapper}>
            <div className={styles.vuesaxBoldElement}>
              <div className={styles.vuesaxBoldElementInner}>
                <div className={styles.frameContainer}>
                  <a className={styles.frameA} target="_blank">
                    <div className={styles.vuesaxboldelement3Wrapper}>
                      <img
                        className={styles.vuesaxboldelement3Icon}
                        loading="lazy"
                        alt=""
                        src="/vuesaxboldelement3.svg"
                      />
                    </div>
                    <div className={styles.pagetitle}>Dashboard</div>
                  </a>
                  <div className={styles.frameWrapper}>
                    <a className={styles.frameParent1}>
                      <div className={styles.iconWrapper}>
                        <img className={styles.icon1} loading="lazy" alt="" />
                      </div>
                      <div className={styles.pagetitle1}>Reports</div>
                    </a>
                  </div>
                </div>
              </div>
              <a className={styles.frameParent2}>
                <div className={styles.iconContainer}>
                  <img
                    className={styles.icon2}
                    loading="lazy"
                    alt=""
                    src="/icon-1.svg"
                  />
                </div>
                <div className={styles.pagetitle2}>Alerts</div>
              </a>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.activeWrapper}>
              <div className={styles.active} />
            </div>
            <div className={styles.active1} />
          </div>
        </div>
        <div className={styles.frameParent3}>
          <div className={styles.frameWrapper1}>
            <div className={styles.frameParent4}>
              <div className={styles.iconFrame}>
                <img
                  className={styles.icon3}
                  loading="lazy"
                  alt=""
                  src="/icon-2.svg"
                />
              </div>
              <div className={styles.pagetitle3}>Settings</div>
            </div>
          </div>
          <div className={styles.activeParent}>
            <div className={styles.active2} />
            <div className={styles.active3} />
          </div>
        </div>
      </div>
      <FrameComponent1
        background="175x108.54x-734738522"
        background1="175x108.54x-1911330813"
      />
    </div>
  );
};

export default SideBarNotificationProC1;
