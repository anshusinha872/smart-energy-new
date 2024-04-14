import { useMemo } from "react";
import styles from "./FrameComponent18.module.css";

const FrameComponent19 = ({
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
      <select className={styles.frameChild} style={groupSelect1Style} value="time1">
      <option value="time1">9:00 AM-5:00 PM</option>
      </select>
    </div>
  );
};

export default FrameComponent19;
