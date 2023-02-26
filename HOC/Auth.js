import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { auth } from "../config/firebase";

const AuthController = (props) => {
  useEffect(() => {


    let timer;
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) {
        clearTimeout(timer);
      } else {
        timer = clearTimeout(timer);
        timer = setTimeout(() => {
          auth.signOut();
        }, 300000);
      }
    });

    return () => {
      clearTimeout(timer);
      unsub();
    };
  }, []);

  return props.children;
};

export default AuthController;
