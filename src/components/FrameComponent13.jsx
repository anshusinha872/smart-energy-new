import styles from "./FrameComponent13.module.css";

const FrameComponent13 = () => {
  return (
    <div className={styles.imageParent}>
      <img className={styles.imageIcon} alt="" />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.theFutureOfEnergyEfficiencParent}>
          <h1 className={styles.theFutureOf}>
            The Future of Energy Efficiency is Here: Equip Your Building with
            Smart Tech
          </h1>
          <div className={styles.practicalRenewableEnergyTecWrapper}>
            <div className={styles.practicalRenewableEnergy}>
              Practical renewable energy technology thatreduces costs and helps
              the environment
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <button className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <b className={styles.getStarted}>Get Started</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent13;
