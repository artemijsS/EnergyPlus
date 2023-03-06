import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MainContainer from "@/components/MainContainer"
import {useTranslation} from "next-i18next";

export default function Home() {

    const { t } = useTranslation();

    return (
        <MainContainer
            title={t("home:seo.title") || "EnergyPlus"}
            description={t("home:seo.description") || "EnergyPlus..."}
            keywords={t("home:seo.keywords") || "energyplus, solar panels, carport, solar panel cleaning, carports"}
        >
            <h1>home</h1>
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
