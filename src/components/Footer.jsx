import { useMemo } from "react";
import styles from "./Footer.module.css";
import Logo from "../assets/images/logo.png";
import Email from "../assets/images/email.png";
import Phone from "../assets/images/phone.png";
import Location from "../assets/images/location.png";
import Arrowright from "../assets/images/arrowright.png";
import Facebook from "../assets/images/facebook.png";
import Twitter from "../assets/images/twitter.png";
import Instagram from "../assets/images/instagram.png";

const Footer = ({ propAlignSelf }) => {
  const smartEnergycompanycaStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <footer className={styles.footer}>
      <div className={styles.sizeAdjustor}>
        <div className={styles.positionManager}>
          <img className={styles.positionManagerChild} loading="lazy" alt="" src={Logo}/>
          <div className={styles.frameParent}>
            <div className={styles.phenvelopeFillParent}>
              <img
                className={styles.phenvelopeFillIcon}
                loading="lazy"
                alt=""
                src={Email}
              />
              <img
                className={styles.phphoneCallFillIcon}
                loading="lazy"
                alt=""
                src={Phone}
              />
              <img
                className={styles.phmapPinLineFillIcon}
                loading="lazy"
                alt=""
                src={Location}
              />
            </div>
            <div className={styles.triangleFormerWrapper}>
              <div className={styles.triangleFormer}>
                <div
                  className={styles.smartenergycompanyca}
                  style={smartEnergycompanycaStyle}
                >
                  SmartEnergy@company.ca
                </div>
                <div className={styles.div}>(416) 555-1234</div>
                <div className={styles.mapleStreetTorontoOnContainer}>
                  <p className={styles.mapleStreet}>213 Maple Street</p>
                  <p className={styles.torontoOnM1a}>Toronto, ON M1A 2B3</p>
                  <p className={styles.canada}>Canada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.quickLinksParent}>
          <div className={styles.quickLinks}>
            <b className={styles.quickLinks1}>Quick Links</b>
            <div className={styles.iconList}>
              <div className={styles.list}>
              <img src={Arrowright} alt="Facebook" className={styles.caretRight5} />
                <div className={styles.home}>Home</div>
              </div>
              <div className={styles.list1}>
              <img src={Arrowright} alt="Facebook" className={styles.caretRight5} />
                <div className={styles.aboutUs}>About Us</div>
              </div>
              <div className={styles.list2}>
              <img src={Arrowright} alt="Facebook" className={styles.caretRight5} />
                <div className={styles.ourService}>Our Service</div>
              </div>
              <div className={styles.list3}>
              <img src={Arrowright} alt="Facebook" className={styles.caretRight5} />
                <div className={styles.testimonials}>Testimonials</div>
              </div>
            </div>
          </div>
          <div className={styles.quickLinks2}>
            <b className={styles.usefulLinks}>Useful Links</b>
            <div className={styles.iconList1}>
              <div className={styles.list4}>
              <img src={Arrowright} alt="Facebook" className={styles.caretRight5} />
                <div className={styles.privacyPolicy}>Privacy Policy</div>
              </div>
              <div className={styles.list5}>
              <img src={Arrowright} alt="Facebook" className={styles.caretRight5} />
                
                <div className={styles.disclaimer}>Disclaimer</div>
              </div>
              <div className={styles.list6}>
              <img src={Arrowright} alt="Facebook" className={styles.caretRight5} />
                <div
                  className={styles.termsCondition}
                >{`Terms & Condition`}</div>
              </div>
              <div className={styles.list7} />
            </div>
          </div>
        </div>
        <div className={styles.gradientMaker}>
          <b className={styles.followUs}>Follow Us</b>
          <div className={styles.maskProducer}>
          <img src={Facebook} alt="Facebook" className={styles.facebook} />
        <img src={Twitter} alt="Twitter" className={styles.twitter} />
        <img src={Instagram} alt="Instagram" className={styles.instagram} />
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

export default Footer;
