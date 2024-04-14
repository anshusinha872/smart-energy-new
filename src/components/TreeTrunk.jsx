import { useMemo } from "react";
import styles from "./TreeTrunk.module.css";
import Logo from "../assets/images/logo2.png"
import Profile from "../assets/images/profile.png"
import DownArrow from "../assets/images/downarrow.png"

const TreeTrunk = ({ parentLinkPadding }) => {
  const treeTrunkStyle = useMemo(() => {
    return {
      padding: parentLinkPadding,
    };
  }, [parentLinkPadding]);

  return (
    <header className={styles.treeTrunk} style={treeTrunkStyle}>
      <div className={styles.treeTrunkChild} />
      <img className={styles.icon} loading="lazy" alt=""  src={Logo}/>
      <div className={styles.parentLinkWrapper}>
        <button className={styles.parentLink}>
          <div className={styles.siblingLink}>
            <img className={styles.healthiconsuiUserProfile} alt="" src={Profile}/>
            <div className={styles.alexCooperWrapper}>
              <div className={styles.alexCooper}>Alex Cooper</div>
            </div>
          </div>
          <div className={styles.ictwotoneArrowDropDownWrapper}>
            <img className={styles.ictwotoneArrowDropDownIcon} alt="" src={DownArrow}/>
          </div>
        </button>
      </div>
    </header>
  );
};

export default TreeTrunk;
