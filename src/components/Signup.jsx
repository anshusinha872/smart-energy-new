import FrameComponent15 from "./FrameComponent15";
import CopyIcon1 from "./CopyIcon1";
import CopyIcon from "./CopyIcon";
import styles from "./Signup.module.css";

const Signup = () => {
  return (
    <div className={styles.signup}>
      <img className={styles.signupChild} loading="lazy" alt="" />
      <div className={styles.signupInner}>
        <div className={styles.frameParent}>
          <FrameComponent15 iconnavigationarrowBackIo="data:image/gif;base64,R0lGODlhAQABAHAAACH5BAUAAAAALAAAAAABAAEAAAICRAEAOw==" />
          <div className={styles.signupLabelWrapper}>
            <div className={styles.signupLabel}>
              <div className={styles.alreadyHaveAccount}>
                <h1 className={styles.signup1}>Create an Account</h1>
              </div>
              <div className={styles.signupLabelInner}>
                <div className={styles.copyIconParent}>
                  <CopyIcon1 emailAddress="Full Name" />
                  <CopyIcon1
                    emailAddress="Email ID"
                    propWidth="124.2px"
                    helloMySiteComLabelHeight="51px"
                    helloMySiteComLabelMinWidth="219px"
                  />
                  <CopyIcon />
                  <div className={styles.frameGroup}>
                    <div className={styles.frameContainer}>
                      <img
                        className={styles.frameChild}
                        loading="lazy"
                        alt=""
                      />
                      <img className={styles.frameItem} loading="lazy" alt="" />
                      <div className={styles.group}>
                        <img className={styles.rectangle11Copy2} alt="" />
                        <div className={styles.div}>4</div>
                        <img
                          className={styles.path10Icon}
                          loading="lazy"
                          alt=""
                        />
                      </div>
                      <img className={styles.rectangle11Copy3} alt="" />
                    </div>
                    <div className={styles.frameWrapper}>
                      <div className={styles.resendOTPButtonParent}>
                        <div className={styles.resendOT}>00:14</div>
                        <div className={styles.resendOtp}>Resend OTP</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.signupHeaderParent}>
                <button className={styles.signupHeader}>
                  <div className={styles.signUp}>SIGN UP</div>
                </button>
                <div className={styles.loginLink}>
                  <a className={styles.alreadyHaveAnContainer}>
                    <span className={styles.alreadyHaveAn}>
                      Already have an account?
                    </span>
                    <span className={styles.span}>{` `}</span>
                    <span className={styles.login}>Login</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
