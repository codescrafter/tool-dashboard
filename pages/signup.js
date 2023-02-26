import React, { useEffect, useState } from "react";
import styles from "../styles/signup.module.css";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [err, setErr] = useState({
    name: false,
    email: false,
    password: false,
    phone: false,
  });
  const router = useRouter();

  const submitHandler = async () => {
    if (displayName.length < 3) {
      setErr({ ...err, name: true });
      return;
    }
    if (email.length < 6 || !email.includes("@")) {
      setErr({ ...err, email: true });
      return;
    }
    if (password.length < 7) {
      setErr({ ...err, password: true });
      return;
    }
    if (phoneNo.length != 13) {
      setErr({ ...err, phone: true });
      return;
    }
    try {
      const result = await axios.post("api/signup", {
        displayName,
        email,
        password,
        phoneNo,
      });
      console.log(result);
      if (
        result?.data?.message &&
        result?.data?.message?.includes("The email address is already in use")
      )
        throw new Error("Account already exists");
      if (result.status == 200) {
        setName("");
        setEmail("");
        setPassword("");
        setPhoneNo("");
      }
      alert("Please wait while we review your information. Thanks!");
      router.push("/login");
    } catch (e) {
      if (e.message === "Account already exists")
        alert("Signup failed! Account already exists.");
      else alert("Signup failed! Please try again later.");
      console.log(e);
    }
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) router.push("/");
    });
    return () => unsub();
  }, []);

  return (
    <div className={styles.mainSignupDiv}>
      <div className={styles.logoWrapper}>
        <Image
          src="/footer.png"
          alt="left-navbar-logo"
          width={190}
          height={91}
        />
      </div>
      <div className={styles.signupWrapper}>
        <h1 className={styles.heading}>Signup Here</h1>
        <div className={styles.userFields}>
          <label>User Name </label>
          <div className={styles.inputWrapper}>
            <input
              type="name"
              value={displayName}
              className={styles.signupInput}
              onChange={(e) => {
                setName(e.target.value);
                err.name && setErr({ ...err, name: false });
              }}
              placeholder="name"
            />
            {err.name && <p>please enter correct username</p>}
          </div>
        </div>
        <div className={styles.userFields}>
          <label>Email </label>
          <div className={styles.inputWrapper}>
            <input
              type="email"
              value={email}
              className={styles.signupInput}
              onChange={(e) => {
                setEmail(e.target.value);
                err.email && setErr({ ...err, email: false });
              }}
              placeholder="email"
            />
            {err.email && <p>please enter correct email</p>}
          </div>
        </div>

        <div className={styles.userFields}>
          <label>Passward </label>
          <div className={styles.inputWrapper}>
            <input
              type="password"
              value={password}
              className={styles.signupInput}
              onChange={(e) => {
                setPassword(e.target.value);
                err.password && setErr({ ...err, password: false });
              }}
              placeholder="password"
            />
            {err.password && <p> password must be &gt; 6</p>}
          </div>
        </div>
        <div className={styles.userFields}>
          <label>Phone no. </label>
          <div className={styles.inputWrapper}>
            <input
              type="phone"
              value={phoneNo}
              className={styles.signupInput}
              onChange={(e) => {
                setPhoneNo(e.target.value);
                err.phone && setErr({ ...err, phone: false });
              }}
              placeholder="phone no."
            />
            {err.phone && <p> please enter correct phone no.</p>}
          </div>
        </div>

        <button className={styles.signupBtn} onClick={submitHandler}>
          signup
        </button>
        <div className={styles.unregistered}>
          Already a member?{" "}
          <p className={styles.forgetPass}>
            <Link href="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
