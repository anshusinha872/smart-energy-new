import SideBarNotificationProC3 from "./SideBarNotificationProC3";
import styles from "./Reports.module.css";
import SideBarNotificationProC from "./SideBarNotificationProC";
import FrameComponent from "./FrameComponent";
import dropdownIcon from "../assets/dropdown_arrow.png";
import statsgraph from "../assets/Capture3.png";
import Figpie from "../assets/Figpie.png";
const Reports = () => {
  return (
    <div className={styles.reports}>
      <div className={styles.sidebar}>
      <SideBarNotificationProC />
      </div>
      <section className={styles.reportsInner}>
        <div className={styles.frameParent}>
          {/* <div className={styles.frameGroup}>
            <div className={styles.reportsWrapper}>
              <h1 className={styles.reports1}>Reports</h1>
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
                  />
                </div>
              </div>
            </div>
          </div> */}
          <FrameComponent />
          <div className={styles.consumptionPerDayParent}>
            <div className={styles.consumptionPerDay}>
              <div className={styles.titleParent}>
                <h1 className={styles.title}>Usage</h1>
                <div className={styles.userProfileIconWrapper}>
                  <div className={styles.userProfileIcon}>
                    <select className={styles.daily}>
                      <option className={styles.option} value="1">
                        Daily
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className={styles.consumptionDay}>
                <img className={styles.capture31Icon} src={statsgraph} alt="" />
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameInner} />
                  <div className={styles.mediumPieChart}>
                    <div className={styles.text}>9:00</div>
                  </div>
                  <div className={styles.mediumPieChart1}>10:00</div>
                  <div className={styles.mediumPieChart2}>
                    <div className={styles.text1}>11:00</div>
                  </div>
                  <div className={styles.mediumPieChart3}>
                    <div className={styles.text2}>12:00</div>
                  </div>
                  <div className={styles.mediumPieChart4}>13:00</div>
                  <div className={styles.mediumPieChart5}>14:00</div>
                  <div className={styles.mediumPieChart6}>15:00</div>
                  <div className={styles.mediumPieChart7}>
                    <div className={styles.text3}>16:00</div>
                  </div>
                  <div className={styles.mediumPieChart8}>17:00</div>
                  <div className={styles.mediumPieChart9}>18:00</div>
                  <div className={styles.mediumPieChart10}>
                    <div className={styles.text4}>19:00</div>
                  </div>
                  <div className={styles.mediumPieChart11}>20:00</div>
                </div>
              </div>
            </div>
            <div className={styles.mediumPieChart12}>
              <div className={styles.contentBox}>
                <div className={styles.frameDiv}>
                  <div className={styles.titleGroup}>
                    <b className={styles.title1}>Equipment Analysis</b>
                    <select className={styles.frameSelect}>
                      <option className={styles.option} value="1">
                        Monthly
                      </option>
                      <option className={styles.option1} value="2">
                        2
                      </option>
                      <option className={styles.option2} value="3">
                        3
                      </option>
                    </select>
                  </div>
                  <div className={styles.pieChart}>
                    <img className={styles.figpieIcon} src={Figpie} loading="lazy" alt="" />
                  </div>
                </div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.contentWrapper}>
                  <div className={styles.content}>
                    <div className={styles.frameParent2}>
                      <div className={styles.layoutBWrapper}>
                        <div className={styles.layoutB} />
                      </div>
                      <div className={styles.centralizedHvacSystem}>
                        Centralized HVAC System
                      </div>
                    </div>
                    <div className={styles.wrapper}>
                      <b className={styles.b}>45%</b>
                    </div>
                  </div>
                </div>
                <div className={styles.content1}>
                  <div className={styles.contentInner}>
                    <div className={styles.frameParent3}>
                      <div className={styles.layoutCWrapper}>
                        <div className={styles.layoutC} />
                      </div>
                      <div className={styles.securityIcon}>
                        <div className={styles.securitySystems1}>
                          Security Systems
                        </div>
                        <div className={styles.container}>
                          <b className={styles.b1}>25%</b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.separator} />
                  <div className={styles.contentChild}>
                    <div className={styles.frameParent4}>
                      <div className={styles.ellipseWrapper}>
                        <div className={styles.ellipseDiv} />
                      </div>
                      <div className={styles.lightingFixturesParent}>
                        <div className={styles.lightingFixtures}>
                          Lighting Fixtures
                        </div>
                        <div className={styles.frame}>
                          <b className={styles.b2}>30%</b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reports;
