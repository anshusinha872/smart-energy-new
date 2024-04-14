import styles from "./FrameComponent12.module.css";
import image1 from "../assets/image1.png";
const FrameComponent12 = () => {
  return (
    <section className={styles.desktop1Inner}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <img className={styles.imageIcon} src={image1} alt="" />
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.patternMatcherParent}>
            {/* <div className={styles.patternMatcher}>
              <img className={styles.elementIcon} loading="lazy" alt="" />
            </div> */}
            <div className={styles.timingControlWrapper}>
              <div className={styles.timingControl}>
                <div className={styles.errorHandler}>
                  <div className={styles.errorHandlerChild} />
                </div>
                <div className={styles.timingControlChild} />
              </div>
            </div>
            <div className={styles.aboutUs}>about us</div>
            <div className={styles.timingControlWrapper}>
              <div className={styles.timingControl}>
                <div className={styles.timingControlChild} />
                <div className={styles.errorHandler}>
                  <div className={styles.errorHandlerChild} />
                </div>
              </div>
            </div>
          </div>
          <h2 className={styles.weAreExcited}>
            We are excited to have you join us on your smart energy journey
          </h2>
          <div className={styles.soaringEnergyCostsAndAFocWrapper}>
            <div className={styles.soaringEnergyCostsContainer}>
              <p
                className={styles.soaringEnergyCosts}
              >{`Soaring energy costs and a focus on sustainability are driving the need for smart building tech. Traditional methods lack real-time data and proactive control. `}</p>
              <p className={styles.ourMissionIs}>
                Our mission is to empower businesses to achieve sustainable
                energy practices and maximize efficiency through innovative
                technology solutions. We provide a user-friendly, data-driven
                platform that enable our customers to monitor, analyze, and
                optimize their energy usage, ultimately driving cost savings,
                reducing environmental impact, and fostering a more sustainable
                future for generations to come.
              </p>
              <p className={styles.comeJoinUs}>
                {" "}
                Come join us and unlock the future of smart energy management!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent12;
