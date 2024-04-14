import GroupComponent1 from "./GroupComponent1";
import DataAggregator from "./DataAggregator";
import styles from "./NestedLoop.module.css";

const NestedLoop = () => {
  return (
    <div className={styles.nestedLoop}>
      <header className={styles.dataSplitter}>
        <img className={styles.icon} loading="lazy" alt="" />
        <button className={styles.inputSource}>
          <div className={styles.errorHandler}>
            <div className={styles.functionCall}>
              <img className={styles.healthiconsuiUserProfile} alt="" />
              <div className={styles.list}>
                <div className={styles.alexCooper}>Alex Cooper</div>
              </div>
            </div>
            <div className={styles.ictwotoneArrowDropDownWrapper}>
              <img className={styles.ictwotoneArrowDropDownIcon} alt="" />
            </div>
          </div>
        </button>
      </header>
      <div className={styles.nestedLoopInner}>
        <div className={styles.frameParent}>
          <div className={styles.paymentMethodWrapper}>
            <h1 className={styles.paymentMethod}>Payment Method</h1>
          </div>
          <div className={styles.selectYourPayment}>
            Select your payment method and enter your payment information.
          </div>
        </div>
      </div>
      <div className={styles.nestedLoopChild}>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.vectorParent}>
              <img className={styles.frameChild} alt="" />
              <form className={styles.frameContainer}>
                <GroupComponent1 netBanking="net banking" />
                <button className={styles.rectangleParent}>
                  <div className={styles.frameItem} />
                  <img className={styles.bicreditCard2BackIcon} alt="" />
                  <div className={styles.creditdebitCardWrapper}>
                    <div className={styles.creditdebitCard}>
                      credit/debit card
                    </div>
                  </div>
                </button>
                <GroupComponent1
                  netBanking="Add New Card"
                  propPadding="var(--padding-9xl) var(--padding-4xs) var(--padding-9xl) var(--padding-10xl)"
                  propMinWidth="111px"
                />
              </form>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <div className={styles.frameParent2}>
                <div className={styles.cardNumberWrapper}>
                  <div className={styles.cardNumber}>Card Number</div>
                </div>
                <div className={styles.enterThe16DigitCardNumbeWrapper}>
                  <div className={styles.enterThe16}>
                    Enter the 16- digit card number
                  </div>
                </div>
                <div className={styles.frameWrapper1}>
                  <div className={styles.rectangleGroup}>
                    <div className={styles.frameInner} />
                    <div className={styles.xxxxXxxxXxxxXxxxWrapper}>
                      <input
                        className={styles.xxxxXxxxXxxx}
                        placeholder="xxxx xxxx xxxx xxxx"
                        type="number"
                      />
                    </div>
                    <div className={styles.oldVisaLogo3Parent}>
                      <img className={styles.oldVisaLogo3Icon} alt="" />
                      <div className={styles.frameWrapper2}>
                        <img className={styles.groupIcon} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.cardHolderName}>Card Holder Name</div>
                <div
                  className={styles.enterCardHolder}
                >{`Enter Card holder name `}</div>
                <div className={styles.rectangleContainer}>
                  <div className={styles.rectangleDiv} />
                  <input
                    className={styles.alexCooper1}
                    placeholder="Alex Cooper"
                    type="text"
                  />
                  <div className={styles.queue}>
                    <img className={styles.queueChild} alt="" />
                  </div>
                </div>
                <div className={styles.finalOutputWrapper}>
                  <div className={styles.finalOutput}>
                    <DataAggregator
                      cVVNumber="CVV Number"
                      enterThe3DigitNumber="Enter the 3-digit number"
                    />
                    <button className={styles.frameButton}>
                      <div className={styles.frameChild1} />
                      <input
                        className={styles.input}
                        placeholder="***"
                        type="number"
                      />
                    </button>
                  </div>
                </div>
                <div className={styles.frameWrapper3}>
                  <div className={styles.variableStorageParent}>
                    <DataAggregator
                      cVVNumber="Expiry Date"
                      enterThe3DigitNumber="Enter the Expiration date of the card"
                      propPadding="0px 0px var(--padding-smi-9)"
                      propWidth="129px"
                      propMinWidth="129px"
                    />
                    <div className={styles.frameParent3}>
                      <div className={styles.frameWrapper4}>
                        <div className={styles.rectangleParent1}>
                          <div className={styles.frameChild2} />
                          <div className={styles.div}>09</div>
                        </div>
                      </div>
                      <div className={styles.wrapper}>
                        <h2 className={styles.h2}>/</h2>
                      </div>
                      <div className={styles.rectangleParent2}>
                        <div className={styles.frameChild3} />
                        <div className={styles.div1}>2027</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper5}>
                <button className={styles.confirmPayWrapper}>
                  <div className={styles.confirmPay}>{`confirm & pay`}</div>
                </button>
              </div>
            </div>
            <div className={styles.frameWrapper6}>
              <div className={styles.frameParent4}>
                <div className={styles.frameWrapper7}>
                  <div className={styles.groupDiv}>
                    <div className={styles.frameChild4} />
                    <div className={styles.frameWrapper8}>
                      <div className={styles.pngwing1Parent}>
                        <img
                          className={styles.pngwing1Icon}
                          loading="lazy"
                          alt=""
                        />
                        <div className={styles.contactlessIcon1Wrapper}>
                          <img
                            className={styles.contactlessIcon1}
                            loading="lazy"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent5}>
                      <div className={styles.frameWrapper9}>
                        <div className={styles.cardHolderNameParent}>
                          <div className={styles.cardHolderName1}>
                            Card Holder name
                          </div>
                          <div className={styles.frameWrapper10}>
                            <div className={styles.frameParent6}>
                              <div className={styles.frameWrapper11}>
                                <img
                                  className={styles.frameChild5}
                                  loading="lazy"
                                  alt=""
                                />
                              </div>
                              <div className={styles.frameWrapper12}>
                                <img
                                  className={styles.frameChild6}
                                  loading="lazy"
                                  alt=""
                                />
                              </div>
                              <div className={styles.frameWrapper13}>
                                <img
                                  className={styles.frameChild7}
                                  loading="lazy"
                                  alt=""
                                />
                              </div>
                              <div className={styles.div2}> 3333</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameParent7}>
                        <div className={styles.parent}>
                          <div className={styles.div3}>9/27</div>
                          <div className={styles.oldVisaLogo5Wrapper}>
                            <img className={styles.oldVisaLogo5Icon} alt="" />
                          </div>
                        </div>
                        <div className={styles.visaCardWrapper}>
                          <div className={styles.visaCard}>Visa card</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent8}>
                  <div className={styles.subtractParent}>
                    <img className={styles.subtractIcon} alt="" />
                    <img
                      className={styles.dataProcessorIcon}
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div className={styles.amountToPay}>Amount to Pay</div>
                  <div className={styles.cad399Wrapper}>
                    <div className={styles.cad399}>CAD 399</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NestedLoop;
