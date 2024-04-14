import React from "react";
import styles from "./FrameComponent14.module.css";
// impo import icon from "../assets/icon.png";
import icon_header from "../assets/icon_header.png";
const FrameComponent14 = () => {
  return (
    <header className={styles.frameWrapper}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.background}>
          <div className={styles.backgroundChild} />
          <img className={styles.icon} src={icon_header} loading="lazy" alt="" />
          <button className={styles.button}>
            <div className={styles.buttonChild} />
            <b className={styles.signUp}>Sign Up</b>
          </button>
          <div className={styles.ourSolution}>Our Solution</div>
          <div className={styles.backgroundItem} />
          <div className={styles.ourFeatures}>Our Features</div>
          <div className={styles.backgroundInner} />
          <div className={styles.howItWorks}>How It Works</div>
          <div className={styles.rectangleDiv} />
          <div className={styles.pricing}>Pricing</div>
          <div className={styles.backgroundChild1} />
          <div className={styles.ourTeam}>Our Team</div>
          <div className={styles.backgroundChild2} />
          <div className={styles.testimonials}>Testimonials</div>
          <div className={styles.backgroundChild3} />
          <div className={styles.faq}>FAQ</div>
          <button className={styles.active}>
            <div className={styles.aboutUs}>About Us</div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent14;
