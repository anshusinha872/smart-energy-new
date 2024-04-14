import styles from "./AVLTree.module.css";

const AVLTree = () => {
  return (
    <section className={styles.aVLTree}>
      <div className={styles.maskGroupParent}>
        <img className={styles.maskGroupIcon} alt="" />
        <div className={styles.cta}>
          <div className={styles.trie}>
            <h1 className={styles.theFutureOf}>
              The Future of Energy Management is Here.
            </h1>
            <div className={styles.unlockEfficiencyComfort}>
              Unlock Efficiency, Comfort and Cost Savings with Our Intelligent
              System.
            </div>
          </div>
          <button className={styles.button}>
            <b className={styles.button1}>Get Started</b>
            <div className={styles.longArrowRight}>long-arrow-right</div>
          </button>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.shortestPathTree}>
          <div className={styles.minimumSpanningTree}>
            <img className={styles.primAlgorithmIcon} loading="lazy" alt="" />
            <div className={styles.kruskalAlgorithm}>
              <div className={styles.dijkstraAlgorithm}>
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
              <div className={styles.floydWarshallAlgorithm}>
                <div className={styles.dynamicProgrammingTree}>
                  <div className={styles.smartenergycompanyca}>
                    SmartEnergy@company.ca
                  </div>
                  <div className={styles.branchAndBound}>(416) 555-1234</div>
                  <div className={styles.mapleStreetTorontoOnContainer}>
                    <p className={styles.mapleStreet}>213 Maple Street</p>
                    <p className={styles.torontoOnM1a}>Toronto, ON M1A 2B3</p>
                    <p className={styles.canada}>Canada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.inputProcessor}>
            <div className={styles.quickLinks}>
              <b className={styles.quickLinks1}>Quick Links</b>
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
              <b className={styles.usefulLinks}>Useful Links</b>
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
            <div className={styles.modelEvaluator}>
              <b className={styles.followUs}>Follow Us</b>
              <div className={styles.outputGenerator}>
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
    </section>
  );
};

export default AVLTree;
