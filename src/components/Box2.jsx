import styles from "./Box2.module.css";

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
          <div className={styles.circleCheck}>circle-check</div>
          <div className={styles.realTimeMonitoring}>Real-Time Monitoring</div>
        </div>
        <div className={styles.iconList2}>
          <div className={styles.circleCheck1}>circle-check</div>
          <div className={styles.predictiveAnalysis}>Predictive Analysis</div>
        </div>
        <div className={styles.iconList3}>
          <div className={styles.circleCheck2}>circle-check</div>
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
        <div className={styles.longArrowRight}>long-arrow-right</div>
      </button>
    </div>
  );
};

export default Box2;
