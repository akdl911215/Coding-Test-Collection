import React, { useState } from "react";
// import GoogleLogin from "react-google-login";
import {
  CredentialResponse,
  GoogleOAuthProvider,
  GoogleLogin,
  googleLogout,
} from "@react-oauth/google";
import { OAuth2Client } from "google-auth-library";
import { useGoogleApi } from "react-gapi";

const Login = () => {
  const googleClientId: string = process.env.REACT_APP_GOOGLE_CLIENT_ID || "";
  const [user, setUser] = useState({});
  console.log("user : ", user);

  const gapi = useGoogleApi({
    discoveryDocs: ["https://www.googleapis.com/calendar/v3/calendars/"],
    scopes: ["https://www.googleapis.com/auth/calendar"],
  });
  console.log("Login gapi : ", gapi);

  if (!gapi) {
    return <div>Some loading screen</div>;
  }

  const loginSuccess = (res: CredentialResponse) => {
    alert("로그인이 진행되었습니다");
    console.log(setUser(res));

    //
    // let xhr = new XMLHttpRequest();
    // xhr.open("POST", "https://yourbackend.example.com/tokensignin");
    // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // xhr.onload = function () {
    //   console.log("Signed in as: " + xhr.responseText);
    // };
    // xhr.send("idtoken=" + res.credential);
    // console.log("xhr : ", xhr);

    //
    // const client = new OAuth2Client(res.clientId);
    // const verify = async () => {
    //   const ticket = await client.verifyIdToken({
    //     idToken: res.credential || "",
    //     audience: res.credential, // Specify the CLIENT_ID of the app that accesses the backend
    //     // Or, if multiple clients access the backend:
    //     //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    //   });
    //   console.log("ticket : ", ticket);

    //   const payload = ticket.getPayload();
    //   console.log("payload : ", payload);
    //   if (payload !== undefined) {
    //     const userid = payload["sub"];
    //     console.log("userid : ", userid);
    //   }
    //   verify().catch(console.error);
    // };
  };

  return (
    <div>
      <GoogleOAuthProvider clientId={googleClientId}>
        <GoogleLogin
          onSuccess={(credentialResponse) => loginSuccess(credentialResponse)}
          onError={() => {
            console.error("Login Failed");
          }}
          useOneTap
        />
      </GoogleOAuthProvider>
      <button
        onClick={() => {
          alert("로그아웃이 되었습니다.");
          googleLogout();
          window.location.reload();
        }}
      >
        로그아웃
      </button>
    </div>
  );
};

export default Login;
