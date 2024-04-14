import styles from "./Footer1.module.css";

const Footer1 = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.loopControl}>
        <div className={styles.dataFilter}>
          <img
            className={styles.smartEnergyLogoBlackWhit}
            loading="lazy"
            alt=""
          />
          <div className={styles.errorHandler}>
            <div className={styles.decisionMaker}>
              <img
                className={styles.phenvelopeFillIcon}
                loading="lazy"
                alt=""
              />
              <img
                className={styles.phphoneCallFillIcon}
                loading="lazy"
                alt=""
              />
              <img
                className={styles.phmapPinLineFillIcon}
                loading="lazy"
                alt=""
              />
            </div>
            <div className={styles.ruleSet}>
              <div className={styles.ruleExecutor}>
                <div className={styles.smartenergycompanyca}>
                  SmartEnergy@company.ca
                </div>
                <div className={styles.ruleCreator}>(416) 555-1234</div>
                <div className={styles.mapleStreetTorontoOnContainer}>
                  <p className={styles.mapleStreet}>213 Maple Street</p>
                  <p className={styles.torontoOnM1a}>Toronto, ON M1A 2B3</p>
                  <p className={styles.canada}>Canada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.treeTraversal}>
          <div className={styles.quickLinks}>
            <h3 className={styles.quickLinks1}>Quick Links</h3>
            <div className={styles.iconList}>
              <div className={styles.list}>
                <div className={styles.caretRight}>caret-right</div>
                <div className={styles.home}>Home</div>
              </div>
              <div className={styles.list1}>
                <div className={styles.caretRight1}>caret-right</div>
                <div className={styles.aboutUs}>About Us</div>
              </div>
              <div className={styles.list2}>
                <div className={styles.caretRight2}>caret-right</div>
                <div className={styles.ourService}>Our Service</div>
              </div>
              <div className={styles.list3}>
                <div className={styles.caretRight3}>caret-right</div>
                <div className={styles.testimonials}>Testimonials</div>
              </div>
            </div>
          </div>
          <div className={styles.quickLinks2}>
            <h3 className={styles.usefulLinks}>Useful Links</h3>
            <div className={styles.iconList1}>
              <div className={styles.list4}>
                <div className={styles.caretRight4}>caret-right</div>
                <div className={styles.privacyPolicy}>Privacy Policy</div>
              </div>
              <div className={styles.list5}>
                <div className={styles.caretRight5}>caret-right</div>
                <div className={styles.disclaimer}>Disclaimer</div>
              </div>
              <div className={styles.list6}>
                <div className={styles.caretRight6}>caret-right</div>
                <div
                  className={styles.termsCondition}
                >{`Terms & Condition`}</div>
              </div>
              <div className={styles.list7} />
            </div>
          </div>
          <div className={styles.followUsParent}>
            <h3 className={styles.followUs}>Follow Us</h3>
            <div className={styles.facebookParent}>
              <div className={styles.facebook}>facebook</div>
              <div className={styles.twitter}>twitter</div>
              <div className={styles.instagram}>instagram</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.smartEnergyAll}>
          © 2024 SMART ENERGY All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
