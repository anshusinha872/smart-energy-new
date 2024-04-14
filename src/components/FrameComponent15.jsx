import { useMemo } from "react";
import styles from "./FrameComponent15.module.css";
import logo from "../../public/21@2x.png";
import iconnavigationarrowBackIos from "../assets/arrow_back_ios_24px.png";
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
            src={iconnavigationarrowBackIos}
          />
          <div className={styles.back}>Back</div>
        </a>
      </div>
      <img
        className={styles.contentContainerIcon}
        src={logo}
        loading="lazy"
        alt=""
      />
    </div>
  );
};

export default FrameComponent15;
