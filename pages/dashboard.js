import { onAuthStateChanged } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { auth } from "../config/firebase";
import styles from "../styles/dashboard.module.css";
const canvaImg="data:image/jpeg;base64,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"
const Dashboard = () => {
  const router=useRouter()
  const selectedTools=[
    // {name:"canva",img:canvaImg},
    {name:"udemy",img:"/udemy.png"},
    {name:"piktochart",img:"/piktochart.jpg"}
  ]

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     auth.signOut().then((res) => {
  //       router.push("/login");
  //     });
  //   }, 300000);
  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
   const unsub= onAuthStateChanged(auth, (user) => {
      if (!user) {router.push("/login");}
    });
    return ()=>unsub()
  }, []);
  return (
    <div className={styles.pageWrapper}>
        
      <div className={styles.leftNav}>
        <Link href='/'>
        <div className={styles.navLogoCont}>
        <Image src='/footer.png' alt="left-navbar-logo" width={190} height={91}/>
        </div>
        </Link>
        <div className={styles.tabList}>
            <div>GRAPHICS</div>
            <div>CONTENT</div>
            <div>LEARNING</div>
            <div>ANIMATION</div>
            <div>OTHER TOOLS</div>
            <div>SEO</div>
        </div>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.carouselContainer}>
          <div className={styles.imgWrapper}>
            <img src="/offer-6-months.png" />
          </div>
        </div>
        <h3 className={styles.axtiveResources}>ACTIVE RESOURSES</h3>
        <div className={styles.resourcesList}>
          {selectedTools.map(t=>
            <Link key={t.name} href={`/access-tool/${t.name}`} >
                 <div className={styles.resourceWraper}>
            <Image src={t.img} alt="resource img" width={100} height={85} />
            </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
