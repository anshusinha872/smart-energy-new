import styles from "./Box.module.css";

const Box = ({
  aesortSmartEnergyHasHelpe,
  rectangle8,
  serenaJohns,
  brightTechSolutions,
}) => {
  return (
    <div className={styles.box}>
      <div className={styles.aesortSmartEnergy}>
        {aesortSmartEnergyHasHelpe}
      </div>
      <div className={styles.client}>
        <img
          className={styles.clientChild}
          loading="lazy"
          alt=""
          src={rectangle8}
        />
        <div className={styles.info}>
          <div className={styles.serenaJohns}>{serenaJohns}</div>
          <div className={styles.brightTechSolutions}>
            {brightTechSolutions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
