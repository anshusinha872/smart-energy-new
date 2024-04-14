import FrameComponent7 from "./FrameComponent7";
import Box from "./Box";
import styles from "./FrameComponent3.module.css";
import Rectangle_8 from "../assets/Rectangle_8.png";
import Rectangle_9 from "../assets/Rectangle_9.png";
import Rectangle_10 from "../assets/Rectangle_10.png";
const FrameComponent3 = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <FrameComponent7
            acrossDomains="Testimonials"
            weAreExcitedToHaveYouJoin="Don’t just take our word for it - here’s what our users have to say"
            propPadding="0px var(--padding-xl)"
            propWidth="800px"
            propWidth1="unset"
            propPadding1="0px var(--padding-xl)"
            propAlignSelf="stretch"
            propFlex="unset"
            propWidth2="409px"
            propMinWidth="123px"
            propColor="#2d2d2d"
          />
          <div className={styles.wrapper}>
            <Box
              aesortSmartEnergyHasHelpe="“ Aesort Smart Energy has helped us reduce our energy costs by 20%. The system is easy to use and provides valuable insights that allow us to make informed decisions about our energy consumption.  “"
              rectangle8={Rectangle_8}
              serenaJohns="Serena Johns"
              brightTechSolutions="Bright tech solutions"
            />
            <Box
              aesortSmartEnergyHasHelpe="“ We are committed to sustainability and Aesort Smart Energy management system has been a game-changer for us. It's a win-win for our business and the environment.  “"
              rectangle8={Rectangle_9}
              serenaJohns="Daniel Carter"
              brightTechSolutions="Tranquil Haven Inn"
            />
            <Box
              aesortSmartEnergyHasHelpe="“ Since using Aesort Smart Energy management system, we've reduced our energy consumption and  benefitted from the system's ability to detect wastage and get recommendations  .  “"
              rectangle8={Rectangle_10}
              serenaJohns="Alex Wilson"
              brightTechSolutions="velocity motors"
            />
          </div>
        </div>
        <div className={styles.paginationWrapper}>
          <div className={styles.pagination}>
            <div className={styles.paginationChild} />
            <div className={styles.paginationItem} />
            <div className={styles.paginationInner} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
