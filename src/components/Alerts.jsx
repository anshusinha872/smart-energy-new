import SideBarNotificationProC1 from "./SideBarNotificationProC1";
import styles from "./Alerts.module.css";

const Alerts = () => {
  return (
    <div className={styles.alerts}>
      <div className={styles.sidebar}>
        <SideBarNotificationProC1 />
      </div>
      <main className={styles.alertsInner}>
        <section className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.alertsWrapper}>
              <h1 className={styles.alerts1}>Alerts</h1>
            </div>
            <div className={styles.frameContainer}>
              <img className={styles.frameChild} loading="lazy" alt="" />
              <div className={styles.rectangleParent}>
                <div className={styles.frameItem} />
                <div className={styles.healthiconsuiUserProfileParent}>
                  <img
                    className={styles.healthiconsuiUserProfile}
                    loading="lazy"
                    alt=""
                    src="/healthiconsuiuserprofile.svg"
                  />
                  <div className={styles.alexCooperWrapper}>
                    <div className={styles.alexCooper}>Alex Cooper</div>
                  </div>
                </div>
                <div className={styles.ictwotoneArrowDropDownWrapper}>
                  <img
                    className={styles.ictwotoneArrowDropDownIcon}
                    loading="lazy"
                    alt=""
                    src="/ictwotonearrowdropdown.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleGroup}>
            <footer className={styles.frameInner} />
            <div className={styles.frameDiv}>
              <div className={styles.frameWrapper}>
                <div className={styles.titleParent}>
                  <h3 className={styles.title}>Alerts Details</h3>
                  <div className={styles.frameWrapper1}>
                    <div className={styles.component1Parent}>
                      <button className={styles.component1}>
                        <b className={styles.text6xxl}>All</b>
                      </button>
                      <button className={styles.component13}>
                        <b className={styles.text6xxl1}>Unread</b>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.misc}>
                <div className={styles.miscChild} />
                <div className={styles.background}>
                  <div className={styles.backgroundChild} />
                  <div className={styles.searchIconWrapper}>
                    <img className={styles.searchIcon} alt="" />
                  </div>
                  <input
                    className={styles.search}
                    placeholder="Search"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.vectorWrapper}>
                <img className={styles.vectorIcon} loading="lazy" alt="" />
              </div>
              <div className={styles.today}>Today</div>
              <div className={styles.frameWrapper2}>
                <div className={styles.rectangleContainer}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.groupDiv}>
                    <div className={styles.frameChild1} />
                    <div className={styles.mar}>
                      <p className={styles.p}>15</p>
                      <p className={styles.mar1}>MAR</p>
                    </div>
                  </div>
                  <div className={styles.frameWrapper3}>
                    <div className={styles.frameParent2}>
                      <div className={styles.deviceHasExceededThresholdWrapper}>
                        <div className={styles.deviceHasExceeded}>
                          Device has exceeded threshold value. Immediate
                          attention required to prevent potential issues.
                        </div>
                      </div>
                      <button className={styles.component11}>
                        <b className={styles.text6xxl2}>view</b>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Alerts;
