import React, { useEffect } from "react";
import { AppProps } from "next/app";
import { AuthProvider } from "../auth/AuthProvider";
import "../../styles/globals.css";
import { RecoilRoot } from "recoil";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <RecoilRoot>
      <AuthProvider>
          <Component {...pageProps} />
      </AuthProvider>
    </RecoilRoot>
  );
};

export default MyApp;
