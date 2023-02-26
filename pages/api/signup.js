import admin, { db } from "../../config/firebaseAdmin";

export default async function Signup(req, res) {
  const { displayName, password, email, phoneNo } = req.body;
  console.log("phonerec", phoneNo);
  
  try {
    const user = await admin.auth().createUser({
      email,
      password,
      displayName,
      phoneNumber: phoneNo,
      disabled: true,
    });

    await db.collection("users").doc(user.uid).set({
      email,
      displayName,
      phoneNo,
    });
    return res.send(user);
  } catch (err) {
    console.log("Error creating new user:", err);
    return res.send(err);
  }
}
