import styles from "./GroupComponent2.module.css";

const GroupComponent2 = ({ applicationSentSuccessful }) => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.iconWithACheckMarkWrapper}>
        <img
          className={styles.iconWithACheckMark}
          loading="lazy"
          alt=""
          src="/icon-with-a-check-mark@2x.png"
        />
      </div>
      <div className={styles.applicationSentSuccessfullyContainer}>
        <p className={styles.applicationSentSuccessfully}>
          {applicationSentSuccessful}
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.thankYouFor}>
          Thank you for choosing Smart Energy
        </p>
      </div>
    </div>
  );
};

export default GroupComponent2;
