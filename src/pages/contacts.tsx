import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from 'next-i18next';
import MainContainer from "@/components/MainContainer"
import styles from '@/styles/pagesStyles/contacts.module.scss';
import Link from "next/link";

export default function Contacts() {

    const { t } = useTranslation();

    return (
        <MainContainer
            title={t("contacts:seo.title") || "EnergyPlus | Cleaning"}
            description={t("contacts:seo.description") || "EnergyPlus Contacts..."}
            keywords={t("contacts:seo.keywords") || "energyplus, energyplus contacts, carport, solar panel cleaning, carports, solar panels"}
        >
            <section className={"wrapper " + styles.contactsSection}>
                <h2>{t("contacts:section1.title")}</h2>
                <div className={styles.contactBlock}>
                    <div className={styles.info}>
                        <div className={styles.title}>
                            <p>{t("contacts:section1.email")}</p>
                            <p>{t("contacts:section1.phone")}</p>
                            <p>{t("contacts:section1.name")}</p>
                            <p>SEPA:</p>
                            <p>{t("contacts:section1.reg")}</p>
                            <p>{t("contacts:section1.address")}</p>
                        </div>
                        <div className={styles.data}>
                            <p><Link href={"mailto:info@energyplus.lv"}>info@energyplus.lv</Link></p>
                            <p>+371 26322465</p>
                            <p>SIA "EnergyPlus"</p>
                            <p>LV50ZZZ40203433692</p>
                            <p>40203433692</p>
                            <p>Teraudlietuves iela 22,<br/>Riga, Latvia</p>
                        </div>
                    </div>
                    <div className={styles.image}>
                        <div className={styles.imageHolder}/>
                        <div className={styles.text}>
                            <h5>{t("contacts:section1.text.h5")}</h5>
                            <p>{t("contacts:section1.text.p")}</p>
                            <h6>{t("contacts:section1.text.h6")}</h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className={"wrapper " + styles.contactsSection}>
                <h2>Feel Free to Contact & Reach Us</h2>
                <form className={styles.form}>
                    <div className={styles.row}>
                        <div className={styles.input}>
                            <label htmlFor="name">Name / Surname*</label>
                            <input type="text" id={"name"} placeholder={"Your Name / Surname"}/>
                        </div>
                        <div className={styles.input}>
                            <label htmlFor="phone">Phone</label>
                            <input type="number" id={"phone"} placeholder={"Your Phone Number"}/>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.input}>
                            <label htmlFor="email">Email*</label>
                            <input type="email" id={"email"} placeholder={"Your email"}/>
                        </div>
                        <div className={styles.input}>
                            <label htmlFor="category">Category*</label>
                            <div className={styles.select}>
                                <select id="category" name="category" defaultValue={""}>
                                    <option value="" disabled selected>Select Category</option>
                                    <option value="solarPanels">Solar Panels</option>
                                    <option value="carports">Carports</option>
                                    <option value="cleaning">Cleaning</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className={styles.row}></div>
                    <div className={styles.row}></div>
                </form>
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
