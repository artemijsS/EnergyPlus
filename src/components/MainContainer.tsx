import React from "react";
import Head from "next/head";
import Header from "./Header";

interface MainContainer {
    children?: React.ReactNode,
    title?: string,
    description?: string,
}

const MainContainer = ({ children, title, description }: MainContainer) => {
    return (
        <>
            <Head>
                {title && <title>{title}</title>}
                {description && <meta name="description" content={description} />}
            </Head>
            <Header />
            {children}
        </>
    )
}

export default MainContainer;
