import styles from "./Box3.module.css";
import circle_check_green from "../assets/circle_check_green.png";
import long_arrow_right from "../assets/long-arrow-right.png";
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
          {/* <div className={styles.circleCheck}>circle-check</div> */}
          <img className={styles.circleCheck} src={circle_check_green} alt="" />
          <div className={styles.energyAudits}>Energy Audits</div>
        </div>
        <div className={styles.iconList2}>
        <img className={styles.circleCheck} src={circle_check_green} alt="" />
          <div className={styles.performanceOptimizationAsses}>
            Performance Optimization Assessments
          </div>
        </div>
        <div className={styles.iconList3}>
        <img className={styles.circleCheck} src={circle_check_green} alt="" />
          <div className={styles.strategicPlanning}>Strategic Planning</div>
        </div>
      </div>
      <button className={styles.button}>
        <div className={styles.button1}>CHOOSE PLAN</div>
        <img className={styles.longArrowRight} src={long_arrow_right} alt="" />
      </button>
    </div>
  );
};

export default Box3;
