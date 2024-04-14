import { useMemo } from "react";
import styles from "./TreeTrunk.module.css";

const TreeTrunk = ({ parentLinkPadding }) => {
  const treeTrunkStyle = useMemo(() => {
    return {
      padding: parentLinkPadding,
    };
  }, [parentLinkPadding]);

  return (
    <header className={styles.treeTrunk} style={treeTrunkStyle}>
      <div className={styles.treeTrunkChild} />
      <img className={styles.icon} loading="lazy" alt="" />
      <div className={styles.parentLinkWrapper}>
        <button className={styles.parentLink}>
          <div className={styles.siblingLink}>
            <img className={styles.healthiconsuiUserProfile} alt="" />
            <div className={styles.alexCooperWrapper}>
              <div className={styles.alexCooper}>Alex Cooper</div>
            </div>
          </div>
          <div className={styles.ictwotoneArrowDropDownWrapper}>
            <img className={styles.ictwotoneArrowDropDownIcon} alt="" />
          </div>
        </button>
      </div>
    </header>
  );
};

export default TreeTrunk;
