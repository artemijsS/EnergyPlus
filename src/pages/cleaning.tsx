import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import Image from "next/image";
import MainContainer from "@/components/MainContainer"
import ContactUs from "@/components/common/ContactUs"
import Calculator from "@/components/calculator/Calculator"
import styles from '@/styles/pagesStyles/cleaning.module.scss';

import mainCleaning from '@/assets/cleaning/mainCleaning.png';


export default function Cleaning() {

    const { t } = useTranslation();

    return (
        <MainContainer
            title={t("cleaning:seo.title") || "EnergyPlus | Cleaning"}
            description={t("cleaning:seo.description") || "EnergyPlus Cleaning..."}
            keywords={t("cleaning:seo.keywords") || "energyplus, solar panel cleaning, solar panels, carports"}
        >
            <div className={styles.mainBlock}>
                <Image src={mainCleaning} alt={"mainHome"} className={styles.mainImage} priority={true} />
                <div className={styles.textBlock}>
                    <div className={"wrapper"} style={{position: "relative"}}>
                        <div className={styles.text}>
                            <h1>{t("cleaning:main.h1")}</h1>
                            <h4>{t("cleaning:main.h4")}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <section className={"wrapper " + styles.section}>
                <h2 dangerouslySetInnerHTML={{__html: t("cleaning:important.title")}} />
                <div className={styles.important}>
                    <div className={styles.infoBlock}>
                        <div className={styles.block}>
                            <h5>{t("cleaning:important.first.h5")}</h5>
                            <p>{t("cleaning:important.first.p")}</p>
                        </div>
                        <div className={styles.block}>
                            <h5>{t("cleaning:important.second.h5")}</h5>
                            <p>{t("cleaning:important.second.p")}</p>
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
                <h2 dangerouslySetInnerHTML={{ __html: t("cleaning:calculator.title") }}/>
                <Calculator />
            </section>
            <section className={"wrapper " + styles.section}>
                <h2 dangerouslySetInnerHTML={{ __html: t("cleaning:process.title") }} />
                <div className={styles.steps}>
                    <div className={styles.block}>
                        <div className={styles.step}>
                            <div className={styles.number}><span>1</span></div>
                            <p>{t("cleaning:process._1")}</p>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.number}><span>2</span></div>
                            <p>{t("cleaning:process._2")}</p>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.number}><span>3</span></div>
                            <p>{t("cleaning:process._3")}</p>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.step}>
                            <div className={styles.number}><span>4</span></div>
                            <p>{t("cleaning:process._4")}</p>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.number}><span>5</span></div>
                            <p>{t("cleaning:process._5")}</p>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.number}><span>6</span></div>
                            <p>{t("cleaning:process._6")}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={"wrapper " + styles.section}>
                <h2 dangerouslySetInnerHTML={{ __html: t("cleaning:cleaner.title") }} />
                <div className={styles.cleaner}>
                    <div className={styles.images}>
                        <div className={styles.block}>
                            <div className={styles.first}/>
                            <div className={styles.second}/>
                        </div>
                        <div className={styles.main}>
                            <div className={styles.price}>{t("cleaning:cleaner.price")}</div>
                            <div className={styles.info}>
                                <div className={styles.title}>PV Clean</div>
                                <div className={styles.block}>{t("cleaning:cleaner._1")}</div>
                                <div className={styles.block}>{t("cleaning:cleaner._2")}</div>
                                <div className={styles.block}>{t("cleaning:cleaner._3")}</div>
                                <div className={styles.block}>{t("cleaning:cleaner._4")}</div>
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
