import { useMemo } from "react";
import styles from "./SystemEfficiency.module.css";

const SystemEfficiency = ({
  settingSuggest,
  overallSystem,
  efficiency,
  prop,
  propPadding,
  frameDivPadding,
  frameDivPadding1,
}) => {
  const systemEfficiencyStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDivStyle = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  const frameDiv1Style = useMemo(() => {
    return {
      padding: frameDivPadding1,
    };
  }, [frameDivPadding1]);

  return (
    <div className={styles.systemEfficiency} style={systemEfficiencyStyle}>
      <div className={styles.systemEfficiencyChild} />
      <div className={styles.settingSuggestWrapper} style={frameDivStyle}>
        <img
          className={styles.settingSuggestIcon}
          loading="lazy"
          alt=""
          src={settingSuggest}
        />
      </div>
      <div className={styles.overallSystemEfficiencyContainer}>
        <p className={styles.overallSystem}>{overallSystem}</p>
        <p className={styles.efficiency}>{efficiency}</p>
      </div>
      <div className={styles.wrapper} style={frameDiv1Style}>
        <div className={styles.div}>{prop}</div>
      </div>
    </div>
  );
};

export default SystemEfficiency;
