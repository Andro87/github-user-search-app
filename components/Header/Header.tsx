import styles from "./Header.module.css";

import Moon from "svgr/icon-moon.svg";
import Sun from "svgr/icon-sun.svg";
import React from "react";

interface Props {
    readonly onTheme: () => void;
    readonly isDarkMode: boolean;
}

export const Header: React.FunctionComponent<Props> = props => {
    const { onTheme, isDarkMode } = props;
    const displayIcon = isDarkMode ? <Sun /> : <Moon />;
    return (
        <header className={styles.header}>
            <p className={styles.logo}>devfinder</p>

            <div className={styles.toggle_container} onClick={onTheme}>
                <p>{isDarkMode ? "light" : "dark"}</p>
                {displayIcon}
            </div>
        </header>
    );
};
