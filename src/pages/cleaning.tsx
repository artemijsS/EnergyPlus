import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import Image from "next/image";
import MainContainer from "@/components/MainContainer"
import ContactUs from "@/components/common/ContactUs"
import styles from '@/styles/pagesStyles/cleaning.module.scss';

import mainCleaning from '@/assets/cleaning/mainCleaning.png';


export default function Cleaning() {

    const { t } = useTranslation();

    return (
        <MainContainer
            title={t("cleaning:seo.title") || "EnergyPlus | Cleaning"}
            description={t("cleaning:seo.description") || "EnergyPlus Cleaning..."}
        >
            <div className={styles.mainBlock}>
                <Image src={mainCleaning} alt={"mainHome"} className={styles.mainImage} priority={true} />
                <div className={styles.textBlock}>
                    <div className={"wrapper"} style={{position: "relative"}}>
                        <div className={styles.text}>
                            <h1>Solar Panel Cleaning<br/>Still Important</h1>
                            <h4>We will also clean for you solar panels installed on your house roof</h4>
                        </div>
                    </div>
                </div>
            </div>
            <section className={"wrapper " + styles.section}>
                <h2>Why solar panel cleaning is<br/><span>important?</span></h2>
                <div className={styles.important}>
                    <div className={styles.infoBlock}>
                        <div className={styles.block}>
                            <h5>Lets see together, why cleaning is that important!</h5>
                            <p>Want to know which panels we install? We install Recom (Puma) 410w 1812 x 1096.</p>
                        </div>
                        <div className={styles.block}>
                            <h5>Lets see together, why cleaning is that important!</h5>
                            <p>Want to know which panels we install? We install Recom (Puma) 410w 1812 x 1096.</p>
                        </div>
                    </div>
                    <div className={styles.videoBlock}>
                        <div className={styles.iframeBlock}>
                            <iframe src="https://www.youtube.com/embed/9gvOGiBp3lU"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </section>
            <section className={"wrapper " + styles.section}>
                <h2>Solar panel cleaning process</h2>
                <div className={styles.steps}>
                    <div className={styles.block}>
                        <div className={styles.step}>
                            <div className={styles.number}><span>1</span></div>
                            <p>Planning (we need to know the complexity of the work - the area, height and angle of inclination on which the panels are installed)</p>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.number}><span>2</span></div>
                            <p>Work price approval</p>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.number}><span>3</span></div>
                            <p>Cleaning the panels from the top layer of water pollution and bringing down the temperature of the panels themselves</p>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.step}>
                            <div className={styles.number}><span>4</span></div>
                            <p>Applying a special cleaner for solar panels</p>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.number}><span>5</span></div>
                            <p>Cleaning solar panels</p>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.number}><span>6</span></div>
                            <p>We remove the remaining moisture from the panels</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={"wrapper " + styles.section}>
                <h2>What do We use for cleaning<br/>purposes?</h2>
                <div className={styles.cleaner}>
                    <div className={styles.images}>
                        <div className={styles.block}>
                            <div className={styles.first}/>
                            <div className={styles.second}/>
                        </div>
                        <div className={styles.main}>
                            <div className={styles.price}>15 Eur / 5 Liters</div>
                            <div className={styles.info}>
                                <div className={styles.title}>PV Clean</div>
                                <div className={styles.block}>Using “PV Clean” to clean solar panels can be an effective way to improve their performance by removing dirt, dust, and debris.</div>
                                <div className={styles.block}>This method of high-pressure water cleaning can help to ensure that the panels are operating at their maximum efficiency.</div>
                                <div className={styles.block}>However, it's important to take proper safety precautions and follow the manufacturer's guidelines.</div>
                                <div className={styles.block}>If done correctly, cleaning your solar panels with Pw clean can be an excellent way to maintain their efficiency and prolong their lifespan.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ContactUs />
        </MainContainer>
    )
}

export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale)),
        },
    };
}
