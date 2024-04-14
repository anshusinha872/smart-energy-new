import styles from "./FrameComponent2.module.css";

const FrameComponent2 = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.iterationLoopParent}>
          <div className={styles.iterationLoop}>
            <div className={styles.dataFilter}>
              <div className={styles.patternMatcher}>
                <img className={styles.elementIcon} alt="" />
              </div>
              <div className={styles.frequentlyAskedQuestions}>
                Frequently Asked Questions
              </div>
              <div className={styles.timingControlWrapper}>
                <div className={styles.timingControl}>
                  <div className={styles.priorityHandler} />
                  <div className={styles.errorHandler}>
                    <div className={styles.errorHandlerChild} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.dataAggregator}>
            <div className={styles.logicBranch}>
              <h2 className={styles.findQuickSolutions}>
                {" "}
                Find Quick Solutions to Your Inquiries Here.
              </h2>
            </div>
            <div className={styles.accordion}>
              <div className={styles.whatTypesOf}>
                What types of buildings can benefit from your system?
              </div>
              <div className={styles.chevronDownWrapper}>
                <div className={styles.chevronDown}>chevron-down</div>
              </div>
            </div>
          </div>
          <div className={styles.dataAggregator1}>
            <div className={styles.ourSystemIsIdealForCommerWrapper}>
              <div className={styles.ourSystemIs}>
                 Our system is ideal for commercial buildings, including Small
                to Medium sized companies, Hospitality industry, Retail Chains,
                Educational Institutions and more.
              </div>
            </div>
            <div className={styles.accordion1}>
              <div className={styles.howLongWorking}>
                How Long Working Time ?
              </div>
              <div className={styles.chevronDownContainer}>
                <div className={styles.chevronDown1}>chevron-down</div>
              </div>
            </div>
          </div>
          <div className={styles.accordionWrapper}>
            <div className={styles.accordion2}>
              <div className={styles.whatDataIs}>
                What data is collected by the management system ?
              </div>
              <div className={styles.chevronDownFrame}>
                <div className={styles.chevronDown2}>chevron-down</div>
              </div>
            </div>
          </div>
          <div className={styles.accordionParent}>
            <div className={styles.accordion3}>
              <div className={styles.whatTypesOf1}>
                What types of systems can be monitored and controlled ?
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.chevronDown3}>chevron-down</div>
              </div>
            </div>
            <div className={styles.accordion4}>
              <div className={styles.canTheSystem}>
                Can the system integrate with my existing Building Management
                System ?
              </div>
              <div className={styles.chevronDownWrapper1}>
                <div className={styles.chevronDown4}>chevron-down</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.treeStructure}>
          <img className={styles.maskGroupIcon} alt="" />
          <div className={styles.rootedTree}>
            <div className={styles.wrapperMaskGroup}>
              <img className={styles.maskGroupIcon1} alt="" />
            </div>
            <div className={styles.decisionTree} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
