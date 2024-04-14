import { useMemo } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({
  background,
  background1,
  cVVDisplay,
  xDisplay,
  vALIDTHRUDisplay,
  divDisplay,
  cVVDisplay1,
  xDisplay1,
  vALIDTHRUDisplay1,
  divDisplay1,
}) => {
  const cVVStyle = useMemo(() => {
    return {
      display: cVVDisplay,
    };
  }, [cVVDisplay]);

  const xStyle = useMemo(() => {
    return {
      display: xDisplay,
    };
  }, [xDisplay]);

  const vALIDTHRUStyle = useMemo(() => {
    return {
      display: vALIDTHRUDisplay,
    };
  }, [vALIDTHRUDisplay]);

  const divStyle = useMemo(() => {
    return {
      display: divDisplay,
    };
  }, [divDisplay]);

  const cVV1Style = useMemo(() => {
    return {
      display: cVVDisplay1,
    };
  }, [cVVDisplay1]);

  const x1Style = useMemo(() => {
    return {
      display: xDisplay1,
    };
  }, [xDisplay1]);

  const vALIDTHRU1Style = useMemo(() => {
    return {
      display: vALIDTHRUDisplay1,
    };
  }, [vALIDTHRUDisplay1]);

  const div1Style = useMemo(() => {
    return {
      display: divDisplay1,
    };
  }, [divDisplay1]);

  return (
    <div className={styles.sidebarNotificationProCInner}>
      <div className={styles.getProCtaParent}>
        <button className={styles.getProCta}>
          <div className={styles.largeButton}>
            <div className={styles.background}>
              <div className={styles.backgroundChild} />
            </div>
            <div className={styles.text}>
              <div className={styles.largeButton1}>Get Pro Now</div>
            </div>
          </div>
          <b className={styles.pagetitle}>Support</b>
          <div className={styles.verticalCreditCardGlassParent}>
            <div className={styles.verticalCreditCardGlass}>
              <img className={styles.backgroundIcon} alt="" src={background} />
              <div className={styles.details}>
                <div className={styles.cvv}>
                  <div className={styles.cvv1} style={cVVStyle}>{`CVV `}</div>
                  <div className={styles.x} style={xStyle}>
                    09X
                  </div>
                </div>
                <div className={styles.validThru}>
                  <div className={styles.validThru1} style={vALIDTHRUStyle}>
                    VALID THRU
                  </div>
                  <div className={styles.div} style={divStyle}>
                    05/24
                  </div>
                </div>
                <div className={styles.number}>
                  <b className={styles.xxxx}>7812 2139 0823 XXXX</b>
                </div>
                <img className={styles.circlesIcon} alt="" src="/circles.svg" />
                <div className={styles.logo}>
                  <b className={styles.venus}>Venus</b>
                </div>
              </div>
            </div>
            <b className={styles.proCardAcces}>PRO Card Acces</b>
          </div>
          <div className={styles.helpWrapper}>
            <img className={styles.helpIcon} alt="" src="/help.svg" />
          </div>
        </button>
        <button className={styles.getProCta1}>
          <div className={styles.largeButton2}>
            <div className={styles.background1}>
              <div className={styles.backgroundItem} />
            </div>
            <div className={styles.text1}>
              <div className={styles.largeButton3}>Get Pro Now</div>
            </div>
          </div>
          <b className={styles.pagetitle1}>Logout</b>
          <div className={styles.verticalCreditCardGlassGroup}>
            <div className={styles.verticalCreditCardGlass1}>
              <img
                className={styles.backgroundIcon1}
                alt=""
                src={background1}
              />
              <div className={styles.details1}>
                <div className={styles.cvv2}>
                  <div className={styles.cvv3} style={cVV1Style}>{`CVV `}</div>
                  <div className={styles.x1} style={x1Style}>
                    09X
                  </div>
                </div>
                <div className={styles.validThru2}>
                  <div className={styles.validThru3} style={vALIDTHRU1Style}>
                    VALID THRU
                  </div>
                  <div className={styles.div1} style={div1Style}>
                    05/24
                  </div>
                </div>
                <div className={styles.number1}>
                  <b className={styles.xxxx1}>7812 2139 0823 XXXX</b>
                </div>
                <img
                  className={styles.circlesIcon1}
                  alt=""
                  src="/circles.svg"
                />
                <div className={styles.logo1}>
                  <b className={styles.venus1}>Venus</b>
                </div>
              </div>
            </div>
            <b className={styles.proCardAcces1}>PRO Card Acces</b>
          </div>
          <div className={styles.vuesaxbulkloginWrapper}>
            <img
              className={styles.vuesaxbulkloginIcon}
              alt=""
              src="/vuesaxbulklogin.svg"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent1;
