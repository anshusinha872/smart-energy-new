import { useMemo } from "react";
import styles from "./CopyIcon1.module.css";

const CopyIcon1 = ({
  emailAddress,
  hellomysitecom,
  propWidth,
  propWidth1,
  label,
  value,
  setValue,
  type,
  helloMySiteComLabelHeight,
  helloMySiteComLabelMinWidth,
}) => {
  const frameDiv7Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const helloMySiteComLabelStyle = useMemo(() => {
    return {
      height: helloMySiteComLabelHeight,
      minWidth: helloMySiteComLabelMinWidth,
    };
  }, [helloMySiteComLabelHeight, helloMySiteComLabelMinWidth]);

  return (
    <div className={styles.copyIcon}>
      <div className={styles.emailAddressWrapper} style={frameDiv7Style}>
        <div className={styles.emailAddress}>{label}</div>
      </div>
      <input
        className={styles.helloMySiteComLabel}
        placeholder={label}
        type={type}
        onChange={(e) => setValue(e.target.value)}
        style={helloMySiteComLabelStyle}
      />
    </div>
  );
};

export default CopyIcon1;
