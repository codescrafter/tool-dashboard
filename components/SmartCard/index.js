import React from "react";
import styles from "./SmartCard.module.scss";
import Image from "next/image";
import cashIcon from "../../public/cashIcon.png";
import clockIcon from "../../public/clockIcon.png";
import victoryIcon from "../../public/victoryIcon.png";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const SmartCard = ({ tilte, slug, tooltipContent }) => {
    const icons = {
        cashIcon: cashIcon,
        victoryIcon: victoryIcon,
        clockIcon: clockIcon,
    };
    return (
        <div className={styles.smartCardWrapper} id={slug}>
            <div className={styles.contentWrapper}>
                <div className={styles.imageBox}>
                    <div className={styles.imageWrapper}>
                        <Image src={icons[slug]} alt={tooltipContent}  />
                    </div>
                </div>
                <div className={styles.content}>
                    <p>{tilte}</p>
                </div>
            </div>
            <Tooltip
                anchorId={slug}
                content={tilte}
                place="top"
                className={styles.tooltipContentStyle}
            >
                <div>{tooltipContent}</div>
            </Tooltip>
        </div>
    );
};

export default SmartCard;
