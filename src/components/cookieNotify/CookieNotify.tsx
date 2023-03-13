import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './cookieNotify.module.scss';

function CookieNotify(): JSX.Element {

    const { t } = useTranslation();

    const [cookieStatus, setCookieStatus] = useState<Boolean>(true);

    useEffect(() => {
        if (localStorage.getItem("cookieStatus") !== "true") {
            scrollSet(false);
            setCookieStatus(false);
        }
    }, [])

    const scrollSet = (toggle: Boolean) => {
        if (toggle) {
            document.documentElement.style.scrollBehavior = "smooth"
            window.onscroll = function() {};
        } else {
            document.documentElement.style.scrollBehavior = "unset"
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            window.onscroll = function() {
                window.scrollTo(scrollLeft, scrollTop);
            };
        }
    }

    const onAgreeClick = () => {
        localStorage.setItem("cookieStatus", "true");
        scrollSet(true);
        setCookieStatus(true);
    }

    return (
        <>
            {!cookieStatus &&
            <div className={"all-screen " + styles.cookie}>
                <div className={styles.cookieBlock}>
                    <div className={styles.heading}>
                        <h3>{t("cookieNotify:title")}</h3>
                    </div>
                    <p>{t("cookieNotify:text")}</p>
                    <button onClick={onAgreeClick}>{t("cookieNotify:agree")}</button>
                </div>
            </div>
            }
        </>
    )
}

export default CookieNotify;
