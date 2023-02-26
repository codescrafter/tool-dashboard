import React from "react";
import styles from "../ImportantDragon/ImportantDragon.module.scss";
import CustomButton from "../CustomButton/index";
import Link from "next/link";
const ImportantDragon = ({ userData }) => {
  return (
    <div className={styles.importantDragonWrapper}>
      <div className={styles.dragonWrap}>
        <div className={styles.importantDragon}>
          <h1>Important !</h1>
          <p>
            If You are Confused or Anyhow Hesitating to pay us. Contact the Live
            Chat Support & Ask for a Anydesk overview . For More Details Contact
            Chat Support.
          </p>
        </div>
        <div className={styles.important}>
          <CustomButton children={"CHAT NOW"} className={styles.wraper} />
          {!userData ? (
            <Link href={'/signup'}>
            <CustomButton children={"SIGN UP"} className={styles.wraper} />
            </Link>
          ) : (
            <Link href={'/dashboard'}>
            <CustomButton children={"Dashboard"} className={styles.wraper} />
            </Link>
          )}
        </div>
        <div className={styles.payment}>
          <div className={styles.paymentNeeded}>
            <p>No payment needed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportantDragon;
