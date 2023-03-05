import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MainContainer from "@/components/MainContainer"
import {useTranslation} from "next-i18next";

export default function Cleaning() {

    const { t } = useTranslation();

    return (
        <MainContainer
            title={t("cleaning:seo.title") || "EnergyPlus | Cleaning"}
            description={t("cleaning:seo.description") || "EnergyPlus Cleaning..."}
        >
            <h1>cleaning</h1>
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
