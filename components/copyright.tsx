import type { NextPage } from "next";
import Image from "next/image";
import styles from "./copyright.module.css";

export type CopyrightType = {
  className?: string;
};

const Copyright: NextPage<CopyrightType> = ({ className = "" }) => {
  return (
    <footer className={[styles.copyright, className].join(" ")}>
      <div className={styles.copyrightContent}>
        <div className={styles.footerNavigation}>
          <i className={styles.i}>首页</i>
          <i className={styles.i}>微信公众号</i>
          <i className={styles.i}>隐私政策</i>
        </div>
        <div className={styles.logoContainerParent}>
          <div className={styles.logoContainer}>
            <Image
              className={styles.logoIcon}
              loading="lazy"
              width={63}
              height={79}
              alt=""
              src="/logo.svg"
            />
          </div>
          <div className={styles.legal}>
            <div className={styles.legalContent}>
              <div className={styles.legalLinks}>
                <div className={styles.legalItems}>
                  <i className={styles.i}>活动</i>
                  <div className={styles.wrapper}>
                    <i className={styles.i}>微信：</i>
                  </div>
                  <i className={styles.i}>用户协议</i>
                </div>
                <div className={styles.legalItems1}>
                  <i className={styles.i}>共创/关于我们</i>
                  <i className={styles.i}>免责声明</i>
                </div>
              </div>
              <i className={styles.i}>新闻中心</i>
            </div>
            <div className={styles.copyrightInfo}>
              <i className={styles.i}>版权信息 © 2024 周周黑客松</i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Copyright;
