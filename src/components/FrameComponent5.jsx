import GroupComponent from "./GroupComponent";
import styles from "./FrameComponent5.module.css";
import Group_5318 from "../assets/Group_5318.png";
const FrameComponent5 = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <GroupComponent
          maskGroup={Group_5318}
          hospitalityIndustry="Educational Institutions"
        />
        <GroupComponent
          maskGroup="400x405x-1939377350"
          hospitalityIndustry="Recreational Facilities"
        />
        <GroupComponent
          maskGroup="400x405x-871822659"
          hospitalityIndustry={`Museums & Galleries`}
        />
      </div>
    </div>
  );
};

export default FrameComponent5;
