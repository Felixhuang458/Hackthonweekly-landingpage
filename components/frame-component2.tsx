import type { NextPage } from "next";
import Image from "next/image";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section className={[styles.bannerParent, className].join(" ")}>
      <div className={styles.banner} />
      <Image
        className={styles.clipPathGroup}
        loading="lazy"
        width={45}
        height={57}
        alt=""
        src="/clip-path-group.svg"
      />
      <header className={styles.sloganContainerWrapper}>
        <nav className={styles.sloganContainer}>
          <a className={styles.a}>首页</a>
          <a className={styles.a}>活动</a>
          <a className={styles.a}>共创/关于我们</a>
          <a className={styles.a}>新闻中心</a>
        </nav>
      </header>
      <h1 className={styles.ai}>
        <p className={styles.ai1}>AI创业时代</p>
        <p className={styles.p}>最具创造性的初创平台</p>
      </h1>
    </section>
  );
};

export default FrameComponent2;
