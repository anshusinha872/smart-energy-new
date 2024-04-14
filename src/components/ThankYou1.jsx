import TreeTrunk from "./TreeTrunk";
import GroupComponent2 from "./GroupComponent2";
import styles from "./ThankYou1.module.css";

const ThankYou1 = () => {
  return (
    <div className={styles.thankYou}>
      <img
        className={styles.confirmationTick1Icon}
        alt=""
        src="/59865confirmationtick-1@2x.png"
      />
      <TreeTrunk parentLinkPadding="var(--padding-sm) var(--padding-32xl) var(--padding-mini) var(--padding-101xl)" />
      <section className={styles.thankYouInner}>
        <GroupComponent2 applicationSentSuccessful="Payment Successful." />
      </section>
    </div>
  );
};

export default ThankYou1;
