import FrameComponent15 from "./FrameComponent15";
import CopyIcon from "./CopyIcon";
import styles from "./Login.module.css";
// import logo from public folder
import logo from "../../public/21@2x.png";
import Group_1000004746 from "../../public/Group 1000004746.png";
const Login = () => {
  return (
    <div className={styles.login}>
      <img className={styles.loginChild}  loading="lazy" src={Group_1000004746} alt="" />
      <div className={styles.loginInner}>
        <div className={styles.frameParent}>
          <FrameComponent15
            contentContainerIconPadding="var(--padding-xl) 0px 0px"
            iconnavigationarrowBackIo={`https://d1xzdqg8s8ggsr.cloudfront.net/661ad975cab32a532c044290/3495d653-dd39-4e6f-878f-261fd9b897b7_1713038312837492253?Expires=-62135596800&Signature=G-29gnm70ye0JOwyjQLcIk9R5v8TotUGPwj8Sp7iO2xrhjKojpb0ye42JpywUmTIHeCiCT7jbKbBYRHwhWJOZGx-cYJLZfqIi1EgxhgfjvduElv6qV9vWkVqWY7k9nIjTIGq0UI8wYy~oLKmG1G7s90b9~7HezRkbyELwsh3wkfWseiem0wosQtSS3Nnt64iGWd6AFnBiL912klXdPcJV~LI3hez~Pg-TiGaVS8T6yxgHJmozM8Lu4bcXppVN5Ing6v2X4puyoVzCgSU54sdACVg6U2b53e6wiF3teew5i5riKNQGQuUxf7Nn0etIC4oY0z2KSb-LY8g7jrBYnTFJQ__&Key-Pair-Id=K1P54FZWCHCL6J`}
          />
          <div className={styles.frameWrapper}>
            <div className={styles.signupParent}>
              <h1 className={styles.signup}>Welcome Back</h1>
              <div className={styles.frameContainer}>
                <div className={styles.frameGroup}>
                  <div className={styles.frameDiv}>
                    <div className={styles.frameParent1}>
                      <CopyIcon />
                      <div className={styles.frameParent2}>
                        <div className={styles.frameParent3}>
                          <img
                            className={styles.frameChild}
                            loading="lazy"
                            alt=""
                            // src={logo}
                          />
                          <img
                            className={styles.frameItem}
                            loading="lazy"
                            alt=""
                          />
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
                        <div className={styles.frameWrapper1}>
                          <div className={styles.parent}>
                            <div className={styles.div1}>00:14</div>
                            <button className={styles.resendOtp}>
                              Resend OTP
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent4}>
                    <button className={styles.loginWrapper}>
                      <div className={styles.login1}>LOGIN</div>
                    </button>
                    <div className={styles.enterLoginDetailsOrCreateWrapper}>
                      <a className={styles.enterLoginDetailsContainer}>
                        <span className={styles.enterLoginDetails}>
                          Enter login details or
                        </span>
                        <b className={styles.b}>{` `}</b>
                        <span className={styles.createAnAccount}>
                          Create an account
                        </span>
                      </a>
                    </div>
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

export default Login;
