import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./component1.module.css";

export type Component1Type = {
  className?: string;

  /** Style props */
  divAlignSelf?: CSSProperties["alignSelf"];
  divFlex?: CSSProperties["flex"];
  frameDivFlex?: CSSProperties["flex"];
  frameDivPadding?: CSSProperties["padding"];
};

const Component1: NextPage<Component1Type> = ({
  className = "",
  divAlignSelf,
  divFlex,
  frameDivFlex,
  frameDivPadding,
}) => {
  const div1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: divAlignSelf,
      flex: divFlex,
    };
  }, [divAlignSelf, divFlex]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      flex: frameDivFlex,
      padding: frameDivPadding,
    };
  }, [frameDivFlex, frameDivPadding]);

  return (
    <div className={[styles.div, className].join(" ")} style={div1Style}>
      <div className={styles.child} />
      <div className={styles.typeIconWrapper}>
        <div className={styles.typeIcon} />
      </div>
      <div className={styles.frameParent} style={frameDiv1Style}>
        <div className={styles.demoDayWrapper}>
          <div className={styles.demoDay}>DEMO DAY</div>
        </div>
        <div className={styles.div1}>待补充</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.div2}>图片</div>
      </div>
    </div>
  );
};

export default Component1;
