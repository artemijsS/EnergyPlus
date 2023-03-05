import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from 'next-i18next';
import MainContainer from "@/components/MainContainer"

export default function Contacts() {

    const { t } = useTranslation();

    return (
        <MainContainer
            title={t("contacts:seo.title") || "EnergyPlus | Cleaning"}
            description={t("contacts:seo.description") || "EnergyPlus Contacts..."}
        >
            <h1>{t("header:contacts")}</h1>
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
