import FrameComponent14 from "./FrameComponent14";
import FrameComponent13 from "./FrameComponent13";
import FrameComponent12 from "./FrameComponent12";
import FrameComponent11 from "./FrameComponent11";
import FrameComponent10 from "./FrameComponent10";
import FrameComponent9 from "./FrameComponent9";
import FrameComponent8 from "./FrameComponent8";
import FrameComponent6 from "./FrameComponent6";
import FrameComponent5 from "./FrameComponent5";
import DataProcessor from "./DataProcessor";
import RotationRoles from "./RotationRoles";
import FrameComponent3 from "./FrameComponent3";
import FrameComponent2 from "./FrameComponent2";
import AVLTree from "./AVLTree";
import styles from "./Desktop.module.css";
import styles1 from "./FrameComponent10.module.css";
import Shape_1 from "../assets/Shape_1.png";
import icon from "../assets/icon.png";
import Group_5325 from "../assets/Group_5325.png";
import Group_5324 from "../assets/Group_5324.png";
import overlay from "../assets/overlay.png";
import Group_1 from "../assets/Group_1.png";
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
          {/* <div className={styles.newsOneShape11Parent}>
            <img className={styles.newsOneShape11Icon} src={icon} alt="" />
            <div className={styles.hoverParent}>
              <img className={styles.hoverIcon} src={overlay} alt="" />
              <img
                className={styles.frameItem}
                src={Group_5324}
                loading="lazy"
                alt=""
              />
            </div>
            <div>
            Predictive & Reporting analytics capabilities
            </div>
          </div> */}
          {/* <div className={styles1.div}>
            <div className={styles1.bg} />
            <div className={styles1.inner}>
              <div className={styles1.iconParent}>
                <img className={styles1.icon} src={icon} loading="lazy" alt="" />
                <img className={styles1.frameChild} src={Group_1} alt="" />
              </div>
            </div>
            <div className={styles1.realTimeEnergyConsumption}>
              Real-time energy consumption monitoring
            </div>
          </div> */}
          <FrameComponent9 />
        </div>
      </section>
      <section className={styles.desktop1Inner}>
        <div className={styles.frameGroup}>
          <FrameComponent8 />
          <FrameComponent6 />
          <FrameComponent5 />
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
