import FrameComponent14 from "./FrameComponent14";
import FrameComponent13 from "./FrameComponent13";
import FrameComponent12 from "./FrameComponent12";
import FrameComponent11 from "./FrameComponent11";
import FrameComponent10 from "./FrameComponent10";
import FrameComponent9 from "./FrameComponent9";
import FrameComponent8 from "./FrameComponent8";
import FrameComponent6 from "./FrameComponent6";
import DataProcessor from "./DataProcessor";
import RotationRoles from "./RotationRoles";
import FrameComponent3 from "./FrameComponent3";
import FrameComponent2 from "./FrameComponent2";
import AVLTree from "./AVLTree";
import styles from "./Desktop.module.css";
import Shape_1 from "../assets/Shape_1.png";
import icon from "../assets/icon.png";
import Group_5325 from "../assets/Group_5325.png";
import Mask_group from "../assets/Mask_group_(1).png";
const Desktop = () => {
  return (
    <div className={styles.desktop1}>
      <section className={styles.frameParent}>
        <FrameComponent14 />
        <div className={styles.div} />
        <FrameComponent13 />
      </section>
      <FrameComponent12 />
      <FrameComponent11 />
      <div className={styles.accordion}>
        <div className={styles.whereTheOffice}>Where The Office Work ?</div>
        <div className={styles.chevronDown}>chevron-down</div>
      </div>
      <section className={styles.bg}>
        <div className={styles.bgParent}>
          <div className={styles.bg1} />
          <FrameComponent10 />
          <div className={styles.shape1Parent}>
            <img className={styles.shape1Icon} src={Shape_1} alt="" />
            <div className={styles.div1}>
              <div className={styles.bg2} />
              <div className={styles.iconParent}>
                <img className={styles.icon} src={icon} alt="" />
                <img className={styles.frameChild} src={Group_5325} alt="" />
              </div>
              <div className={styles.automationFeaturesFor}>
                Automation features for scheduling and controlling
              </div>
            </div>
          </div>
          <FrameComponent9 />
        </div>
      </section>
      <section className={styles.desktop1Inner}>
        <div className={styles.frameGroup}>
          <FrameComponent8 />
          <FrameComponent6 />
          <DataProcessor />
          <RotationRoles />
          <FrameComponent3 />
          <FrameComponent2 />
        </div>
      </section>
      <img className={styles.maskGroupIcon} src={Mask_group} alt="" />
      <AVLTree />
    </div>
  );
};

export default Desktop;
