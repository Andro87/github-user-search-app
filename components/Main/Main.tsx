import { useEffect, useRef, useState } from "react";

import styles from "./Main.module.css";

import Search from "svgr/icon-search.svg";

import { User } from "./User/User";

import UserData from "@/modal/UserData";

const getUserData = (username: string): Promise<UserData> => {
    return fetch(` https://api.github.com/users/${username}		`).then(res => {
        if (!res.ok) {
            throw Error("No results");
        }
        return res.json();
    });
};

export const Main: React.FunctionComponent = () => {
    const [userData, setUserData] = useState<UserData>();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error>();
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        getUserData("octocat")
            .then(data => {
                setUserData(data);
            })
            .catch(error => setError(error))
            .finally(() => setIsLoading(false));
    }, []);

    if (!userData) {
        return <p>No User...</p>;
    }

    if (isLoading) {
        return <p>Loading...</p>;
    }

    function handleSubmit() {
        setIsLoading(true);
        const value = inputRef.current?.value;

        if (typeof value !== "undefined") {
            getUserData(value)
                .then(data => setUserData(data))
                .catch(error => setError(error))
                .finally(() => setIsLoading(false));
        }
    }

    return (
        <main className={styles.main}>
            <form className={styles.search_bar} onSubmit={handleSubmit}>
                <Search />

                <input
                    type="text"
                    placeholder="Search GitHub username…"
                    ref={inputRef}
                    aria-label="search github username"
                />

                {error && (
                    <p className={styles.error_message}>{error.message}</p>
                )}

                <button title="search user" className={styles.search_btn}>
                    search
                </button>
            </form>

            <User user={userData} />
        </main>
    );
};
