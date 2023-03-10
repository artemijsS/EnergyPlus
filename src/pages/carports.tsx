import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MainContainer from "@/components/MainContainer"
import ContactUs from "@/components/common/ContactUs"
import { useTranslation } from "next-i18next";
import Image from "next/image";
import styles from '@/styles/pagesStyles/carports.module.scss';

import mainCarports from '@/assets/carports/mainCarports.png';
import { CPW1, CPU1, CPU2, CPE, CPW2, CPED, CPPT, CPPL, CPPY } from '@/assets/carports';



export default function Carports() {

    const { t } = useTranslation();

    return (
        <MainContainer
            title={t("carports:seo.title") || "EnergyPlus | Carports"}
            description={t("carports:seo.description") || "EnergyPlus Carports..."}
            keywords={t("carports:seo.keywords") || "energyplus, carport, carport buy, carport solar panel, carports"}
        >
            <div className={styles.mainBlock}>
                <Image src={mainCarports} alt={"mainHome"} className={styles.mainImage} priority={true} />
                <div className={styles.textBlock}>
                    <div className={"wrapper"} style={{position: "relative"}}>
                        <div className={styles.text}>
                            <h1 dangerouslySetInnerHTML={{__html: t("carports:main.h1")}} />
                            <h4>{t("carports:main.h4")}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <section className={"wrapper overFlowHidden " + styles.section}>
                <h2 dangerouslySetInnerHTML={{ __html: t("carports:info.title") }}/>
                <div className={styles.important + " " + styles.carportPage}>
                    <div className={styles.steps}>
                        <div className={styles.step}>
                            <div className={styles.number}><span>1</span></div>
                            <p>{t("carports:info._1")}</p>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.number}><span>2</span></div>
                            <p>{t("carports:info._2")}</p>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.number}><span>3</span></div>
                            <p>{t("carports:info._3")}</p>
                        </div>
                    </div>
                    <div className={styles.carport}>
                        <div className={styles.imageHolder}>
                            <Image src={CPW1} alt={"CPW1"}/>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.section}>
                <h2 className={"wrapper"} dangerouslySetInnerHTML={{ __html: t("carports:carports.title") }} />
                <div className={styles.title}>
                    <h3 className={"wrapper"}>{t("carports:carports.forHome")}</h3>
                </div>
                <div className={styles.section + " wrapper " + styles.carports}>
                    <div className={styles.carport}>
                        <div className={styles.image}>
                            <Image src={CPU1} alt={"CPU1"} />
                        </div>
                        <div className={styles.info}>
                            <h2>CPU-1</h2>
                            <div className={styles.blocks}>
                                <div className={styles.line}>
                                    <div className={styles.block}>
                                        <p>{t("carports:carports.material")}</p>
                                        <p>{t("carports:carports.steel")}</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>{t("carports:carports.coating")}</p>
                                        <p>{t("carports:carports.gal")}</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>{t("carports:carports.warranty")}</p>
                                        <p>{t("carports:carports.war")}</p>
                                    </div>
                                </div>
                                <div className={styles.line}>
                                    <div className={styles.block}>
                                        <p>{t("carports:carports.options")}</p>
                                        <p>{t("carports:carports.optionsV1")}</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>{t("carports:carports.price")}</p>
                                        <p>{t("carports:carports.from")} 1200 €</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.carport}>
                        <div className={styles.image}>
                            <Image src={CPU2} alt={"CPU2"} />
                        </div>
                        <div className={styles.info}>
                            <h2>CPU-2</h2>
                            <div className={styles.blocks}>
                                <div className={styles.line}>
                                    <div className={styles.block}>
                                        <p>{t("carports:carports.material")}</p>
                                        <p>{t("carports:carports.steel")}</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>{t("carports:carports.coating")}</p>
                                        <p>{t("carports:carports.gal")}</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>{t("carports:carports.warranty")}</p>
                                        <p>{t("carports:carports.war")}</p>
                                    </div>
                                </div>
                                <div className={styles.line}>
                                    <div className={styles.block}>
                                        <p>{t("carports:carports.options")}</p>
                                        <p>{t("carports:carports.optionsV1")}</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>{t("carports:carports.price")}</p>
                                        <p>{t("carports:carports.from")} 2800 €</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.carport}>
                        <div className={styles.image}>
                            <Image src={CPE} alt={"CPE"} />
                        </div>
                        <div className={styles.info}>
                            <h2>CPE</h2>
                            <div className={styles.blocks}>
                                <div className={styles.line}>
                                    <div className={styles.block}>
                                        <p>{t("carports:carports.material")}</p>
                                        <p>{t("carports:carports.steel")}</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>{t("carports:carports.coating")}</p>
                                        <p>{t("carports:carports.gal")}</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>{t("carports:carports.warranty")}</p>
                                        <p>{t("carports:carports.war")}</p>
                                    </div>
                                </div>
                                <div className={styles.line}>
                                    <div className={styles.block}>
                                        <p>{t("carports:carports.options")}</p>
                                        <p>{t("carports:carports.optionsV2")}</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>{t("carports:carports.price")}</p>
                                        <p>{t("carports:carports.from")} 1150 €</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.carport}>
                        <div className={styles.image}>
                            <Image src={CPW1} alt={"CPW1"} />
                        </div>
                        <div className={styles.info}>
                            <h2>CPW-1</h2>
                            <div className={styles.blocks}>
                                <div className={styles.blocks}>
                                    <div className={styles.line}>
                                        <div className={styles.block}>
                                            <p>{t("carports:carports.material")}</p>
                                            <p>{t("carports:carports.steel")}</p>
                                        </div>
                                        <div className={styles.block}>
                                            <p>{t("carports:carports.coating")}</p>
                                            <p>{t("carports:carports.gal")}</p>
                                        </div>
                                        <div className={styles.block}>
                                            <p>{t("carports:carports.warranty")}</p>
                                            <p>{t("carports:carports.war")}</p>
                                        </div>
                                    </div>
                                    <div className={styles.line}>
                                        <div className={styles.block}>
                                            <p>{t("carports:carports.options")}</p>
                                            <p>{t("carports:carports.optionsV1")}</p>
                                        </div>
                                        <div className={styles.block}>
                                            <p>{t("carports:carports.price")}</p>
                                            <p>{t("carports:carports.from")} 1500 €</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.carport}>
                        <div className={styles.image}>
                            <Image src={CPW2} alt={"CPW2"} />
                        </div>
                        <div className={styles.info}>
                            <h2>CPW-2</h2>
                            <div className={styles.blocks}>
                                <div className={styles.blocks}>
                                    <div className={styles.line}>
                                        <div className={styles.block}>
                                            <p>{t("carports:carports.material")}</p>
                                            <p>{t("carports:carports.steel")}</p>
                                        </div>
                                        <div className={styles.block}>
                                            <p>{t("carports:carports.coating")}</p>
                                            <p>{t("carports:carports.gal")}</p>
                                        </div>
                                        <div className={styles.block}>
                                            <p>{t("carports:carports.warranty")}</p>
                                            <p>{t("carports:carports.war")}</p>
                                        </div>
                                    </div>
                                    <div className={styles.line}>
                                        <div className={styles.block}>
                                            <p>{t("carports:carports.options")}</p>
                                            <p>{t("carports:carports.optionsV1")}</p>
                                        </div>
                                        <div className={styles.block}>
                                            <p>{t("carports:carports.price")}</p>
                                            <p>{t("carports:carports.from")} 2650 €</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.carport}>
                        <div className={styles.image}>
                            <Image src={CPED} alt={"CPED"} />
                        </div>
                        <div className={styles.info}>
                            <h2>CPED</h2>
                            <div className={styles.blocks}>
                                <div className={styles.blocks}>
                                    <div className={styles.line}>
                                        <div className={styles.block}>
                                            <p>{t("carports:carports.material")}</p>
                                            <p>{t("carports:carports.steel")}</p>
                                        </div>
                                        <div className={styles.block}>
                                            <p>{t("carports:carports.coating")}</p>
                                            <p>{t("carports:carports.gal")}</p>
                                        </div>
                                        <div className={styles.block}>
                                            <p>{t("carports:carports.warranty")}</p>
                                            <p>{t("carports:carports.war")}</p>
                                        </div>
                                    </div>
                                    <div className={styles.line}>
                                        <div className={styles.block}>
                                            <p>{t("carports:carports.options")}</p>
                                            <p>{t("carports:carports.optionsV3")}</p>
                                        </div>
                                        <div className={styles.block}>
                                            <p>{t("carports:carports.price")}</p>
                                            <p>{t("carports:carports.from")} 6420 €</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.title}>
                    <h3 className={"wrapper"}>{t("carports:carports.forBig")}</h3>
                </div>
                <div className={styles.section + " wrapper " + styles.carports}>
                    <div className={styles.carport}>
                        <div className={styles.image}>
                            <Image src={CPPT} alt={"CPPT"} />
                        </div>
                        <div className={styles.info}>
                            <h2>CPPT</h2>
                            <div className={styles.blocks}>
                                <div className={styles.line}>
                                    <div className={styles.block}>
                                        <p>{t("carports:carports.material")}</p>
                                        <p>{t("carports:carports.steel")}</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>{t("carports:carports.coating")}</p>
                                        <p>{t("carports:carports.gal")}</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>{t("carports:carports.warranty")}</p>
                                        <p>{t("carports:carports.war")}</p>
                                    </div>
                                </div>
                                <div className={styles.line}>
                                    <div className={styles.block}>
                                        <p>{t("carports:carports.options")}</p>
                                        <p>{t("carports:carports.optionsV1")}</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>{t("carports:carports.price")}</p>
                                        <p>{t("carports:carports.request")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.carport}>
                        <div className={styles.image}>
                            <Image src={CPPL} alt={"CPPL"} />
                        </div>
                        <div className={styles.info}>
                            <h2>CPPL</h2>
                            <div className={styles.blocks}>
                                <div className={styles.line}>
                                    <div className={styles.block}>
                                        <p>{t("carports:carports.material")}</p>
                                        <p>{t("carports:carports.steel")}</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>{t("carports:carports.coating")}</p>
                                        <p>{t("carports:carports.gal")}</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>{t("carports:carports.warranty")}</p>
                                        <p>{t("carports:carports.war")}</p>
                                    </div>
                                </div>
                                <div className={styles.line}>
                                    <div className={styles.block}>
                                        <p>{t("carports:carports.options")}</p>
                                        <p>{t("carports:carports.optionsV1")}</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>{t("carports:carports.price")}</p>
                                        <p>{t("carports:carports.request")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.carport + " " + styles.noMargin}>
                        <div className={styles.image}>
                            <Image src={CPPY} alt={"CPPY"} />
                        </div>
                        <div className={styles.info}>
                            <h2>CPPY</h2>
                            <div className={styles.blocks}>
                                <div className={styles.line}>
                                    <div className={styles.block}>
                                        <p>{t("carports:carports.material")}</p>
                                        <p>{t("carports:carports.steel")}</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>{t("carports:carports.coating")}</p>
                                        <p>{t("carports:carports.gal")}</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>{t("carports:carports.warranty")}</p>
                                        <p>{t("carports:carports.war")}</p>
                                    </div>
                                </div>
                                <div className={styles.line}>
                                    <div className={styles.block}>
                                        <p>{t("carports:carports.options")}</p>
                                        <p>{t("carports:carports.optionsV1")}</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>{t("carports:carports.price")}</p>
                                        <p>{t("carports:carports.request")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ContactUs />
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
