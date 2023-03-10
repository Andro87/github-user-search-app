import { useEffect, useState } from "react";
import Head from "next/head";
import { Space_Mono } from "@next/font/google";
import styles from "@/styles/Home.module.css";

import { Header, Main } from "@/components";

const spaceMono = Space_Mono({
    weight: ["400", "700"],
    subsets: ["latin"]
});

export default function Home() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    function handleDarkMode() {
        setIsDarkMode(prevValue => !prevValue);
    }

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.dataset.theme = "dark";
        } else {
            delete document.documentElement.dataset.theme;
        }
    }, [isDarkMode]);
    return (
        <div className={`${styles.container} ${spaceMono.className}`}>
            <Head>
                <title>Frontend Mentor | GitHub user search app</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/assets/favicon-32x32.png" />
            </Head>

            <div className={styles.container_wrap}>
                <Header onTheme={handleDarkMode} isDarkMode={isDarkMode} />
                <Main />
            </div>
        </div>
    );
}
