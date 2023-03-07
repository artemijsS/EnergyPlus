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
                <Image src={mainHome} alt={"mainHome"} className={styles.mainImage} />
                <div className={styles.textBlock}>
                    <div className={"wrapper"}>
                        <div className={styles.text}>
                            <h1>A Brighter Future,<br/>Powered By The Sun.</h1>
                            <h4>One of the most perspective corporations in field of Solar Energy</h4>
                        </div>
                    </div>
                </div>
            </div>
            <section className={"wrapper " + styles.info}>
                <div className={styles.blocks}>
                    <div className={styles.block}>
                        <div className={styles.blockText}>
                            <h4>Fast installation of Your future economy</h4>
                            <p>Experienced team of professionals will help You to start your economy journey with the Solar Energy. </p>
                            <h6>Life is Better with a Energy Plus.</h6>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.blockText}>
                            <h4>Fast installation of Your future economy</h4>
                            <p>Experienced team of professionals will help You to start your economy journey with the Solar Energy. </p>
                            <h6>Life is Better with a Energy Plus.</h6>
                        </div>
                    </div>
                    <div className={styles.break}/>
                    <div className={styles.block}>
                        <div className={styles.blockText}>
                            <h4>Fast installation of Your future economy</h4>
                            <p>Experienced team of professionals will help You to start your economy journey with the Solar Energy. </p>
                            <h6>Life is Better with a Energy Plus.</h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className={"wrapper " + styles.offer}>
                <h2>What We Are Offering<br/>To You?</h2>
                <div className={styles.offerBlocks}>
                    <div className={styles.block}>
                        <div className={styles.textBlock}>
                            <h5>Solar panel planning &<br/>installation</h5>
                            <p>We will bring & install the best solar pannels special for you in 1 week! </p>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.textBlock}>
                            <h5>Solar panel cleaning &<br/>transportation</h5>
                            <p>We will bring & install the best solar pannels special for you in 1 week! </p>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.textBlock}>
                            <h5>Carports manufacturing &<br/>installation</h5>
                            <p>We will bring & install the best solar pannels special for you in 1 week! </p>
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
