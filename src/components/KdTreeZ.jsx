import { useMemo } from "react";
import styles from "./KdTreeZ.module.css";

const KdTreeZ = ({
  mobileNo,
  documentpdf,
  propFlex,
  propMinWidth,
  propWidth,
  propAlignSelf,
  propPadding,
  propPadding1,
  groupInputHeight,
  groupInputWidth,
  groupInputPadding,
}) => {
  const kdTreeZStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propWidth]);

  const mobileNoStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const groupDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const octreeStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const groupInputStyle = useMemo(() => {
    return {
      height: groupInputHeight,
      width: groupInputWidth,
      padding: groupInputPadding,
    };
  }, [groupInputHeight, groupInputWidth, groupInputPadding]);

  return (
    <div className={styles.kdTreeZ} style={kdTreeZStyle}>
    <b className={styles.mobileNo} style={mobileNoStyle}>
      {mobileNo}
    </b>
    <div className={styles.rectangleParent} style={groupDivStyle}>
      <div className={styles.frameChild} />
      <div className={styles.octree} style={octreeStyle}>
        <div className={styles.documentpdf}>{documentpdf}</div>
      </div>
      {/* Label styled as button */}
      <label htmlFor="fileInput" className={styles.uploadButton}>
        Upload
        {/* File input */}
        <input
          type="file"
          id="fileInput"
          className={styles.frameItem}
          style={{ display: 'none' }} // Hide the file input visually
        />
      </label>
    </div>
  </div>
  );
};

export default KdTreeZ;
