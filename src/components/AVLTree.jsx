import styles from "./AVLTree.module.css";
import Group_108 from "../assets/Group_108.png";
import footer_img from "../assets/22.png";
import ph_envelope_fill from "../assets/ph_envelope-fill.png";
import ph_phone_call_fill from "../assets/ph_phone-call-fill.png";
import Vector from "../assets/Vector.png";
import caret_right from "../assets/caret-right.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
const AVLTree = () => {
  return (
    <section className={styles.aVLTree}>
      <div className={styles.maskGroupParent}>
        <img className={styles.maskGroupIcon} src={Group_108} alt="" />
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
            <img
              className={styles.primAlgorithmIcon}
              src={footer_img}
              loading="lazy"
              alt=""
            />
            <div className={styles.kruskalAlgorithm}>
              <div className={styles.dijkstraAlgorithm}>
                <img
                  className={styles.phenvelopeFillIcon}
                  loading="lazy"
                  src={ph_envelope_fill}
                  alt=""
                />
                <img
                  className={styles.phphoneCallFillIcon}
                  loading="lazy"
                  src={ph_phone_call_fill}
                  alt=""
                />
                <img
                  className={styles.phmapPinLineFillIcon}
                  loading="lazy"
                  alt=""
                  src={Vector}
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
                  <img src={caret_right} alt="" />
                  <div className={styles.home}>Home</div>
                </div>
                <div className={styles.list1}>
                  <img src={caret_right} alt="" />
                  <div className={styles.aboutUs}>About Us</div>
                </div>
                <div className={styles.list2}>
                  <img src={caret_right} alt="" />
                  <div className={styles.ourService}>Our Service</div>
                </div>
                <div className={styles.list3}>
                  <img src={caret_right} alt="" />
                  <div className={styles.testimonials}>Testimonials</div>
                </div>
              </div>
            </div>
            <div className={styles.quickLinks2}>
              <b className={styles.usefulLinks}>Useful Links</b>
              <div className={styles.iconList1}>
                <div className={styles.list4}>
                  <img src={caret_right} alt="" />
                  <div className={styles.privacyPolicy}>Privacy Policy</div>
                </div>
                <div className={styles.list5}>
                  <img src={caret_right} alt="" />
                  <div className={styles.disclaimer}>Disclaimer</div>
                </div>
                <div className={styles.list6}>
                  <img src={caret_right} alt="" />
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
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={instagram} alt="" />
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
