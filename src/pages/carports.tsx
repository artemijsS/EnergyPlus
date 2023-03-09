import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MainContainer from "@/components/MainContainer"
import {useTranslation} from "next-i18next";
import Image from "next/image";
import styles from '@/styles/pagesStyles/carports.module.scss';

import mainCarports from '@/assets/carports/mainCarports.png';
import CPW1 from '@/assets/carports/CPW1.png';



export default function Carports() {

    const { t } = useTranslation();

    return (
        <MainContainer
            title={t("carports:seo.title") || "EnergyPlus | Carports"}
            description={t("carports:seo.description") || "EnergyPlus Carports..."}
        >
            <div className={styles.mainBlock}>
                <Image src={mainCarports} alt={"mainHome"} className={styles.mainImage} priority={true} />
                <div className={styles.textBlock}>
                    <div className={"wrapper"} style={{position: "relative"}}>
                        <div className={styles.text}>
                            <h1>Car Ports For Parking<br/>Slots & Offices</h1>
                            <h4>The charge can be useful even when You are on site work</h4>
                        </div>
                    </div>
                </div>
            </div>
            <section className={"wrapper overFlowHidden " + styles.section}>
                <h2>What is <span>“carport”</span> and why it is<br/>important for <span>You?</span></h2>
                <div className={styles.important + " " + styles.carportPage}>
                    <div className={styles.steps}>
                        <div className={styles.step}>
                            <div className={styles.number}><span>1</span></div>
                            <p>They can provide a source of renewable energy for households or businesses. By generating electricity from the sun, solar panel carports can help reduce dependence on fossil fuels and lower carbon emissions.</p>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.number}><span>2</span></div>
                            <p>Solar panel carports can provide a cost-effective way to generate electricity. By using the space above a carport for solar panels, it is possible to generate energy without taking up additional space on the ground. This can be particularly useful for businesses or organizations with limited space for solar panel installations.</p>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.number}><span>3</span></div>
                            <p>Solar panel carports can also help protect vehicles from the elements, just like a regular carport. In addition, the shade provided by the solar panels can help keep the interior of the car cooler, reducing the need for air conditioning and saving on fuel costs.</p>
                        </div>
                    </div>
                    <div className={styles.carport}>
                        <div className={styles.imageHolder}>
                            <Image src={CPW1} alt={"CPW1"}/>
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
