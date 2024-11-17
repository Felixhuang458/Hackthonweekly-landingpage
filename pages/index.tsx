import type { NextPage } from "next";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent from "../components/frame-component";
import Component1 from "../components/component1";
import FrameComponent1 from "../components/frame-component1";
import Footer from "../components/footer";
import Copyright from "../components/copyright";
import styles from "./index.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <main className={styles.main}>
        <div className={styles.div} />
        <FrameComponent2 />
        <div className={styles.inner}>
          <button className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.div1}>立即报名</div>
          </button>
        </div>
        <section className={styles.child}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.frameWrapper}>
                <div className={styles.mvpParent}>
                  <i className={styles.mvp}>周周黑客松，MVP超轻松</i>
                  <div className={styles.div2}>
                    跟上我们的理念：花1周时间，创造1个最小可行产品，解决1个生活痛点，下1个改变世界的起点
                  </div>
                </div>
              </div>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <div className={styles.div3}>图片</div>
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.mvpGroup}>
                <i className={styles.mvp1}>MVP落地需要的这里都有</i>
                <div className={styles.resourceIcons}>
                  <FrameComponent
                    prop="轻社交创业社区"
                    prop1="周周黑客松每周线下活动，帮你连"
                    aI="接全球AI创业者、项目、投资人"
                  />
                  <div className={styles.rectangleContainer}>
                    <div className={styles.frameInner} />
                    <div className={styles.ellipseParent}>
                      <div className={styles.ellipseDiv} />
                      <div className={styles.wrapper}>
                        <div className={styles.div4}>共创资源库</div>
                      </div>
                    </div>
                    <div className={styles.mvpContainer}>
                      <div className={styles.demo}>
                        <ul className={styles.ul}>
                          <li>从0到1的创业MVP手册</li>
                        </ul>
                      </div>
                      <div className={styles.demo}>
                        <ul className={styles.ul}>
                          <li>Demo项目库</li>
                        </ul>
                      </div>
                      <div className={styles.div5}>
                        <ul className={styles.ul}>
                          <li>创业者人才库</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <FrameComponent
                    rectangleDivWidth="345px"
                    frameDivFlex="unset"
                    prop="AI主题共学共创"
                    divAlignSelf="unset"
                    divTextAlign="left"
                    prop1="专家指导、资源共享、项目孵化、"
                    aI="技术交流，助力AI创业成长"
                  />
                </div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.frameParent1}>
                <div className={styles.frameParent2}>
                  <div className={styles.parent}>
                    <i className={styles.i}>
                      <p className={styles.p}>周周黑客松，</p>
                      <p className={styles.ai}>
                        每周多样活动，激发你的创业潜能
                      </p>
                    </i>
                    <div className={styles.container}>
                      <h2 className={styles.h2}>活动特色</h2>
                    </div>
                  </div>
                  <div className={styles.eventTypeContentWrapper}>
                    <div className={styles.eventTypeContent}>
                      <div className={styles.eventTypeList}>
                        <div className={styles.div6}>
                          <div className={styles.item} />
                          <div className={styles.child1} />
                          <div className={styles.frameParent3}>
                            <div className={styles.frame}>
                              <b className={styles.b}>硬件手搓桌面机器人</b>
                            </div>
                            <div className={styles.div7}>待补充</div>
                          </div>
                          <div className={styles.wrapper1}>
                            <div className={styles.div8}>图片</div>
                          </div>
                        </div>
                        <Component1 />
                      </div>
                      <div className={styles.moreEventsButtonWrapper}>
                        <button className={styles.moreEventsButton}>
                          <div className={styles.moreEventsButtonChild} />
                          <div className={styles.more}>More</div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper1}>
                    <div className={styles.group}>
                      <h2 className={styles.h21}>只管创造，收获都在社区中</h2>
                      <div className={styles.div9}>
                        五湖四海，不同目的，却都找到了自己的命题
                      </div>
                    </div>
                  </div>
                  <div className={styles.testimonialContentWrapper}>
                    <div className={styles.testimonialContent}>
                      <div className={styles.testimonialRowParent}>
                        <div className={styles.testimonialRow}>
                          <div className={styles.testimonialRowChild} />
                          <div className={styles.wrapper2}>
                            <b className={styles.b1}>合伙人</b>
                          </div>
                          <div className={styles.yihan812}>
                            <p className={styles.ai}>
                              Yihan，我从上海搬来深圳，在8.12硬件测评活动里找到了我的
                            </p>
                            <p className={styles.ai}>
                              技术合伙人，我们在做AI玩具
                            </p>
                          </div>
                        </div>
                        <div className={styles.rectangleParent1}>
                          <div className={styles.testimonialRowChild} />
                          <b className={styles.b2}>投资机会</b>
                          <div className={styles.placeholderTestimonial}>
                            <div className={styles.div8}>待补充</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameParent4}>
                        <div className={styles.rectangleParent2}>
                          <div className={styles.testimonialRowChild} />
                          <div className={styles.wrapper3}>
                            <b className={styles.b1}>演讲路演</b>
                          </div>
                          <div className={styles.brainxxx}>
                            <p className={styles.ai}>
                              Brain，我是一个独立开发，我做了一个xxx，
                            </p>
                            <p className={styles.ai}>我不善于言辞</p>
                            <p className={styles.ai}>
                              9.26第十二期活动，我在20人面前完成了人生第一次轻路演
                            </p>
                          </div>
                        </div>
                        <div className={styles.rectangleParent3}>
                          <div className={styles.testimonialRowChild} />
                          <div className={styles.wrapper4}>
                            <b className={styles.b1}>最新信息</b>
                          </div>
                          <div className={styles.yihan812}>
                            <p className={styles.ai}>
                              Yihan，我从上海搬来深圳，在8.12硬件测评活动里找到了我的
                            </p>
                            <p className={styles.ai}>
                              技术合伙人，我们在做AI玩具
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper2}>
                    <div className={styles.parent1}>
                      <h2 className={styles.h22}>持续孵化</h2>
                      <div className={styles.incubationPrograms}>
                        <div className={styles.programList}>
                          <div className={styles.programIconParent}>
                            <div className={styles.programIcon} />
                            <h3 className={styles.ai2}>AI主题俱乐部</h3>
                            <div className={styles.wrapper5}>
                              <div className={styles.div8}>图片</div>
                            </div>
                          </div>
                          <div className={styles.rectangleParent4}>
                            <div className={styles.programIcon} />
                            <h3 className={styles.ai2}>导师实战课程</h3>
                            <div className={styles.wrapper6}>
                              <div className={styles.div8}>图片</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.joinUsContentParent}>
                  <div className={styles.joinUsContent}>
                    <button className={styles.button}>
                      <div className={styles.child2} />
                      <div className={styles.div13}>成为主理人，加入我们</div>
                    </button>
                    <div className={styles.wrapper7}>
                      <Component1
                        divAlignSelf="unset"
                        divFlex="1"
                        frameDivFlex="unset"
                        frameDivPadding="0px 0px 38px"
                      />
                    </div>
                  </div>
                  <div className={styles.workshopContentWrapper}>
                    <div className={styles.testimonialContent}>
                      <FrameComponent1 prop="解疑答惑" />
                      <FrameComponent1
                        frameDivGap="2.5px"
                        workshopRowWidth="181.4px"
                        prop="实操经验"
                      />
                    </div>
                  </div>
                  <div className={styles.container1}>
                    <div className={styles.rectangleParent5}>
                      <div className={styles.programIcon} />
                      <b className={styles.b5}>黑客松3天2夜</b>
                      <div className={styles.imageWrapper}>
                        <div className={styles.div8}>图片</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
        <Copyright />
      </main>
    </div>
  );
};

export default Home;
