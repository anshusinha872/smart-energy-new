import TreeTrunk from "./TreeTrunk";
import GroupComponent2 from "./GroupComponent2";
import styles from "./ThankYou.module.css";

const ThankYou = () => {
  return (
    <div className={styles.thankYou}>
      <img
        className={styles.confirmationTick1Icon}
        alt=""
        src="/59865confirmationtick-1@2x.png"
      />
      <TreeTrunk parentLinkPadding="var(--padding-sm) var(--padding-32xl) var(--padding-mini) var(--padding-101xl)" />
      <section className={styles.thankYouInner}>
        <GroupComponent2 applicationSentSuccessful="Application Sent Successfully." />
      </section>
    </div>
  );
};

export default ThankYou;
