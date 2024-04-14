import FrameComponent1 from "./FrameComponent1";
import styles from "./SideBarNotificationProC.module.css";
import logo_1 from "../assets/logo_1.png";
import element_3 from "../assets/element_3.png";
import icon_11 from "../assets/icon_11.png";
import Group_1000004756 from "../assets/Group_1000004756.png";
import icon_121 from "../assets/icon_121.png";
const SideBarNotificationProC = () => {
  return (
    <div className={styles.sidebarNotificationProC}>
      <div className={styles.inputPort}>
        <div className={styles.inputPortChild} />
        <div className={styles.outputPort}>
          <img className={styles.operatorIcon} src={logo_1} loading="lazy" alt="" />
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
                      src={element_3}
                    />
                  </div>
                  <div className={styles.pagetitle}>Dashboard</div>
                </a>
              </div>
              <div className={styles.frameWrapper1}>
                <a className={styles.frameParent1}>
                  <div className={styles.iconWrapper}>
                    <img className={styles.icon} src={icon_11} loading="lazy" alt="" />
                  </div>
                  <div className={styles.pagetitle1}>Reports</div>
                </a>
              </div>
              <a className={styles.frameParent2}>
                <div className={styles.iconContainer}>
                  <img className={styles.icon1} src={Group_1000004756} loading="lazy" alt="" />
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
                <img className={styles.icon2} src={icon_121} loading="lazy" alt="" />
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
