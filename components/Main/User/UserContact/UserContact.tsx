import { ReactNode } from "react";
import styles from "./UserContact.module.css";

interface UserContactProps {
    icon: ReactNode;
    isLink?: boolean;
    contact: string;
    contactType?: string;
}

export const UserContact: React.FunctionComponent<UserContactProps> = props => {
    const { icon, isLink, contact, contactType } = props;

    function getLinkAddress(contact: string) {
        if (contactType === "twitter") {
            return `https://twitter.com/${contact}`;
        }
        if (contact && contactType === "company") {
            const companyAddress = contact.split("").slice(1).join("");
            return `https://github.com/${companyAddress}`;
        }

        return contact;
    }

    return (
        <div
            className={`${styles.contact_wrap} ${
                !contact && styles.contact_not_available
            }`}
        >
            <span>{icon}</span>
            {isLink ? (
                <a href={getLinkAddress(contact)}>
                    {contact ? contact : "Not Available"}
                </a>
            ) : (
                <p>{contact ? contact : "Not Available"}</p>
            )}
        </div>
    );
};
