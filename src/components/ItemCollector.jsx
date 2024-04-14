import { useMemo } from "react";
import styles from "./ItemCollector.module.css";

const ItemCollector = ({
  securitySystemsPlaceholde,
  prop,
  groupSelectPadding,
  groupSelectGap,
  groupSelectHeight,
}) => {
  const groupSelectStyle = useMemo(() => {
    return {
      padding: groupSelectPadding,
      gap: groupSelectGap,
      height: groupSelectHeight,
    };
  }, [groupSelectPadding, groupSelectGap, groupSelectHeight]);

  return (
    <div className={styles.itemCollector}>
      <div className={styles.itemCollectorChild} />
      <div className={styles.itemCollectorInner}>
        <div className={styles.frameParent}>
          <div className={styles.mobileNoParent}>
            <b className={styles.mobileNo}>name</b>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <input
                className={styles.securitySystems}
                placeholder={securitySystemsPlaceholde}
                type="text"
              />
            </div>
          </div>
          <div className={styles.mobileNoGroup}>
            <b className={styles.mobileNo1}>quantity</b>
            <select className={styles.frameItem} style={groupSelectStyle} />
          </div>
        </div>
      </div>
      <img className={styles.itemCollectorItem} loading="lazy" alt="" />
    </div>
  );
};

export default ItemCollector;
