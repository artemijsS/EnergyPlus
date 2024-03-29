import React, { useContext } from "react";
import { MyContext } from "@/context/MainContext";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Politics from "./polititcs/Politics";
import CookieNotify from "./cookieNotify/CookieNotify";
import styles from '@/styles/global.module.scss';

interface MainContainer {
    children?: React.ReactNode,
    title?: string,
    description?: string,
    keywords?: string
}

const MainContainer = ({ children, title, description, keywords }: MainContainer) => {

    const { state } = useContext(MyContext);
    const router = useRouter()

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#FFF" />
                <meta name="author" content="energyplus" />
                {title && <title>{title}</title>}
                {description && <meta name="description" content={description} />}
                {keywords && <meta name="keywords" content={keywords} />}

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.energyplus.lv" />
                <meta property="og:img" content="https://www.energyplus.lv/icon_192.png" />
                {title && <meta property="og:title" content={title} />}
                {description && <meta property="og:description" content={description} />}

                <link rel="alternate" hrefLang="en" href={"https://www.energyplus.lv" + router.pathname}/>
                <link rel="alternate" hrefLang="lv" href={"https://www.energyplus.lv/lv" + router.pathname}/>
                <link rel="alternate" hrefLang="ru" href={"https://www.energyplus.lv/ru" + router.pathname}/>

            </Head>
            <CookieNotify />
            <Header />
            <div className={styles.mainBlock}>
                {state.politics ?
                    <Politics />
                    :
                    children
                }
            </div>
            <Footer />
        </>
    )
}

export default MainContainer;
