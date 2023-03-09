import React, { useContext, useEffect } from "react";
import { MyContext } from "@/context/MainContext";
import { useRouter } from "next/router";
import { useTranslation } from 'next-i18next';
import style from './politics.module.scss'


const Politics = () => {

    const router = useRouter()
    const { t } = useTranslation()
    const { state, updateState } = useContext(MyContext);


    useEffect(() => {
        function handleRouteChange() {
            let location = window.location.pathname
            console.log(router.pathname)
            if (location.includes("/ru") || location.includes("lv"))
                location = location.slice(3)
            if (!location)
                location = "/"
            console.log(location)
            if (router.pathname !== location) {
                updateState({ politics: '' })
            }
        }

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router]);

    useEffect(() => {
        window.scrollTo(0,0);
    }, [state.politics])

    return (
        <>
            {state.politics &&
                <div className={style.politicsBlock + " wrapper"}>
                    <button className={style.exit} onClick={() => updateState({ politics: '' })}>
                        <svg width="100%" height="100%" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_2922_3191)">
                                <rect x="0" y="0" width="70" height="70" rx="10" fill="#4FAAFF"/>
                            </g>
                            <path transform="translate(-10 -6)" d="M33.2196 26.5224L30.5241 29.209C29.8253 29.9055 29.8253 31.0995 30.5241 31.8955L39.7088 41.0498L30.5241 50.204C29.8253 50.9005 29.8253 52.0945 30.5241 52.8906L33.1198 55.4776C33.8186 56.1741 35.0166 56.1741 35.8153 55.4776L45 46.3234L54.1847 55.4776C54.8835 56.1741 56.0815 56.1741 56.8802 55.4776L59.4759 52.8906C60.1747 52.194 60.1747 51 59.4759 50.204L50.2912 40.9502L59.4759 31.796C60.1747 31.0995 60.1747 29.9055 59.4759 29.1095L56.8802 26.5224C56.1814 25.8259 54.9834 25.8259 54.1847 26.5224L45 35.6766L35.8153 26.5224C35.1165 25.8259 33.9185 25.8259 33.2196 26.5224Z" fill="white"/>
                            <defs>
                                <filter id="filter0_d_2922_3191" x="0" y="0" width="90" height="90" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="4"/>
                                    <feGaussianBlur stdDeviation="5"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2922_3191"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2922_3191" result="shape"/>
                                </filter>
                            </defs>
                        </svg>
                    </button>
                    <h1>
                        {t(`politics:${state.politics}.title`)}
                    </h1>
                    <p className={style.text} dangerouslySetInnerHTML={{ __html: t(`politics:${state.politics}.text`) }}/>
                    <h3>SIA "EnergyPlus"</h3>
                </div>
            }
        </>
    )
}

export default Politics;
