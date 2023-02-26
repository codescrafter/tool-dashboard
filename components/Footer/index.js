import React from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";
import dragonWhiteLogo from "../../public/dragonWhiteLogo.png";
import facebook from "../../public/facebook.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import dragonPanda from "../../public/dragonPanda.png";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.imageWrapper}>
        <Image src={dragonWhiteLogo} className={styles.wrapper} alt="dragon-logo"/>
      </div>
      <div className={styles.dragonFooter}>
        <p>Home</p>
        <p>Privacy Policy</p>
        <p>Refund Policy</p>
        <p>E2EE Policy</p>
      </div>
      <div className={styles.dragonIcon}>
        <FaFacebookSquare className={styles.socialIcon} />
        <AiOutlineInstagram className={styles.socialIcon} />
        <AiOutlineTwitter className={styles.socialIcon} />
      </div>
      <div className={styles.footerImageWrapper}>
        <div className={styles.dragonPanda}>
          <Image src={dragonPanda} className={styles.panda} alt="panda-logo" />
        </div>
      </div>
      <div className={styles.copyRight}>
        <p>Copyright © 2022 | All Rights Reserved by Lotus Chips</p>
      </div>
    </div>
  );
};

export default Footer;
