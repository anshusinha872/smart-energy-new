import SideBarNotificationProC from "./SideBarNotificationProC";
import FrameComponent from "./FrameComponent";
import SystemEfficiency from "./SystemEfficiency";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.sidebar}>
        <SideBarNotificationProC />
      </div>
      <main className={styles.dashboardInner}>
        <section className={styles.frameParent}>
          <FrameComponent />
          <div className={styles.frameGroup}>
            <div className={styles.connectedDevicesParent}>
              <h3 className={styles.connectedDevices}>Connected Devices</h3>
              <h3 className={styles.statistics}>Statistics</h3>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <div className={styles.smartLight}>Smart Light</div>
                  <div className={styles.activeFor3HoursParent}>
                    <div className={styles.activeFor3}>Active for 3 hours</div>
                    <div className={styles.comparisonOperator}>
                      <div className={styles.usageWrapper}>
                        <div className={styles.usage}>Usage</div>
                      </div>
                      <div className={styles.kwh}>3Kwh</div>
                    </div>
                    <div className={styles.brightnessParent}>
                      <div className={styles.brightness}>Brightness</div>
                      <div className={styles.rectangleGroup}>
                        <div className={styles.frameItem} />
                        <div className={styles.rectangleContainer}>
                          <div className={styles.frameInner} />
                          <img className={styles.iconsun} alt="" />
                        </div>
                        <div className={styles.wrapper}>
                          <div className={styles.div}>75%</div>
                        </div>
                      </div>
                    </div>
                    <button className={styles.groupButton}>
                      <div className={styles.rectangleDiv} />
                      <div className={styles.frameParent1}>
                        <div className={styles.frameWrapper}>
                          <img className={styles.groupIcon} alt="" />
                        </div>
                        <div className={styles.turnOff}>Turn Off</div>
                      </div>
                    </button>
                  </div>
                </div>
                <div className={styles.rectangleParent1}>
                  <div className={styles.frameChild1} />
                  <div className={styles.smartRouterParent}>
                    <div className={styles.smartRouter}>Smart Router</div>
                    <div className={styles.activeFor8}>Active for 8 hours</div>
                  </div>
                  <div className={styles.frameParent2}>
                    <div className={styles.frameParent3}>
                      <div className={styles.usageContainer}>
                        <div className={styles.usage1}>Usage</div>
                      </div>
                      <div className={styles.kwh1}>3Kwh</div>
                    </div>
                    <div className={styles.signalParent}>
                      <div className={styles.signal}>Signal</div>
                      <div className={styles.errorHandlerWrapper}>
                        <div className={styles.errorHandler}>
                          <div className={styles.connection} />
                          <div className={styles.errorHandlerChild} />
                          <div className={styles.errorHandlerItem} />
                          <div className={styles.errorHandlerInner} />
                          <div className={styles.errorHandlerChild1} />
                        </div>
                      </div>
                    </div>
                    <div className={styles.groupDiv}>
                      <div className={styles.frameChild2} />
                      <div className={styles.turnOnParent}>
                        <div className={styles.turnOn}>Turn On</div>
                        <div className={styles.frameWrapper1}>
                          <img className={styles.frameChild3} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.rectangleParent2}>
                  <div className={styles.frameChild4} />
                  <div className={styles.frameWrapper2}>
                    <div className={styles.hvacParent}>
                      <div className={styles.hvac}>HVAC</div>
                      <div className={styles.frameWrapper3}>
                        <div className={styles.frameParent4}>
                          <div className={styles.frameWrapper4}>
                            <div className={styles.parent}>
                              <b className={styles.b}>24℃</b>
                              <div className={styles.acUnitWrapper}>
                                <img
                                  className={styles.acUnitIcon}
                                  loading="lazy"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                          <div className={styles.temperture}>Temperture</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper5}>
                    <div className={styles.frameParent5}>
                      <div className={styles.rectangleParent3}>
                        <div className={styles.frameChild5} />
                        <div className={styles.frameChild6} />
                        <div className={styles.frameChild7} />
                      </div>
                      <div className={styles.group}>
                        <div className={styles.div1}>32℃</div>
                        <div className={styles.frameWrapper6}>
                          <div className={styles.dataAggregatorParent}>
                            <div className={styles.dataAggregator} />
                            <div className={styles.dataAggregator1} />
                            <div className={styles.dataAggregator2} />
                            <div className={styles.conditionSplitter} />
                            <div className={styles.valueProcessor} />
                            <div className={styles.inputCollector} />
                            <div className={styles.outputArranger} />
                          </div>
                        </div>
                        <div className={styles.div2}>16℃</div>
                      </div>
                    </div>
                  </div>
                  <button className={styles.rectangleParent4}>
                    <div className={styles.frameChild8} />
                    <div className={styles.frameParent6}>
                      <div className={styles.frameWrapper7}>
                        <img className={styles.frameChild9} alt="" />
                      </div>
                      <div className={styles.turnOff1}>Turn Off</div>
                    </div>
                  </button>
                </div>
              </div>
              <div className={styles.frameParent7}>
                <div className={styles.systemEfficiencyParent}>
                  <SystemEfficiency
                    settingSuggest="28x28x2110175817"
                    overallSystem="Overall System"
                    efficiency="Efficiency"
                    prop="75%"
                  />
                  <SystemEfficiency
                    settingSuggest="28x28x-114036743"
                    overallSystem="Renewable Energy"
                    efficiency="Utilization"
                    prop="70%"
                    propPadding="var(--padding-18xl) var(--padding-lgi) var(--padding-17xl)"
                    frameDivPadding="0px var(--padding-32xl)"
                    frameDivPadding1="0px var(--padding-19xl)"
                  />
                  <div className={styles.costSavingsParent}>
                    <div className={styles.costSavings}>
                      <div className={styles.costSavingsChild} />
                      <div className={styles.dollarWrapper}>
                        <img
                          className={styles.dollarIcon}
                          loading="lazy"
                          alt=""
                        />
                      </div>
                      <div className={styles.energyCostSavingsWrapper}>
                        <div className={styles.energyCostSavingsContainer}>
                          <span className={styles.energyCostSavingsContainer1}>
                            <p className={styles.energyCost}>Energy Cost</p>
                            <p className={styles.savings}>Savings</p>
                          </span>
                        </div>
                      </div>
                      <div className={styles.container}>
                        <div className={styles.div3}>150</div>
                      </div>
                      <div className={styles.metricTonsCo2year}>
                        metric tons CO2/year
                      </div>
                    </div>
                    <div className={styles.vuesaxbulkarrowCircleDownWrapper}>
                      <img
                        className={styles.vuesaxbulkarrowCircleDownIcon}
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.rectangleParent5}>
                  <div className={styles.frameChild10} />
                  <div className={styles.frameParent8}>
                    <div className={styles.frameParent9}>
                      <div className={styles.frameWrapper8}>
                        <div className={styles.usageStatusParent}>
                          <div className={styles.usageStatus}>
                            Usage Status:
                          </div>
                          <div className={styles.airConditioning}>
                            Air Conditioning
                          </div>
                        </div>
                      </div>
                      <div className={styles.buttonParent}>
                        <select className={styles.button} />
                        <select className={styles.button1} />
                      </div>
                    </div>
                    <div className={styles.frameParent10}>
                      <div className={styles.textWrapper}>
                        <div className={styles.text}>Total spend:</div>
                      </div>
                      <div className={styles.frameParent11}>
                        <div className={styles.amountWrapper}>
                          <div className={styles.amount}>35.02Kwh</div>
                        </div>
                        <img
                          className={styles.lineIcon}
                          loading="lazy"
                          alt=""
                        />
                      </div>
                      <div className={styles.textContainer}>
                        <div className={styles.text1}>Total Hours:</div>
                      </div>
                      <div className={styles.frameWrapper9}>
                        <div className={styles.frameParent12}>
                          <div className={styles.amountParent}>
                            <div className={styles.amount1}>32h</div>
                            <img
                              className={styles.frameChild11}
                              loading="lazy"
                              alt=""
                            />
                          </div>
                          <div className={styles.frameParent13}>
                            <div className={styles.textFrame}>
                              <div className={styles.text2}>Energy Saved:</div>
                            </div>
                            <div className={styles.amount2}>20%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent14}>
                    <div className={styles.frameWrapper10}>
                      <div className={styles.frameParent15}>
                        <div className={styles.rectangleWrapper}>
                          <div className={styles.frameChild12} />
                        </div>
                        <div className={styles.rectangleFrame}>
                          <div className={styles.frameChild13} />
                        </div>
                        <div className={styles.frameChild14} />
                        <div className={styles.frameParent16}>
                          <button className={styles.frameButton}>
                            <div className={styles.text3}>30kw</div>
                          </button>
                          <div className={styles.frameWrapper11}>
                            <div className={styles.rectangleParent6}>
                              <div className={styles.frameChild15} />
                              <div className={styles.frameChild16} />
                            </div>
                          </div>
                        </div>
                        <div className={styles.rectangleWrapper1}>
                          <div className={styles.frameChild17} />
                        </div>
                        <div className={styles.rectangleWrapper2}>
                          <div className={styles.frameChild18} />
                        </div>
                        <div className={styles.rectangleWrapper3}>
                          <div className={styles.frameChild19} />
                        </div>
                        <div className={styles.rectangleWrapper4}>
                          <div className={styles.frameChild20} />
                        </div>
                        <div className={styles.rectangleWrapper5}>
                          <div className={styles.frameChild21} />
                        </div>
                        <div className={styles.frameChild22} />
                      </div>
                    </div>
                    <div className={styles.frameWrapper12}>
                      <div className={styles.lineWrapper}>
                        <div className={styles.lineDiv} />
                      </div>
                    </div>
                    <div className={styles.frameWrapper13}>
                      <div className={styles.dataAggregatorGroup}>
                        <div className={styles.dataAggregator3}>9:00</div>
                        <div className={styles.dataAggregator4}>10:00</div>
                        <div className={styles.dataAggregator5}>11:00</div>
                        <div className={styles.dataAggregator6}>12:00</div>
                        <div className={styles.dataAggregator7}>13:00</div>
                        <div className={styles.dataAggregator8}>14:00</div>
                        <div className={styles.dataAggregator9}>15:00</div>
                        <div className={styles.dataAggregator10}>16:00</div>
                        <div className={styles.dataAggregator11}>17:00</div>
                        <div className={styles.dataAggregator12}>18:00</div>
                        <div className={styles.dataAggregator13}>20:00</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.branchSplitter}>
                <div className={styles.valueFilter}>
                  <div className={styles.tablerbulbParent}>
                    <img
                      className={styles.tablerbulbIcon}
                      loading="lazy"
                      alt=""
                    />
                    <div className={styles.comparisonOperator1}>
                      <div className={styles.recommendations}>
                        Recommendations
                      </div>
                    </div>
                  </div>
                  <div className={styles.iterativeProcessor}>
                    <ul className={styles.turnOnEnergySavingModeOr}>
                      <li className={styles.turnOnEnergySaving}>
                        Turn on energy-saving mode or sleep settings for
                        computers and IT equipment during periods of inactivity.
                      </li>
                      <li className={styles.changeSettingsFor}>
                        Change settings for room occupancy, aiming for 30%
                        energy reduction during non-peak hours.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.valueFilter1}>
                  <select className={styles.valueFilterChild} />
                  <div className={styles.valueFilterInner}>
                    <div className={styles.functionApplierParent}>
                      <div className={styles.functionApplier} />
                      <div className={styles.errorHandler1} />
                      <div className={styles.ellipseDiv} />
                      <div className={styles.capacity}>Capacity</div>
                      <div className={styles.frame}>
                        <div className={styles.div4}>75%</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.mainPowerParent}>
                    <div className={styles.mainPower}>
                      <div className={styles.mainPowerChild} />
                      <div className={styles.dataNormalizer}>
                        <div className={styles.dataNormalizerInner}>
                          <input
                            className={styles.groupInput}
                            type="radio"
                            name="radioGroup-1"
                          />
                        </div>
                        <div className={styles.mainPower1}>Main Power</div>
                      </div>
                      <div className={styles.div5}>50%</div>
                    </div>
                    <div className={styles.mainPower2}>
                      <div className={styles.mainPowerItem} />
                      <div className={styles.frameParent17}>
                        <div className={styles.frameWrapper14}>
                          <input
                            className={styles.frameChild23}
                            type="radio"
                            name="radioGroup-1"
                          />
                        </div>
                        <div className={styles.greenEnergy}>Green Energy</div>
                      </div>
                      <div className={styles.div6}>50%</div>
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

export default Dashboard;
