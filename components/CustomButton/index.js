import React from "react";
import styles from "./CustomButton.module.scss";

const CustomButton = ({ children, onClick, type, className }) => {
    return (
        <button
            className={`${styles.customButton} ${className}`}
            type={type ? type : "button"}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default CustomButton;
