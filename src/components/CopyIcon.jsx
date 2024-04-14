import styles from "./CopyIcon.module.css";
import image_34 from "../../public/image 34.png"
const CopyIcon = () => {
  return (
    <div className={styles.copyIcon}>
      <div className={styles.countryWrapper}>
        <div className={styles.country}>Mobile Number</div>
      </div>
      <div className={styles.bgParent}>
        <div className={styles.bg} />
        <div className={styles.frameWrapper}>
          <img className={styles.frameChild} src={image_34} alt="" />
        </div>
        <div className={styles.hellomysitecom}>+1 834 333 6784</div>
      </div>
    </div>
  );
};

export default CopyIcon;
