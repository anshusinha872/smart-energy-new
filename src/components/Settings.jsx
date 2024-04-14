import SideBarNotificationProC2 from "./SideBarNotificationProC2";
import IconSet from "./IconSet";
import styles from "./Settings.module.css";

const Settings = () => {
  return (
    <div className={styles.settings}>
      <div className={styles.sidebar}>
        <SideBarNotificationProC2 />
      </div>
      <main className={styles.settingsInner}>
        <section className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.settingsWrapper}>
                <h1 className={styles.settings1}>Settings</h1>
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
            </div>
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameInner} />
            <div className={styles.shapeCollectionWrapper}>
              <form className={styles.shapeCollection}>
                <div className={styles.imageStack}>
                  <h3 className={styles.title}>By Room</h3>
                </div>
                <div className={styles.rectangleContainer}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.frameDiv}>
                    <button className={styles.conferenceRoomWrapper}>
                      <div className={styles.conferenceRoom}>
                        Conference Room
                      </div>
                    </button>
                    <div className={styles.dropdownMenu}>
                      <button className={styles.tableRowCollection}>
                        <div className={styles.workSpace}>Work Space</div>
                      </button>
                      <button className={styles.tableRowCollection1}>
                        <div className={styles.serverRoom}>Server Room</div>
                      </button>
                      <button className={styles.tableRowCollection2}>
                        <div className={styles.cafeteria}>Cafeteria</div>
                      </button>
                      <button className={styles.progressBarClusterParent}>
                        <div className={styles.progressBarCluster} />
                        <img className={styles.icon} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
                <IconSet
                  occupancyDay="Occupancy - day"
                  occupancyTime="Occupancy - Time"
                />
                <IconSet
                  occupancyDay="Peak Occupancy - day"
                  occupancyTime="peak Occupancy - Time"
                  propPadding="0px var(--padding-9xs)"
                  propWidth="497px"
                  propMinWidth="128px"
                  propDisplay="inline-block"
                  propMinWidth1="unset"
                  sliderControlsHeight="55px"
                  sliderControlsPadding="var(--padding-mid) var(--padding-sm)"
                  sliderControlsGap="unset"
                  sliderControlsHeight1="55px"
                  sliderControlsFlex="0.8929"
                  sliderControlsPadding1="var(--padding-mid) var(--padding-sm)"
                  sliderControlsGap1="unset"
                />
              </form>
            </div>
            <form className={styles.customShape}>
              <div className={styles.dataAggregator}>
                <div className={styles.logicSplitter}>
                  <h3 className={styles.title1}>By Device</h3>
                </div>
                <div className={styles.imageManipulation}>
                  <div className={styles.imageManipulationChild} />
                  <div className={styles.geometryTransformer}>
                    <div className={styles.valueComparator}>
                      <button className={styles.conditionHandler}>
                        <div className={styles.hvac}>HVAC</div>
                      </button>
                    </div>
                    <button className={styles.functionCreator}>
                      <div className={styles.smartLights}>Smart Lights</div>
                    </button>
                    <button className={styles.functionCreator1}>
                      <div className={styles.securitySystem}>
                        Security System
                      </div>
                    </button>
                    <button className={styles.functionCreator2}>
                      <div className={styles.printers}>Printers</div>
                    </button>
                    <button className={styles.functionCreator3}>
                      <div className={styles.projecters}>Projecters</div>
                    </button>
                    <button className={styles.dataNormalizer}>
                      <div className={styles.errorDetector} />
                      <img className={styles.icon1} alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.imageRecognitionWrapper}>
                <div className={styles.imageRecognition}>
                  <div className={styles.functionCombiner}>
                    <div className={styles.dataSorter}>
                      <div className={styles.unit}>Unit</div>
                    </div>
                    <div className={styles.geometryScaler}>
                      <div className={styles.geometryScalerChild} />
                      <div className={styles.conditionChecker}>
                        <div className={styles.temperature}>Temperature</div>
                      </div>
                      <img
                        className={styles.materialSymbolsarrowDropDoIcon}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className={styles.functionCombiner1}>
                    <div className={styles.minimumThresholdWrapper}>
                      <div className={styles.minimumThreshold}>
                        Minimum Threshold
                      </div>
                    </div>
                    <div className={styles.rectangleParent1}>
                      <div className={styles.frameChild1} />
                      <div className={styles.frameParent1}>
                        <div className={styles.errorCorrectorWrapper}>
                          <div className={styles.errorCorrector}>0</div>
                        </div>
                        <input
                          className={styles.f}
                          placeholder="68 F"
                          type="text"
                        />
                      </div>
                      <img
                        className={styles.materialSymbolsarrowDropDoIcon1}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className={styles.functionCombiner2}>
                    <div className={styles.maximumThresholdWrapper}>
                      <div className={styles.maximumThreshold}>
                        Maximum Threshold
                      </div>
                    </div>
                    <div className={styles.rectangleParent2}>
                      <div className={styles.frameChild2} />
                      <div className={styles.frameParent2}>
                        <div className={styles.wrapper}>
                          <div className={styles.div}>0</div>
                        </div>
                        <div className={styles.f1}>78 F</div>
                      </div>
                      <div className={styles.materialSymbolsarrowDropDoWrapper}>
                        <img
                          className={styles.materialSymbolsarrowDropDoIcon2}
                          loading="lazy"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Settings;
