import { useMemo } from "react";
import styles from "./FrameComponent15.module.css";
import logo from "../../public/21@2x.png";
const FrameComponent15 = ({
  contentContainerIconPadding,
  iconnavigationarrowBackIo,
}) => {
  const emailAddressLabelStyle = useMemo(() => {
    return {
      padding: contentContainerIconPadding,
    };
  }, [contentContainerIconPadding]);

  return (
    <div className={styles.emailAddressLabelParent}>
      <div className={styles.emailAddressLabel} style={emailAddressLabelStyle}>
        <a className={styles.iconnavigationarrowBackIosParent}>
          <img
            className={styles.iconnavigationarrowBackIos}
            loading="lazy"
            alt=""
            src={iconnavigationarrowBackIo}
          />
          <div className={styles.back}>Back</div>
        </a>
      </div>
      <img className={styles.contentContainerIcon} src={logo} loading="lazy" alt="" />
    </div>
  );
};

export default FrameComponent15;
