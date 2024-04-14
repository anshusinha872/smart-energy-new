import { useMemo } from "react";
import styles from "./GroupComponent1.module.css";
import NetBanking from "../assets/images/netbanking.png"

const GroupComponent1 = ({ netBanking, propPadding, propMinWidth }) => {
  const groupButtonStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const netBankingStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <button className={styles.rectangleParent} style={groupButtonStyle}>
      <div className={styles.frameChild} />
      <img className={styles.bicreditCard2BackIcon} alt="" src={NetBanking}/>
      <div className={styles.netBankingWrapper}>
        <div className={styles.netBanking} style={netBankingStyle}>
          {netBanking}
        </div>
      </div>
    </button>
  );
};

export default GroupComponent1;
