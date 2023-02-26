import React from "react";
import styles from "../ClientDragon/ClientDragon.module.scss";
import Image from "next/image";
import client from "../../public/client.png";
import { card } from "../../mock/data";
import userIcon from "../../public/user.png";
import primaryInvertedCommas from "../../public/semicolun.png";
import secondaryInvertedCommas from "../../public/blackInvertedCommas.png";

const index = () => {
    return (
        <div className={styles.clientWrapper}>
            <div className={styles.title}>
                <div className={styles.imageWrapper}>
                    <Image src={client} className={styles.image} alt="client" />
                </div>
                <h1>Happy Clients</h1>
            </div>
            <div className={styles.cardWrap}>
                {card.map((x, i) => (
                    <div key={i} className={styles.card}>
                        <div className={styles.commentWrapper}>
                            {i % 2 == 0 ? (
                                <Image src={primaryInvertedCommas} alt="dragon happy clients" />
                            ) : (
                                <Image src={secondaryInvertedCommas} alt="dragon happy clients" />
                            )}

                            <p className={styles.comment}>{x.detail}</p>
                        </div>
                        <div className={styles.clientDetails}>
                            <div className={styles.imageWrapper}>
                                <Image src={userIcon} className={styles.image} alt="user" />
                            </div>
                            <div className={styles.clientName}>
                                <h1>{x.name}</h1>
                                <p>{x.designer}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default index;
