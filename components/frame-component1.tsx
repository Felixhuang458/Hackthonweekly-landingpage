import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
  prop?: string;

  /** Style props */
  frameDivGap?: CSSProperties["gap"];
  workshopRowWidth?: CSSProperties["width"];
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  className = "",
  frameDivGap,
  workshopRowWidth,
  prop,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      gap: frameDivGap,
    };
  }, [frameDivGap]);

  const workshopRowStyle: CSSProperties = useMemo(() => {
    return {
      width: workshopRowWidth,
    };
  }, [workshopRowWidth]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={frameDiv2Style}
    >
      <div className={styles.frameChild} />
      <div className={styles.workshopRow} style={workshopRowStyle}>
        <b className={styles.b}>{prop}</b>
      </div>
      <div className={styles.div}>待补充</div>
    </div>
  );
};

export default FrameComponent1;
