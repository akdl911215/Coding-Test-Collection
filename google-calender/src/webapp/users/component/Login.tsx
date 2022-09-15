import React, { useState } from "react";
// import GoogleLogin from "react-google-login";
import axios from "axios";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";

interface UserState {
  email: string;
  name: string;
}

const Login = () => {
  //클라이언트 ID (환경변수)
  const googleClientId: string = process.env.REACT_APP_GOOGLE_CLIENT_ID || "";
  //사용자 정보를 담아둘 userObj
  const [userObj, setUserObj] = useState<UserState>({
    email: "",
    name: "",
  });
  //로그인 성공시 res처리
  const onLoginSuccess = (res: any) => {
    console.log("success res : ", res);
    setUserObj({
      ...userObj,
      email: res.profileObj.email,
      name: res.profileObj.name,
    });

    // POST /o/oauth2/device/code HTTP/1.1
    // Host: accounts.google.com
    // Content-Type: application/x-www-form-urlencoded
    // client_id=1084945748469-eg34imk572gdhu83gj5p0an9fut6urp5.apps.googleusercontent.com&
    // scope=https://www.googleapis.com/auth/calendar
  };
  console.log("userObj : ", userObj);

  return (
    <div>
      <GoogleOAuthProvider clientId={googleClientId}>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default Login;
