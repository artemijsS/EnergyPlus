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
            <section className={styles.section}>
                <h2 className={"wrapper"}>We are <span>installing & selling</span><br/>carports</h2>
                <div className={styles.title}>
                    <h3 className={"wrapper"}>Carport models for your home and office</h3>
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
                                        <p>Material</p>
                                        <p>S350 high-strength structural steel</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>Anti-corrosion coating:</p>
                                        <p>Galvanised</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>Warranty:</p>
                                        <p>15 years for the structure and 5 years for the coating.</p>
                                    </div>
                                </div>
                                <div className={styles.line}>
                                    <div className={styles.block}>
                                        <p>Additional options:</p>
                                        <p>Inverter mount, Leak-proof roof, Foundations, RAL colour, Modular layout, Cut-out in the masking plate the inscription – logo</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>Price:</p>
                                        <p>1200 $</p>
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
                                        <p>Material</p>
                                        <p>S350 high-strength structural steel</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>Anti-corrosion coating:</p>
                                        <p>Galvanised</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>Warranty:</p>
                                        <p>15 years for the structure and 5 years for the coating.</p>
                                    </div>
                                </div>
                                <div className={styles.line}>
                                    <div className={styles.block}>
                                        <p>Additional options:</p>
                                        <p>Inverter mount, Leak-proof roof, Foundations, RAL colour, Modular layout, Cut-out in the masking plate the inscription – logo</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>Price:</p>
                                        <p>1200 $</p>
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
                                        <p>Material</p>
                                        <p>S350 high-strength structural steel</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>Anti-corrosion coating:</p>
                                        <p>Galvanised</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>Warranty:</p>
                                        <p>15 years for the structure and 5 years for the coating.</p>
                                    </div>
                                </div>
                                <div className={styles.line}>
                                    <div className={styles.block}>
                                        <p>Additional options:</p>
                                        <p>Inverter mount, Leak-proof roof, Foundations, RAL colour, Modular layout, Cut-out in the masking plate the inscription – logo</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>Price:</p>
                                        <p>1200 $</p>
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
                                <div className={styles.line}>
                                    <div className={styles.block}>
                                        <p>Material</p>
                                        <p>S350 high-strength structural steel</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>Anti-corrosion coating:</p>
                                        <p>Galvanised</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>Warranty:</p>
                                        <p>15 years for the structure and 5 years for the coating.</p>
                                    </div>
                                </div>
                                <div className={styles.line}>
                                    <div className={styles.block}>
                                        <p>Additional options:</p>
                                        <p>Inverter mount, Leak-proof roof, Foundations, RAL colour, Modular layout, Cut-out in the masking plate the inscription – logo</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>Price:</p>
                                        <p>1200 $</p>
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
                                <div className={styles.line}>
                                    <div className={styles.block}>
                                        <p>Material</p>
                                        <p>S350 high-strength structural steel</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>Anti-corrosion coating:</p>
                                        <p>Galvanised</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>Warranty:</p>
                                        <p>15 years for the structure and 5 years for the coating.</p>
                                    </div>
                                </div>
                                <div className={styles.line}>
                                    <div className={styles.block}>
                                        <p>Additional options:</p>
                                        <p>Inverter mount, Leak-proof roof, Foundations, RAL colour, Modular layout, Cut-out in the masking plate the inscription – logo</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>Price:</p>
                                        <p>1200 $</p>
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
                                <div className={styles.line}>
                                    <div className={styles.block}>
                                        <p>Material</p>
                                        <p>S350 high-strength structural steel</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>Anti-corrosion coating:</p>
                                        <p>Galvanised</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>Warranty:</p>
                                        <p>15 years for the structure and 5 years for the coating.</p>
                                    </div>
                                </div>
                                <div className={styles.line}>
                                    <div className={styles.block}>
                                        <p>Additional options:</p>
                                        <p>Inverter mount, Leak-proof roof, Foundations, RAL colour, Modular layout, Cut-out in the masking plate the inscription – logo</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>Price:</p>
                                        <p>1200 $</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.title}>
                    <h3 className={"wrapper"}>Carport models for big parkings</h3>
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
                                        <p>Material</p>
                                        <p>S350 high-strength structural steel</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>Anti-corrosion coating:</p>
                                        <p>Galvanised</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>Warranty:</p>
                                        <p>15 years for the structure and 5 years for the coating.</p>
                                    </div>
                                </div>
                                <div className={styles.line}>
                                    <div className={styles.block}>
                                        <p>Additional options:</p>
                                        <p>Inverter mount, Leak-proof roof, Foundations, RAL colour, Modular layout, Cut-out in the masking plate the inscription – logo</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>Price:</p>
                                        <p>1200 $</p>
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
                                        <p>Material</p>
                                        <p>S350 high-strength structural steel</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>Anti-corrosion coating:</p>
                                        <p>Galvanised</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>Warranty:</p>
                                        <p>15 years for the structure and 5 years for the coating.</p>
                                    </div>
                                </div>
                                <div className={styles.line}>
                                    <div className={styles.block}>
                                        <p>Additional options:</p>
                                        <p>Inverter mount, Leak-proof roof, Foundations, RAL colour, Modular layout, Cut-out in the masking plate the inscription – logo</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>Price:</p>
                                        <p>1200 $</p>
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
                                        <p>Material</p>
                                        <p>S350 high-strength structural steel</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>Anti-corrosion coating:</p>
                                        <p>Galvanised</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>Warranty:</p>
                                        <p>15 years for the structure and 5 years for the coating.</p>
                                    </div>
                                </div>
                                <div className={styles.line}>
                                    <div className={styles.block}>
                                        <p>Additional options:</p>
                                        <p>Inverter mount, Leak-proof roof, Foundations, RAL colour, Modular layout, Cut-out in the masking plate the inscription – logo</p>
                                    </div>
                                    <div className={styles.block}>
                                        <p>Price:</p>
                                        <p>1200 $</p>
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
