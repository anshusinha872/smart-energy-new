import styles from "./Box1.module.css";

const Box1 = () => {
  return (
    <div className={styles.box}>
      <div className={styles.title}>
        <div className={styles.payPerUse}>Pay-per-use</div>
        <div className={styles.wrapper}>
          <div className={styles.div}>$699</div>
        </div>
      </div>
      <div className={styles.iconList}>
        <div className={styles.iconList1}>
          <div className={styles.circleCheck}>circle-check</div>
          <div className={styles.detailedInsightsOn}>
            Detailed Insights on Patterns
          </div>
        </div>
        <div className={styles.iconList2}>
          <div className={styles.circleCheck1}>circle-check</div>
          <div className={styles.costSavingOpportunities}>
            Cost Saving Opportunities
          </div>
        </div>
        <div className={styles.iconList3}>
          <div className={styles.circleCheck2}>circle-check</div>
          <div className={styles.environmentalImpactAssessmen}>
            Environmental Impact Assessments
          </div>
        </div>
      </div>
      <button className={styles.button}>
        <div className={styles.button1}>CHOOSE PLAN</div>
        <div className={styles.longArrowRight}>long-arrow-right</div>
      </button>
    </div>
  );
};

export default Box1;
