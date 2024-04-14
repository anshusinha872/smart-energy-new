import styles from "./FrameComponent4.module.css";

const FrameComponent4 = ({ maskGroup, coFounder, stewartKarry }) => {
  return (
    <div className={styles.maskGroupParent}>
      <img className={styles.maskGroupIcon} alt="" src={maskGroup} />
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <div className={styles.title}>
            <div className={styles.coFounder}>{coFounder}</div>
            <div className={styles.stewartKarry}>{stewartKarry}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
