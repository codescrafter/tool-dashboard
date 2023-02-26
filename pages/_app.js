import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.css";
import AuthController from "../HOC/Auth";

function MyApp({ Component, pageProps }) {
  return (
    <AuthController>
      <Component {...pageProps} />
    </AuthController>
  );
}

export default MyApp;
