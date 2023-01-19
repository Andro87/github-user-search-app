import React from "react";
import styles from "./User.module.css";

import Location from "svgr/icon-location.svg";
import Website from "svgr/icon-website.svg";
import Twitter from "svgr/icon-twitter.svg";
import Company from "svgr/icon-company.svg";

import UserData from "@/modal/UserData";

import { getDate } from "@/utils/getDate";
import { UserContact, UserInfoData } from "./index";

interface Props {
    readonly user: UserData;
}

export const User = (props: Props) => {
    const { user } = props;
    return (
        <div className={styles.user_container}>
            <img src={user.avatar_url} alt="" className={styles.user_avatar} />

            <div className={styles.user_info}>
                <h1>{user.name ? user.name : user.login}</h1>
                <span>@{user.login}</span>

                <p> Join {getDate(user.created_at)}</p>
            </div>

            <p
                className={`${styles.user_bio} ${
                    !user.bio && styles.no_user_bio
                }`}
            >
                {user.bio ? user.bio : "This profile has no bio"}
            </p>

            <div className={styles.user_data}>
                <UserInfoData headerInfo="repos" infoData={user.public_repos} />

                <UserInfoData
                    headerInfo="followers"
                    infoData={user.followers}
                />

                <UserInfoData
                    headerInfo="following"
                    infoData={user.following}
                />
            </div>

            <div className={styles.user_contacts}>
                <div className={styles.wrapper}>
                    <UserContact icon={<Location />} contact={user.location} />

                    <UserContact
                        icon={<Website />}
                        contact={user.blog}
                        isLink={true}
                    />
                </div>

                <div className={styles.wrapper}>
                    <UserContact
                        icon={<Twitter />}
                        contact={user.twitter_username}
                        isLink={true}
                        contactType="twitter"
                    />

                    <UserContact
                        icon={<Company />}
                        contact={user.company}
                        isLink={true}
                        contactType="company"
                    />
                </div>
            </div>
        </div>
    );
};
