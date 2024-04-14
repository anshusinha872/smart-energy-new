import { useMemo } from "react";
import styles from "./Box4.module.css";

const Box4 = ({ group, analyze, propPadding, propGap }) => {
  const boxStyle = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
    };
  }, [propPadding, propGap]);

  return (
    <div className={styles.box} style={boxStyle}>
      <div className={styles.groupWrapper}>
        <img className={styles.groupIcon} loading="lazy" alt="" src={group} />
      </div>
      <b className={styles.analyze}>{analyze}</b>
    </div>
  );
};

export default Box4;
