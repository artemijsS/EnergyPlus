import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MainContainer from "@/components/MainContainer"
import {useTranslation} from "next-i18next";

export default function SolarPanels() {

    const { t } = useTranslation();

    return (
        <MainContainer
            title={t("solar-panels:seo.title") || "EnergyPlus | Solar Panels"}
            description={t("solar-panels:seo.description") || "EnergyPlus Solar Panels..."}
        >
            <h1>solar panel</h1>
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
