import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
  prop?: string;
  prop1?: string;
  aI?: string;

  /** Style props */
  rectangleDivWidth?: CSSProperties["width"];
  frameDivFlex?: CSSProperties["flex"];
  divAlignSelf?: CSSProperties["alignSelf"];
  divTextAlign?: CSSProperties["textAlign"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  rectangleDivWidth,
  frameDivFlex,
  prop,
  divAlignSelf,
  divTextAlign,
  prop1,
  aI,
}) => {
  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      width: rectangleDivWidth,
    };
  }, [rectangleDivWidth]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      flex: frameDivFlex,
    };
  }, [frameDivFlex]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: divAlignSelf,
      textAlign: divTextAlign,
    };
  }, [divAlignSelf, divTextAlign]);

  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} style={rectangleDivStyle} />
      <div className={styles.iconRow}>
        <div className={styles.iconRowChild} />
        <div className={styles.wrapper} style={frameDivStyle}>
          <div className={styles.div} style={divStyle}>
            {prop}
          </div>
        </div>
      </div>
      <div className={styles.ai}>
        <p className={styles.p}>{prop1}</p>
        <p className={styles.ai1}>{aI}</p>
      </div>
    </div>
  );
};

export default FrameComponent;
