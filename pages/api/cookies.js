import { db } from "../../config/firebaseAdmin";

export default async function cookieSender(req, res) {
  const { userId, siteName } = req.body;

  try {
    const userDoc = await db.collection("users").doc(userId).get();
    const user = userDoc.data();
    if (user.lastLoggedIn + 300000 < new Date().getTime()) {
      const err = new Error("You need to login again to access this resource");
      err.status = 401;
      throw err;
    }
    console.log(
      "check clear",
      user.lastLoggedIn + 300000,
      "......",
      new Date().getTime()
    );
    const snapshot = await db.collection("cookies").doc(siteName).get();
    const canvaCookies = snapshot.data();
    console.log("Cookies", canvaCookies);
    const cookiesObj = JSON.parse(canvaCookies.cookies);
    console.log(cookiesObj.cookies);
    const obj = JSON.stringify({
      cookies: cookiesObj.cookies,
      siteName: cookiesObj.siteName,
    });

    return res.send({ obj });
  } catch (e) {
    console.log("Error fetching cookies", e);
    return res.send(e);
  }
}
