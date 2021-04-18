import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import GlobalStyles from "components/Common/GlobalStyles";
import Layout from "components/Layout/index";
import AgeGateContext from "components/AgeGate/context";
import { AGE_GATE_LS_KEY } from "components/AgeGate/constants";

function MyApp({ Component, pageProps }) {
  const [ageCheckedValue, setAgeChecked] = useState(null);
  const ageGateContextValue = { ageCheckedValue, setAgeChecked };
  const router = useRouter();
  useEffect(() => {
    // console.log("router ", router);
    if (router.pathname === "/") {
      const ageCheckValue = localStorage.getItem(AGE_GATE_LS_KEY);
      if (ageCheckValue) {
        setAgeChecked(ageCheckValue);
        return;
      } else {
        router.replace("age-gate");
      }
    }
  }, []);
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Oswald:wght@400;600;700&family=ABeeZee&family=Bungee&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <AgeGateContext.Provider value={ageGateContextValue}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AgeGateContext.Provider>
    </>
  );
}

export default MyApp;
