import React from "react";
import { useTranslation } from 'next-i18next';
import { useRouter } from "next/router";
import Cookies from 'js-cookie';
import Logo from '@/assets/logo/Logo';
import { Ru, Lv, En } from '@/assets/languages';
import style from '@/styles/header.module.scss'
import Link from "next/link";
import Image from "next/image";


const Header = () => {

    const router = useRouter()
    const { t, i18n } = useTranslation()
    
    return (
        <header className={style.headerContainer}>
            <div className={"wrapper " + style.header}>
                <div className={style.logo}>
                    <Logo/>
                </div>
                <nav className={style.nav}>
                    <Link href={"/"} className={style.link + " " + (router.pathname === "/" ? style.active : "")}>{t("header:home")}</Link>
                    <Link href={"/solar-panels"} className={style.link + " " + (router.pathname === "/solar-panels" ? style.active : "")}>{t("header:solarPanels")}</Link>
                    <Link href={"/carports"} className={style.link + " " + (router.pathname === "/carports" ? style.active : "")}>{t("header:carports")}</Link>
                    <Link href={"/cleaning"} className={style.link + " " + (router.pathname === "/cleaning" ? style.active : "")}>{t("header:cleaning")}</Link>
                    <Link href={"/contacts"} className={style.link + " " + (router.pathname === "/contacts" ? style.active : "")}>{t("header:contacts")}</Link>
                </nav>
                <div className={style.languages}>
                    <Link href={router.pathname} locale={"en"} style={{ display: i18n.language.includes("en") ? "none" : "block" }} onClick={() => Cookies.set('language', "en")}>
                        <Image src={En} alt={"EN"}/>
                    </Link>
                    <Link href={router.pathname} locale={"ru"} style={{ display: i18n.language.includes("ru") ? "none" : "block" }} onClick={() => Cookies.set('language', "ru")}>
                        <Image src={Ru} alt={"RU"}/>
                    </Link>
                    <Link href={router.pathname} locale={"lv"} style={{ display: i18n.language.includes("lv") ? "none" : "block" }} onClick={() => Cookies.set('language', "lv")}>
                        <Image src={Lv} alt={"LV"}/>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;
