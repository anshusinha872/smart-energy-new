import styles from "./Box3.module.css";

const Box3 = () => {
  return (
    <div className={styles.box}>
      <div className={styles.title}>
        <div className={styles.consultationAndAdvisory}>
          CONSULTATION AND ADVISORY
        </div>
        <div className={styles.fillFiller}>
          <div className={styles.effectEngine}>$5,999</div>
        </div>
      </div>
      <div className={styles.iconList}>
        <div className={styles.iconList1}>
          <div className={styles.circleCheck}>circle-check</div>
          <div className={styles.energyAudits}>Energy Audits</div>
        </div>
        <div className={styles.iconList2}>
          <div className={styles.circleCheck1}>circle-check</div>
          <div className={styles.performanceOptimizationAsses}>
            Performance Optimization Assessments
          </div>
        </div>
        <div className={styles.iconList3}>
          <div className={styles.circleCheck2}>circle-check</div>
          <div className={styles.strategicPlanning}>Strategic Planning</div>
        </div>
      </div>
      <button className={styles.button}>
        <div className={styles.button1}>CHOOSE PLAN</div>
        <div className={styles.longArrowRight}>long-arrow-right</div>
      </button>
    </div>
  );
};

export default Box3;
