import { useMemo } from "react";
import styles from "./FrameComponent18.module.css";

const FrameComponent20 = ({
  mobileNo,
  mondayToFriday,
  propMinWidth,
  propWidth,
  groupSelectHeight,
  groupSelectPadding,
  groupSelectGap,
}) => {
  const groupSelect1Style = useMemo(() => {
    return {
      height: groupSelectHeight,
      padding: groupSelectPadding,
      gap: groupSelectGap,
    };
  }, [groupSelectHeight, groupSelectPadding, groupSelectGap]);

  return (
    <div className={styles.mobileNoParent}>
      <b className={styles.mobileNo}>{mobileNo}</b>
      <select className={styles.frameChild} style={groupSelect1Style} value="Monday">
      <option value="Monday">Monday</option>
      </select>
    </div>
  );
};

export default FrameComponent20;
