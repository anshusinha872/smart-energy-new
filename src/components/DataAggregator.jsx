import { useMemo } from "react";
import styles from "./DataAggregator.module.css";

const DataAggregator = ({
  cVVNumber,
  enterThe3DigitNumber,
  propPadding,
  propWidth,
  propMinWidth,
}) => {
  const dataAggregatorStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const cVVNumberStyle = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propWidth, propMinWidth]);

  return (
    <div className={styles.dataAggregator} style={dataAggregatorStyle}>
      <div className={styles.cvvNumberParent}>
        <div className={styles.cvvNumber} style={cVVNumberStyle}>
          {cVVNumber}
        </div>
        <div className={styles.enterThe3Digit}>{enterThe3DigitNumber}</div>
      </div>
    </div>
  );
};

export default DataAggregator;
