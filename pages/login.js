import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/login.module.css";
import {
  browserSessionPersistence,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError]=useState(false)
  const router = useRouter();

  useEffect(() => {
  const unsub=  onAuthStateChanged(auth, (user) => {
      if (user) router.push("/");
    });
    return ()=>unsub()
  }, []);

  const loginHandler = async () => {
    if(!email.includes('@')||password.length<6||email.length<6){
      setError(true);
      return;
    }
    try {
      await setPersistence(auth, browserSessionPersistence);
      const userData = await signInWithEmailAndPassword(auth, email, password);
     await axios.post("api/login", {
        userId: userData.user.uid,
      });
      if(result.status===200){
        router.push('/')
      }
    } catch (e) {
      if (e.code == "auth/user-disabled") {
        alert(
          "Your account is under review. Please try again later."
        );
      }
    }
  };
  
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.logoWrapper}>
        <Image
          src="/footer.png"
          alt="left-navbar-logo"
          width={190}
          height={91}
        />
      </div>
      <div className={styles.mainDisplay}>
        <div className={styles.loginWrapper}>
          <h1 className={styles.loginHeading}>Login</h1>
          <div className={styles.inputWrapper}>
            <label>Email</label>
            <div>
              <input
                type="email"
                className={styles.loginInput}
                value={email}
                onChange={(e) => {setEmail(e.target.value);error&&setError(false)}}
                placeholder="email"
              />
              {error&&<p>wrong email or password</p>}
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <label>Passward </label>
            <div>
            <input
              type="password"
              className={styles.loginInput}
              value={password}
              onChange={(e) => {setPassword(e.target.value);error&&setError(false)}}
              placeholder="password"
            />
              {error&&<p>wrong email or password</p>}
            </div>
          </div>
          <div className={styles.loginBtnWrapper}>
            <button className={styles.LoginBtn} onClick={loginHandler}>
              <b>Login</b>
            </button>
          </div>
          <div className={styles.forgetPass}>
            <a src="#123">forgot pasward?</a>{" "}
          </div>
        </div>
        <div className={styles.unregistered}>
          Not Registered yet?{" "}
          <p className={styles.forgetPass}>
            <Link href="/signup">Signup here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
