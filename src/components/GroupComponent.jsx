import styles from "./GroupComponent.module.css";

const GroupComponent = ({ maskGroup, hospitalityIndustry }) => {
  return (
    <div className={styles.maskGroupParent}>
      <img className={styles.maskGroupIcon} alt="" src={maskGroup} />
      <div className={styles.box}>
        <b className={styles.hospitalityIndustry}>{hospitalityIndustry}</b>
      </div>
    </div>
  );
};

export default GroupComponent;
