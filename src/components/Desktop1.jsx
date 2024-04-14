import TreeTrunk from "./TreeTrunk";
import KdTreeZ from "./KdTreeZ";
import ItemCollector from "./ItemCollector";
import FrameComponent18 from "./FrameComponent18";
import Footer1 from "./Footer1";
import styles from "./Desktop1.module.css";

const Desktop1 = () => {
  return (
    <div className={styles.desktop10}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <b className={styles.uploadStationImage}>upload station Image</b>
      </div>
      <TreeTrunk />
      <img className={styles.maskGroupIcon} loading="lazy" alt="" />
      <div className={styles.desktop10Inner}>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <div className={styles.frameInner} />
        </div>
      </div>
      <main className={styles.desktop10Child}>
        <section className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.pleaseProvideTheNecessaryIParent}>
                <div className={styles.pleaseProvideThe}>
                  Please provide the necessary information to help us gain a
                  better understanding of your needs.
                </div>
                <div className={styles.allFieldsAre}>
                  All fields are mandatory
                </div>
              </div>
              <div className={styles.rectangleContainer}>
                <div className={styles.rectangleDiv} />
                <div className={styles.groupDiv}>
                  <div className={styles.frameChild1} />
                  <b className={styles.personalDetails}>Personal details</b>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.frameDiv}>
                    <div className={styles.mobileNoParent}>
                      <b className={styles.mobileNo}>Full Name</b>
                      <div className={styles.rectangleParent1}>
                        <div className={styles.frameChild2} />
                        <input
                          className={styles.alexCooper}
                          placeholder="Alex Cooper"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className={styles.mobileNoGroup}>
                      <b className={styles.mobileNo1}>Email ID</b>
                      <div className={styles.rectangleParent2}>
                        <div className={styles.frameChild3} />
                        <input
                          className={styles.alexcoopergmailcom}
                          placeholder="alexcooper@gmail.com"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className={styles.mobileNoContainer}>
                      <b className={styles.mobileNo2}>Mobile Number</b>
                      <div className={styles.rectangleParent3}>
                        <div className={styles.frameChild4} />
                        <input
                          className={styles.input}
                          placeholder="+1 834 333 6784"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rectangleParent4}>
              <div className={styles.frameChild5} />
              <div className={styles.rectangleParent5}>
                <div className={styles.frameChild6} />
                <b className={styles.organizationDetails}>
                  Organization Details
                </b>
              </div>
              <div className={styles.frameWrapper1}>
                <div className={styles.frameParent1}>
                  <div className={styles.mobileNoParent1}>
                    <b className={styles.mobileNo3}>Organization Name</b>
                    <div className={styles.rectangleParent6}>
                      <div className={styles.frameChild7} />
                      <input
                        className={styles.ambitionTower}
                        placeholder="Ambition Tower"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className={styles.mobileNoParent2}>
                    <b className={styles.mobileNo4}>Industry Sector</b>
                    <div className={styles.rectangleParent7}>
                      <div className={styles.frameChild8} />
                      <input
                        className={styles.telecommunications}
                        placeholder="Telecommunications"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className={styles.mobileNoParent3}>
                    <b className={styles.mobileNo5}>Number of Employees</b>
                    <div className={styles.rectangleParent8}>
                      <div className={styles.frameChild9} />
                      <input
                        className={styles.input1}
                        placeholder="20"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rectangleParent9}>
              <div className={styles.frameChild10} />
              <div className={styles.rectangleParent10}>
                <div className={styles.frameChild11} />
                <b className={styles.addressDetails}>Address Details</b>
              </div>
              <div className={styles.frameWrapper2}>
                <div className={styles.frameParent2}>
                  <div className={styles.decisionMakerParent}>
                    <div className={styles.decisionMaker}>
                      <b className={styles.mobileNo6}>Street Address</b>
                      <div className={styles.rectangleParent11}>
                        <div className={styles.frameChild12} />
                        <input
                          className={styles.rueLevy}
                          placeholder="3784 Rue Levy"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className={styles.decisionMaker1}>
                      <b className={styles.mobileNo7}>State/Province</b>
                      <div className={styles.rectangleParent12}>
                        <div className={styles.frameChild13} />
                        <input
                          className={styles.ontario}
                          placeholder="Ontario"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.dataAggregator}>
                    <div className={styles.mobileNoParent4}>
                      <b className={styles.mobileNo8}>City</b>
                      <select className={styles.optionParent}>
                        <option value="option">option</option>
                        <option value="option1">option1</option>
                      </select>
                    </div>
                    <div className={styles.mobileNoParent5}>
                      <b className={styles.mobileNo9}>ZIP/Postal Code</b>
                      <div className={styles.rectangleParent13}>
                        <div className={styles.frameChild14} />
                        <input
                          className={styles.p0x1k0}
                          placeholder="P0X 1K0"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.variableHolder}>
                    <b className={styles.mobileNo10}>Country</b>
                    <select className={styles.variableHolderChild} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rectangleParent14}>
              <div className={styles.frameChild15} />
              <div className={styles.rectangleParent15}>
                <div className={styles.frameChild16} />
                <b
                  className={styles.buildingLayoutAnd}
                >{`Building Layout and Usage `}</b>
              </div>
              <div className={styles.treeBuilder}>
                <form className={styles.treePruner}>
                  <div className={styles.treeSplitterWrapper}>
                    <div className={styles.treeSplitter}>
                      <div className={styles.decorator}>
                        <b className={styles.mobileNo11}>Type of building</b>
                        <div className={styles.wrapperGroup515718}>
                          <input
                            className={styles.wrapperGroup515718Child}
                            type="text"
                          />
                          <img className={styles.valueTrackerIcon} alt="" />
                        </div>
                      </div>
                      <div className={styles.dataFlowController}>
                        <div className={styles.treeWalker}>
                          <b className={styles.mobileNo12}>Number of Floors</b>
                          <div className={styles.rectangleParent16}>
                            <div className={styles.frameChild17} />
                            <div className={styles.networkTree}>2</div>
                          </div>
                        </div>
                        <KdTreeZ
                          mobileNo="Energy consumption ( previous 12 months)"
                          documentpdf="document.pdf"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.quadradTree}>
                    <div className={styles.rasterTree}>
                      <b className={styles.mobileNo13}>Types of rooms</b>
                      <div className={styles.kdBTree}>
                        <div className={styles.bSPTreePlus}>
                          <div className={styles.bSPTreePlusChild} />
                          <input
                            className={styles.rtreePlus}
                            placeholder="Conference Room"
                            type="text"
                          />
                          <img className={styles.bSPTreePlusItem} alt="" />
                        </div>
                        <div className={styles.rectangleParent17}>
                          <div className={styles.frameChild18} />
                          <input
                            className={styles.frameInput}
                            placeholder="Service room"
                            type="text"
                          />
                          <img className={styles.groupIcon} alt="" />
                        </div>
                        <div className={styles.rectangleParent18}>
                          <div className={styles.frameChild19} />
                          <input
                            className={styles.frameChild20}
                            placeholder="Cafeteria"
                            type="text"
                          />
                          <img className={styles.frameChild21} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <KdTreeZ
                    mobileNo="Blueprint"
                    documentpdf="Blueprint.pdf"
                    propFlex="unset"
                    propMinWidth="unset"
                    propWidth="355px"
                    propAlignSelf="stretch"
                    propPadding="var(--padding-smi) var(--padding-smi) var(--padding-xs) var(--padding-xl)"
                    propPadding1="var(--padding-12xs) 0px 0px"
                    groupInputHeight="22px"
                    groupInputWidth="69px"
                    groupInputPadding="var(--padding-9xs) var(--padding-2xs)"
                  />
                </form>
              </div>
            </div>
            <div className={styles.keyValueHolder}>
              <div className={styles.rectangleParent19}>
                <div className={styles.frameChild22} />
                <div className={styles.rectangleParent20}>
                  <div className={styles.frameChild23} />
                  <b className={styles.equipmentDetails}>Equipment Details</b>
                </div>
                <div className={styles.frameWrapper3}>
                  <div className={styles.frameParent3}>
                    <div className={styles.frameWrapper4}>
                      <div className={styles.frameParent4}>
                        <div className={styles.mobileNoParent6}>
                          <b className={styles.mobileNo14}>name</b>
                          <div className={styles.rectangleParent21}>
                            <div className={styles.frameChild24} />
                            <input
                              className={styles.centralizedHvacSystem}
                              placeholder="Centralized HVAC System"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className={styles.mobileNoParent7}>
                          <b className={styles.mobileNo15}>quantity</b>
                          <select className={styles.groupSelect} />
                        </div>
                      </div>
                    </div>
                    <img
                      className={styles.frameChild25}
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <ItemCollector securitySystemsPlaceholde="Security Systems" />
              <ItemCollector
                securitySystemsPlaceholde="Lighting Fixtures"
                groupSelectPadding="var(--padding-sm) var(--padding-smi-7) var(--padding-mini) var(--padding-3xl)"
                groupSelectGap="unset"
                groupSelectHeight="47px"
              />
            </div>
            <div className={styles.rectangleParent22}>
              <div className={styles.frameChild26} />
              <div className={styles.rectangleParent23}>
                <div className={styles.frameChild27} />
                <b className={styles.existingInfrastructure}>
                  Existing Infrastructure
                </b>
              </div>
              <div className={styles.frameWrapper5}>
                <div className={styles.frameParent5}>
                  <div className={styles.mobileNoParent8}>
                    <b className={styles.mobileNo16}>
                      Current Energy Management Systems
                    </b>
                    <div className={styles.rectangleParent24}>
                      <div className={styles.frameChild28} />
                      <input
                        className={styles.na}
                        placeholder="N/A"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className={styles.mobileNoParent9}>
                    <b className={styles.mobileNo17}>
                      Building Management Systems
                    </b>
                    <div className={styles.rectangleParent25}>
                      <div className={styles.frameChild29} />
                      <input
                        className={styles.na1}
                        placeholder="N/A"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rectangleParent26}>
              <div className={styles.frameChild30} />
              <div className={styles.rectangleParent27}>
                <div className={styles.frameChild31} />
                <b className={styles.occupancyPatterns}>Occupancy Patterns</b>
              </div>
              <div className={styles.frameWrapper6}>
                <div className={styles.frameParent6}>
                  <div className={styles.frameParent7}>
                    <FrameComponent18 mobileNo="Occupancy Schedule - Day" />
                    <FrameComponent18
                      mobileNo="Peak Occupancy - Day "
                      groupSelectHeight="unset"
                      groupSelectPadding="var(--padding-sm) var(--padding-sm) var(--padding-mini) var(--padding-2xl)"
                      groupSelectGap="20px"
                    />
                  </div>
                  <div className={styles.frameParent8}>
                    <FrameComponent18
                      mobileNo="Occupancy Schedule - Time"
                      groupSelectHeight="unset"
                      groupSelectPadding="var(--padding-sm) var(--padding-sm) var(--padding-mini) var(--padding-2xl)"
                      groupSelectGap="20px"
                    />
                    <FrameComponent18
                      mobileNo="Peak Occupancy -  Time"
                      groupSelectHeight="unset"
                      groupSelectPadding="var(--padding-sm) var(--padding-sm) var(--padding-mini) var(--padding-2xl)"
                      groupSelectGap="20px"
                    />
                  </div>
                  <div className={styles.frameParent9}>
                    <div className={styles.mobileNoParent10}>
                      <b className={styles.mobileNo18}>Seasonal Variations</b>
                      <div className={styles.rectangleParent28}>
                        <div className={styles.frameChild32} />
                        <input
                          className={styles.na2}
                          placeholder="N/A"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className={styles.mobileNoParent11}>
                      <b className={styles.mobileNo19}>
                        Periods of Increased Activity
                      </b>
                      <div className={styles.rectangleParent29}>
                        <div className={styles.frameChild33} />
                        <div className={styles.workshopsAndConferences}>
                          Workshops and Conferences
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.featureSet}>
            <div className={styles.frameParent10}>
              <button className={styles.groupButton}>
                <div className={styles.frameChild34} />
                <b className={styles.cancel}>cancel</b>
              </button>
              <button className={styles.rectangleParent30}>
                <div className={styles.frameChild35} />
                <b className={styles.submit}>submit</b>
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer1 />
    </div>
  );
};

export default Desktop1;
