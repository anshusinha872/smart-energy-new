import { useMemo } from "react";
import styles from "./FrameComponent7.module.css";

const FrameComponent7 = ({
  acrossDomains,
  weAreExcitedToHaveYouJoin,
  propPadding,
  propWidth,
  propWidth1,
  propPadding1,
  propAlignSelf,
  propFlex,
  propWidth2,
  propMinWidth,
  propColor,
}) => {
  const frameDiv3Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv4Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDiv5Style = useMemo(() => {
    return {
      width: propWidth1,
      padding: propPadding1,
      alignSelf: propAlignSelf,
      justifyContent: "center",
    };
  }, [propWidth1, propPadding1, propAlignSelf]);

  const frameDiv6Style = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth2,
      justifyContent: "center",
    };
  }, [propFlex, propWidth2]);

  const acrossDomainsStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const weAreExcitedStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={styles.frameWrapper} style={frameDiv3Style}>
      <div className={styles.frameParent} style={frameDiv4Style}>
        <div className={styles.frameContainer} style={frameDiv5Style}>
          <div className={styles.patternMatcherParent} style={frameDiv6Style}>
            <div className={styles.timingControlWrapper}>
              <div className={styles.timingControl}>
                <div className={styles.timingControlChild} />
                <div className={styles.errorHandler}>
                  <div className={styles.errorHandlerChild} />
                </div>
              </div>
            </div>
            <div className={styles.acrossDomains} style={acrossDomainsStyle}>
              {acrossDomains}
            </div>
            <div className={styles.timingControlWrapper}>
              <div className={styles.timingControl}>
                <div className={styles.errorHandler}>
                  <div className={styles.errorHandlerChild} />
                </div>
                <div className={styles.timingControlChild} />
              </div>
            </div>
          </div>
        </div>
        <h2 className={styles.weAreExcited} style={weAreExcitedStyle}>
          {weAreExcitedToHaveYouJoin}
        </h2>
      </div>
    </div>
  );
};

export default FrameComponent7;
