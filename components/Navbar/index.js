import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import index from "../CustomButton/index";
import CustomButton from "../CustomButton/index";
import dragonWhiteLogo from "../../public/dragonWhiteLogo.png";
import login from "../../public/login.png";
import { BiMenu } from "react-icons/bi";
import { auth } from "../../config/firebase";
import Link from "next/link";

const Navbar = ({userData}) => {


  const logoutHandler = async () => {
    await auth.signOut();
  };


  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navbar}>
        <div className={styles.imageWrap}>
          <Image src={dragonWhiteLogo} alt="dragon-white-logo" />
        </div>
        <div className={styles.text}>
          {/* <div className={styles.buyText}>
            <span className={styles.bySub}>Buy Subscriptions</span>
          </div> */}
          <div className={styles.buttonWrap}>
            <div className={styles.login}>
              <Image src={login} className={styles.vector} alt="user-vector" />
            </div>
            {userData?<Link href='/dashboard'><CustomButton children={"Dashboard"} className={styles.area} /></Link>:<Link href='/login'><CustomButton children={"Login"} className={styles.area} /></Link>}
          </div>
          {!userData ? (
            <div className={styles.sign}>
              <Link href="/signup">
                <CustomButton
                  children={"Signup Today"}
                  className={styles.signup}
                />
              </Link>
            </div>
          ) : (
            <div className={styles.sign}>
              <div onClick={logoutHandler}>
                <CustomButton children={"Logout"} className={styles.signup} />
              </div>
            </div>
          )}
        </div>
        <div className={styles.menuWrapper}>
          <BiMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
