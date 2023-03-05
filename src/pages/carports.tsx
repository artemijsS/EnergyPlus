import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MainContainer from "@/components/MainContainer"
import {useTranslation} from "next-i18next";

export default function Carports() {

    const { t } = useTranslation();

    return (
        <MainContainer
            title={t("carports:seo.title") || "EnergyPlus | Carports"}
            description={t("carports:seo.description") || "EnergyPlus Carports..."}
        >
            <h1>carports</h1>
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
