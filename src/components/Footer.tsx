import React, { useState, useEffect, useContext } from "react";
import { MyContext } from "@/context/MainContext";
import { useTranslation } from 'next-i18next';
import Instagram  from '@/assets/socials/instagram';
import style from '@/styles/footer.module.scss'


const Footer = () => {

    const { t } = useTranslation()
    const { updateState } = useContext(MyContext);

    const [year, setYear] = useState<string>("2023");

    useEffect(() => {
        setYear(new Date().getFullYear().toString());
    }, [])


    return (
        <footer className={style.footerContainer}>
            <div className={"wrapper " + style.footer}>
                <a href={"https://www.instagram.com/energyplus.lv/"} target="_blank" rel="noreferrer" className={style.insta}>
                    <Instagram />
                </a>
                <div className={style.mail}>
                    <a href="mailto:info@energyplus.lv">info@energyplus.lv</a>
                </div>
                <div className={style.terms}>
                    <button onClick={() => updateState({ politics: "privacy" })}>{t("footer:privacy")}</button>
                    <button onClick={() => updateState({ politics: "userAg" })}>{t("footer:userAg")}</button>
                    <button onClick={() => updateState({ politics: "cookie" })}>{t("footer:cookie")}</button>
                </div>
                <div className={style.copyright}>
                    © {year} SIA “EnergyPlus”. All rights are reserved
                </div>
            </div>
        </footer>
    )
}

export default Footer;
