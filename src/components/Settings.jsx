import SideBarNotificationProC2 from "./SideBarNotificationProC2";
import IconSet from "./IconSet";
import styles from "./Settings.module.css";
import SideBarNotificationProC from "./SideBarNotificationProC";
import FrameComponent from "./FrameComponent";
import plus_icon from "../assets/plus_icon.png";
const Settings = () => {
  return (
    <div className={styles.settings}>
      <div className={styles.sidebar}>
      <SideBarNotificationProC />
      </div>
      <main className={styles.settingsInner}>
        <section className={styles.frameParent}>
          <FrameComponent />
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
                        <img className={styles.icon} src={plus_icon} alt="" />
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
                      <img className={styles.icon1} alt="" src={plus_icon} />
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
                    <input className={styles.geometryScaler} placeholder="68 F" type="text" />
                  </div>
                  <div className={styles.functionCombiner1}>
                    <div className={styles.minimumThresholdWrapper}>
                      <div className={styles.minimumThreshold}>
                        Minimum Threshold
                      </div>
                    </div>
                    <input className={styles.rectangleParent1} placeholder="68 F" type="text" />
                  </div>
                  <div className={styles.functionCombiner2}>
                    <div className={styles.maximumThresholdWrapper}>
                      <div className={styles.maximumThreshold}>
                        Maximum Threshold
                      </div>
                    </div>
                    <input className={styles.rectangleParent2} placeholder="78 F" type="text" />
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
