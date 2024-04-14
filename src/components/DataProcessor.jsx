import Box3 from "./Box3";
import Box2 from "./Box2";
import Box1 from "./Box1";
import styles from "./DataProcessor.module.css";

const DataProcessor = () => {
  return (
    <div className={styles.dataProcessor}>
      <div className={styles.numberHandlerParent}>
        <div className={styles.numberHandler}>
          <div className={styles.title}>
            <div className={styles.shapeSorter}>
              {/* <div className={styles.patternMatcher}>
                <img className={styles.elementIcon} alt="" />
              </div> */}
              <div className={styles.timingControlWrapper}>
                <div className={styles.timingControl}>
                  <div className={styles.timingControlChild} />
                  <div className={styles.errorHandler}>
                    <div className={styles.errorHandlerChild} />
                  </div>
                </div>
              </div>
              <div className={styles.ourPricing}>Our Pricing</div>
              <div className={styles.timingControlWrapper}>
                <div className={styles.timingControl}>
                  <div className={styles.timingControlChild} />
                  <div className={styles.errorHandler}>
                    <div className={styles.errorHandlerChild} />
                  </div>
                </div>
              </div>
            </div>
            <h2 className={styles.chooseTheBest}>
              Choose the best plan for you
            </h2>
          </div>
        </div>
        <div className={styles.wrapper}>
          <Box3 />
          <Box2 />
          <Box1 />
          <div className={styles.perReport}>/per report</div>
        </div>
      </div>
    </div>
  );
};

export default DataProcessor;
