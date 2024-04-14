import GroupComponent from "./GroupComponent";
import styles from "./FrameComponent5.module.css";

const FrameComponent5 = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <GroupComponent
          maskGroup="400x405x-65909973"
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
