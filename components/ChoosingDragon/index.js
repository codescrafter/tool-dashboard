import Image from "next/image";
import React from "react";
import styles from "../ChoosingDragon/ChoosingDragon.module.scss";
import choosingDragonImage from "../../public/choosing.png";
import SmartCard from "../SmartCard";

const ChoosingDragon = () => {
    return (
        <div className={styles.choosingDragonSection}>
            <div className={styles.titleBox}>
                <h1>Why Choosing us ?</h1>
                <p>What Makes us Best !</p>
            </div>
            <div className={styles.choosingDragonWraper}>
                <div className={styles.imageBackgroundWrapper}>
                    <div className={styles.cashCardWrapper}>
                        <SmartCard
                            tilte={"Easy To Pay"}
                            slug={"cashIcon"}
                            tooltipContent={
                                "Our Team Experts are Always Ready to Assist Our Users with best possible solution of any queries."
                            }
                        />
                    </div>
                    <div className={styles.victoryCardWrapper}>
                        <SmartCard
                            tilte={"Best Uptime"}
                            slug={"victoryIcon"}
                            tooltipContent={
                                "Our Team Experts are Always Ready to Assist Our Users with best possible solution of any queries."
                            }
                        />
                    </div>
                    <div className={styles.clockCardWrapper}>
                        <SmartCard
                            tilte={"The Best Support"}
                            slug={"clockIcon"}
                            tooltipContent={
                                "Our Team Experts are Always Ready to Assist Our Users with best possible solution of any queries."
                            }
                        />
                    </div>
                    <div className={styles.imageBackground}></div>
                    <div className={styles.imageWrapper}>
                        <Image src={choosingDragonImage} alt="choose dragon" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChoosingDragon;
