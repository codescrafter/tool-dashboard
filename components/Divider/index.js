import React from "react";
import styles from "../Divider/Divider.module.scss";
import Image from "next/image";
import slider from "../../public/slider.png";
const Divider = () => {
  return (
    <div className={styles.Divider}>
      <div className={styles.imageWrapper}>
        <Image src={slider} className={styles.wrapper} alt="slider"/>
      </div>
    </div>
  );
};

export default Divider;
