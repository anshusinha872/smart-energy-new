import { useMemo } from "react";
import styles from "./IconSet.module.css";

const IconSet = ({
  occupancyDay,
  occupancyTime,
  mondayToFriday,
  aM500PM,
  propPadding,
  propWidth,
  propMinWidth,
  propDisplay,
  propMinWidth1,
  propMinWidth2,
  propMinWidth3,
  sliderControlsHeight,
  sliderControlsPadding,
  sliderControlsGap,
  sliderControlsHeight1,
  sliderControlsFlex,
  sliderControlsPadding1,
  sliderControlsGap1,
}) => {
  const iconSetStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv2Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const occupancyDayStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const occupancyTimeStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth1,
    };
  }, [propDisplay, propMinWidth1]);

  const sliderControlsStyle = useMemo(() => {
    return {
      height: sliderControlsHeight,
      padding: sliderControlsPadding,
      gap: sliderControlsGap,
    };
  }, [sliderControlsHeight, sliderControlsPadding, sliderControlsGap]);

  const sliderControls1Style = useMemo(() => {
    return {
      height: sliderControlsHeight1,
      flex: sliderControlsFlex,
      padding: sliderControlsPadding1,
      gap: sliderControlsGap1,
    };
  }, [
    sliderControlsHeight1,
    sliderControlsFlex,
    sliderControlsPadding1,
    sliderControlsGap1,
  ]);

  return (
    <div className={styles.iconSet} style={iconSetStyle}>
      <div className={styles.slideTransition}>
        <div className={styles.roundedCornersWrapper} style={frameDiv2Style}>
          <div className={styles.roundedCorners}>
            <div className={styles.flexibleContainer}>
              <div className={styles.occupancyDay} style={occupancyDayStyle}>
                {occupancyDay}
              </div>
            </div>
            <div className={styles.occupancyTime} style={occupancyTimeStyle}>
              {occupancyTime}
            </div>
          </div>
        </div>
        <div className={styles.searchBarParent}>
          <div className={styles.searchBar}>
            <select
              className={styles.sliderControls}
              style={sliderControlsStyle}
            />
          </div>
          <select
            className={styles.sliderControls1}
            style={sliderControls1Style}
          />
        </div>
      </div>
    </div>
  );
};

export default IconSet;
