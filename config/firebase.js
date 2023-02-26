import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyButfqxWM21SZ2lUoIXZ_cHbSH1hwiwpPg",
  authDomain: "cookie-tool-5daf8.firebaseapp.com",
  projectId: "cookie-tool-5daf8",
  storageBucket: "cookie-tool-5daf8.appspot.com",
  messagingSenderId: "665708768871",
  appId: "1:665708768871:web:710ae0a45229354475eec2",
  measurementId: "G-RR314Y4WYJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth,app };
