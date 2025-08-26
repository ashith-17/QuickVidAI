import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const Login = () => {
  const handleLoginSuccess = (credentialResponse) => {
    console.log("Login Success:", credentialResponse);
    alert("Login successful!");
  };

  const handleLoginError = () => {
    console.error("Login Failed");
    alert("Login failed!");
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <h2 className="text-3xl font-bold mb-6 text-blue-400">Login to QuickVidAI</h2>
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col items-center space-y-6">
          <p className="text-gray-300">Sign in with your Google account to continue</p>
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={handleLoginError}
            useOneTap
          />
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
