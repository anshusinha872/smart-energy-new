import styles from "./Box1.module.css";
import circle_check_green from "../assets/circle_check_green.png";
import long_arrow_right from "../assets/long-arrow-right.png";
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
          <img className={styles.circleCheck} src={circle_check_green} alt="" />
          <div className={styles.detailedInsightsOn}>
            Detailed Insights on Patterns
          </div>
        </div>
        <div className={styles.iconList2}>
          <img className={styles.circleCheck} src={circle_check_green} alt="" />
          <div className={styles.costSavingOpportunities}>
            Cost Saving Opportunities
          </div>
        </div>
        <div className={styles.iconList3}>
          <img className={styles.circleCheck} src={circle_check_green} alt="" />
          <div className={styles.environmentalImpactAssessmen}>
            Environmental Impact Assessments
          </div>
        </div>
      </div>
      <button className={styles.button}>
        <div className={styles.button1}>CHOOSE PLAN</div>
        <img className={styles.longArrowRight} src={long_arrow_right} alt="" />
      </button>
    </div>
  );
};

export default Box1;
