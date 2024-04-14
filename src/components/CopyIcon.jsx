import styles from "./CopyIcon.module.css";
import image_34 from "../../public/image 34.png";
const CopyIcon = ({ value, setValue, type, label }) => {
  return (
    <div className={styles.copyIcon}>
      <div className={styles.countryWrapper}>
        <div className={styles.country}>{label}</div>
      </div>
      <div className={styles.bgParent}>
        <div className={styles.bg} />
        <div className={styles.frameWrapper}>
          <img className={styles.frameChild} src={image_34} alt="" />
        </div>
        <input
          className={styles.hellomysitecom}
          placeholder="+1 834 333 6784"
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default CopyIcon;
