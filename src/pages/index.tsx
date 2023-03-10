import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MainContainer from "@/components/MainContainer"
import {useTranslation} from "next-i18next";
import Image from "next/image";
import styles from '@/styles/pagesStyles/home.module.scss';

import mainHome from '@/assets/home/mainHome.png';

export default function Home() {

    const { t } = useTranslation();

    return (
        <MainContainer
            title={t("home:seo.title") || "EnergyPlus"}
            description={t("home:seo.description") || "EnergyPlus..."}
            keywords={t("home:seo.keywords") || "energyplus, solar panels, carport, solar panel cleaning, carports"}
        >
            <div className={styles.mainBlock}>
                <Image src={mainHome} alt={"mainHome"} className={styles.mainImage} priority={true}/>
                <div className={styles.textBlock}>
                    <div className={"wrapper"}>
                        <div className={styles.text}>
                            <h1 dangerouslySetInnerHTML={{ __html: t("home:main.h1") }}/>
                            <h4>{t("home:main.h4")}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <section className={"wrapper " + styles.info}>
                <div className={styles.blocks}>
                    <div className={styles.block}>
                        <div className={styles.blockText}>
                            <h4>{t("home:info.first.h4")}</h4>
                            <p>{t("home:info.first.p")}</p>
                            <h6>{t("home:info.first.h6")}</h6>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.blockText}>
                            <h4>{t("home:info.second.h4")}</h4>
                            <p>{t("home:info.second.p")}</p>
                            <h6>{t("home:info.second.h6")}</h6>
                        </div>
                    </div>
                    <div className={styles.break}/>
                    <div className={styles.block}>
                        <div className={styles.blockText}>
                            <h4>{t("home:info.third.h4")}</h4>
                            <p>{t("home:info.third.p")}</p>
                            <h6>{t("home:info.third.h6")}</h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className={"wrapper " + styles.offer}>
                <h2 dangerouslySetInnerHTML={{ __html: t("home:offer.title") }} />
                <div className={styles.offerBlocks}>
                    <div className={styles.block}>
                        <div className={styles.textBlock}>
                            <h5>{t("home:offer.first.h5")}</h5>
                            <p>{t("home:offer.first.p")}</p>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.textBlock}>
                            <h5>{t("home:offer.second.h5")}</h5>
                            <p>{t("home:offer.second.p")}</p>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.textBlock}>
                            <h5>{t("home:offer.third.h5")}</h5>
                            <p>{t("home:offer.third.p")}</p>
                        </div>
                    </div>
                </div>
            </section>
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
