import React, { FormEvent, useState, useRef } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from 'next-i18next';
import MainContainer from "@/components/MainContainer"
import styles from '@/styles/pagesStyles/contacts.module.scss';
import Link from "next/link";
import emailjs from '@emailjs/browser';

interface Contacts {
    emailJSPublic: string
}

export default function Contacts({ emailJSPublic }: Contacts) {

    const { t } = useTranslation();
    const [formStatus, setFormStatus] = useState<String>("button");
    const buttonRef = useRef<HTMLButtonElement>(null)
    const formRef = useRef<HTMLFormElement>(null)

    const loading = () => {
        setFormStatus("buttonLoading");
    }
    const sent = () => {
        setFormStatus("buttonSend");
        if (buttonRef.current) {
            buttonRef.current.classList.add(styles.buttonSent)
            buttonRef.current.disabled = true
        }
    }
    const error = () => {
        if (buttonRef.current) {
            setFormStatus("buttonError")
            buttonRef.current.disabled = true
        }
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formRef.current) return;

        loading();

        emailjs.sendForm('service_ldtnsfx', 'template_hmmlcrn', formRef.current, emailJSPublic)
        .then((_res) => {
            sent();
        }, (_err) => {
            error();
        });
    }


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
                            <p>{t("contacts:section1.phone")}<br/><br/></p>
                            <p>{t("contacts:section1.name")}</p>
                            <p>SEPA:</p>
                            <p>{t("contacts:section1.reg")}</p>
                            <p>{t("contacts:section1.address")}</p>
                        </div>
                        <div className={styles.data}>
                            <p><Link href={"mailto:info@energyplus.lv"}>info@energyplus.lv</Link></p>
                            <p>+371 26322465<br/>+371 22331502</p>
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
                <h2>{t("contacts:form.title")}</h2>
                <form ref={formRef} onSubmit={e => onSubmit(e)} className={styles.form}>
                    <div className={styles.row}>
                        <div className={styles.input}>
                            <label htmlFor="name">{t("contacts:form.name")}</label>
                            <input type="text" id={"name"} name={"name"} placeholder={t("contacts:form.namePlaceholder") || "Your Name / Surname"} required={true}/>
                        </div>
                        <div className={styles.input}>
                            <label htmlFor="phone">{t("contacts:form.phone")}</label>
                            <input type="number" name={"phone"} id={"phone"} placeholder={t("contacts:form.phonePlaceholder") || "Your Phone Number"}/>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.input}>
                            <label htmlFor="email">{t("contacts:form.email")}</label>
                            <input type="email" name={"email"} id={"email"} placeholder={t("contacts:form.emailPlaceholder") || "Your email"} required={true}/>
                        </div>
                        <div className={styles.input}>
                            <label htmlFor="category">{t("contacts:form.category")}</label>
                            <div className={styles.select}>
                                <select id="category" name="category" defaultValue={""} required={true}>
                                    <option value="" disabled>{t("contacts:form.categoryPlaceholder")}</option>
                                    <option value="solarPanels">{t("contacts:form.categorySolar")}</option>
                                    <option value="carports">{t("contacts:form.categoryCarports")}</option>
                                    <option value="cleaning">{t("contacts:form.categoryCleaning")}</option>
                                    <option value="other">{t("contacts:form.categoryOther")}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.input}>
                            <label htmlFor="message">{t("contacts:form.message")}</label>
                            <textarea name="message" id="message" placeholder={t("contacts:form.messagePlaceholder") || "Let us know about your project"} required={true} />
                        </div>
                    </div>
                    <div className={styles.rowButton}>
                        <button type={"submit"} ref={buttonRef}>{t(`contacts:form.${formStatus}`)}</button>
                    </div>
                </form>
            </section>

        </MainContainer>
    )
}

export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale)),
            emailJSPublic: process.env.EMAIL_JS_PUBLIC
        },
    };
}
