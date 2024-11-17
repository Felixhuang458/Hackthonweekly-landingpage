import type { NextPage } from "next";
import Image from "next/image";
import styles from "./footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <section className={[styles.footer, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.image39Wrapper}>
          <Image
            className={styles.image39Icon}
            loading="lazy"
            width={1418}
            height={241}
            alt=""
            src="/image-39@2x.png"
          />
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.footerDescription}>
            <i className={styles.descriptionPlaceholder}>2000</i>
            <i className={styles.i}>
              <p className={styles.p}>创业者、开发者、</p>
              <p className={styles.p1}>投资人</p>
            </i>
          </div>
          <div className={styles.linksContainer}>
            <i className={styles.linksPlaceholder}>20</i>
            <i className={styles.i}>活动</i>
          </div>
          <div className={styles.linksContainer1}>
            <i className={styles.i2}>8</i>
            <i className={styles.i}>城市</i>
          </div>
          <div className={styles.linksContainer2}>
            <i className={styles.linksPlaceholder}>21</i>
            <i className={styles.ai}>AI创业项目</i>
          </div>
          <div className={styles.linksContainer3}>
            <i className={styles.linksPlaceholder}>25</i>
            <i className={styles.i}>主理人</i>
          </div>
          <div className={styles.linksContainer4}>
            <i className={styles.descriptionPlaceholder}>100+</i>
            <i className={styles.i}>知识库文章</i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
