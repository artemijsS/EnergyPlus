import React from "react";
import { useTranslation } from 'next-i18next';
import style from './contactUs.module.scss'
import Link from "next/link";


const ContactUs = () => {

    const { t } = useTranslation()


    return (
        <section className={style.contactUs}>
            <div className={"wrapper " + style.block}>
                <h3 dangerouslySetInnerHTML={{ __html: t("contacts:contactUs.title") || "Need consultation?"}} />
                <Link href={"/contacts#contact"}>{t("contacts:contactUs.button")}</Link>
            </div>
        </section>
    )
}

// @ts-ignore
export default ContactUs;
// @ts-ignore
