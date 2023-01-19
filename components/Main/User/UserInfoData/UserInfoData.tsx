import styles from "./UserInfoData.module.css";

interface UserInfoData {
    readonly headerInfo: string;
    readonly infoData: number;
}

export const UserInfoData: React.FunctionComponent<UserInfoData> = props => {
    const { headerInfo, infoData } = props;
    return (
        <div className={styles.data_info}>
            <h2>{headerInfo}</h2>
            <p>{infoData}</p>
        </div>
    );
};
