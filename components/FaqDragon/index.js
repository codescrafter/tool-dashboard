import React from "react";
import { faqData } from "../../mock/data";
import styles from "../FaqDragon/FaqDragon.module.scss";
const FaqDragon = () => {
    return (
        <div className={styles.faqWrapper}>
            <h1 className={styles.title}>FAQ's</h1>
            <div className={styles.faqRow}>
                {faqData.map((item) => (
                    <div key={item.title} className={styles.faqCol}>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FaqDragon;
