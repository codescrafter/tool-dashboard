import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { auth } from "../../config/firebase";
import styles from "../../styles/clickMe.module.css";
var CryptoJS = require("crypto-js");

export default function Home() {
  const [cookies, setCookies] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
   const unsub= onAuthStateChanged(auth, (user) => {
      if (!user) {
      setCookies("");
     router.push("/login");
      }
      else {
        fetchCookies(user.uid);
      }
    });
    return ()=>{unsub()}
  }, []);

  const fetchCookies = async (uid) => {
    const siteNamee=router.query.site;
    if (!cookies) {
      console.log("userrid",uid)
      try {
        const result = await axios.post("../api/cookies", {
          siteName: siteNamee,
          userId: uid,
        });
        console.log("apires", result);
        if (result.data.status === 401) {
          const err = new Error(
            "You need to login again to access this resource"
          );
          err.status = 401;
          throw err;
        }
        setCookies(result.data.obj);
        setLoading(false);
      } catch (e) {
        console.log(e);
        alert("You need to login again to access this resource!")
        auth.signOut()
        router.push("/login");
        setLoading(false);
      }
    }
  };

  const pasteToClipboard = async () => {
    try {
      var encodedString = window.btoa(cookies);
      var ciphertext = CryptoJS.AES.encrypt(
        encodedString,
        "secret key 123"
      ).toString();
      let domain = "..........ninjatools.net..........";
       const encoded = domain.concat(ciphertext);
       console.log(encoded)
      await navigator.clipboard.writeText(encoded);
    } catch (e) {
      console.log(e);
    }
  };


  if (loading) return <div>loading...</div>;
  return (
    <div className={styles.mainContainer}>
      {/* <Header /> */}
      <div className={styles.mainContent}>
        {/* <Navbar />
        <LinksBar /> */}
        <div className={styles.clickBtnDiv}>
          <p>Some content</p>
          <button
            className={styles.clickBtn}
            onClick={pasteToClipboard}
          >
            First Click On Me
          </button>
          <p className={styles.primaryPara}>then, Second Click on extension</p>
        </div>
        <div className={styles.chatSupportDiv}>
          <i>
            Above tools not working? Inform it to{" "}
            <span className={styles.chatSupportLink}>Live chat support</span>{" "}
            for a Quick Fix.
          </i>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
