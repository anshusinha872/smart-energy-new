import React, { useState } from "react";
import styles from "./Signup.module.css";
import Group_1000004746 from "../../public/Group 1000004746.png";
import FrameComponent15 from "./FrameComponent15";
import CopyIcon1 from "./CopyIcon1";
import CopyIcon from "./CopyIcon";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const submit = () => {
    console.log(name);
    console.log(email);
    console.log(number);
  };

  const [isFocusedArr, setIsFocusedArr] = useState([
    false,
    false,
    false,
    false,
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.signup}>
        <div className={styles.signupContainer}>
          <img
            className={styles.signupChild}
            loading="lazy"
            src={Group_1000004746}
            alt=""
          />
        </div>
        <div className={styles.signupInner}>
          <div className={styles.frameParent}>
            <FrameComponent15
              iconnavigationarrowBackIo="data:image/gif;base64,R0lGODlhAQABAHAAACH5BAUAAAAALAAAAAABAAEAAAICRAEAOw=="
            />
            <div className={styles.signupLabelWrapper}>
              <div className={styles.signupLabel}>
                <div className={styles.alreadyHaveAccount}>
                  <h1 className={styles.signup1}>Create an Account</h1>
                </div>
                <div className={styles.signupLabelInner}>
                  <div className={styles.copyIconParent}>
                    <CopyIcon1
                      propWidth="124.2px"
                      helloMySiteComLabelHeight="51px"
                      helloMySiteComLabelMinWidth="219px"
                      label="Full Name"
                      value={name}
                      setValue={setName}
                      type="text"
                    />
                    <CopyIcon1
                      propWidth="124.2px"
                      helloMySiteComLabelHeight="51px"
                      helloMySiteComLabelMinWidth="219px"
                      label="Email ID"
                      value={email}
                      setValue={setEmail}
                      type="text"
                    />
                    <CopyIcon
                      label="Mobile Number"
                      value={number}
                      setValue={setNumber}
                      type="number"
                    />
                    <div className={styles.frameGroup}>
                      <div className={styles.frameParent3}>
                        <input
                          className={`${styles.rectangle11Copy3} ${
                            isFocusedArr[0] ? styles.group : "false"
                          }`}
                          onFocus={() => {
                            setIsFocusedArr([true, false, false, false]);
                          }}
                          onBlur={() => {
                            setIsFocusedArr([false, false, false, false]);
                          }}
                          type="text"
                        />
                        <input
                          className={`${styles.rectangle11Copy3} ${
                            isFocusedArr[1] ? styles.group : "false"
                          }`}
                          onFocus={() => {
                            setIsFocusedArr([false, true, false, false]);
                          }}
                          onBlur={() => {
                            setIsFocusedArr([false, false, false, false]);
                          }}
                          type="text"
                        />
                        <input
                          className={`${styles.rectangle11Copy3} ${
                            isFocusedArr[2] ? styles.group : "false"
                          }`}
                          onFocus={() => {
                            setIsFocusedArr([false, false, true, false]);
                          }}
                          onBlur={() => {
                            setIsFocusedArr([false, false, false, false]);
                          }}
                          type="text"
                        />
                        <input
                          className={`${styles.rectangle11Copy3} ${
                            isFocusedArr[3] ? styles.group : "false"
                          }`}
                          onFocus={() => {
                            setIsFocusedArr([false, false, false, true]);
                          }}
                          onBlur={() => {
                            setIsFocusedArr([false, false, false, false]);
                          }}
                          type="text"
                        />
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
                  <button onClick={submit} className={styles.signupHeader}>
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
    </div>
  );
};

export default Signup;