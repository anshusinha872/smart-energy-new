import styles from "./Box2.module.css";
import circle_check from "../assets/circle-check.png";
import long_arrow_right_green from "../assets/long_arrow_right_green.png";
const Box2 = () => {
  return (
    <div className={styles.box}>
      <div className={styles.title}>
        <div className={styles.monthlySubscription}>monthly subscription</div>
        <div className={styles.characterSpacing}>
          <div className={styles.div}>$399</div>
          <div className={styles.perMonth}>/per month</div>
        </div>
      </div>
      <div className={styles.iconList}>
        <div className={styles.iconList1}>
          {/* <div className={styles.circleCheck}>circle-check</div> */}
          <img className={styles.circleCheck} src={circle_check} alt="" />
          <div className={styles.realTimeMonitoring}>Real-Time Monitoring</div>
        </div>
        <div className={styles.iconList2}>
        <img className={styles.circleCheck} src={circle_check} alt="" />
          <div className={styles.predictiveAnalysis}>Predictive Analysis</div>
        </div>
        <div className={styles.iconList3}>
        <img className={styles.circleCheck} src={circle_check} alt="" />
          <div className={styles.actionableRecommendations}>
            Actionable Recommendations
          </div>
        </div>
      </div>
      <button className={styles.badge}>
        <div className={styles.featured}>Featured</div>
      </button>
      <button className={styles.button}>
        <div className={styles.button1}>CHOOSE PLAN</div>
        {/* <div className={styles.longArrowRight}>long-arrow-right</div> */}
        <img className={styles.longArrowRight} src={long_arrow_right_green} alt="" />
      </button>
    </div>
  );
};

export default Box2;
