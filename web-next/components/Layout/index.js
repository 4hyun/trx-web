import React, { useEffect, useState } from "react";
import { withRouter } from "next/router";
import { paths } from "paths";
import { AGE_KEY } from "pages/age-gate/constants";
import Header from "components/Header/index";
import MainBackgroundVideo from "components/Common/MainBackgroundVideo";
import Footer from "components/Layout/Footer";
import styled, { css } from "styled-components";
import tw from "twin.macro";

const styles = {
  desktop: {
    header: {
      width: "100px",
      styles: css`
        ${tw`z-40`}
      `,
    },
  },
};

const Wrapper = styled.div`
  @media (min-width: 768px) {
    padding-left: ${({ showHeader }) =>
      showHeader ? styles.desktop.header.width : "none"};
  }
`;

const BackgroundVideoWrapper = styled.div`
  ${tw`fixed inset-0`}
`;

const FixedBackgroundVideo = () => {
  return (
    <BackgroundVideoWrapper>
      <MainBackgroundVideo></MainBackgroundVideo>
    </BackgroundVideoWrapper>
  );
};

const test = {
  ageVerifiedValue: "somevalue",
  verifyAge: (fn) => {
    fn();
  },
};

const setAgeVerified = (v) => {
  let { localStorage } = window;
  localStorage.setItem(AGE_KEY, v);
  return v;
};

const checkAgeVerified = () => {
  let { localStorage } = window;
  return localStorage.getItem(AGE_KEY);
};

const Layout = ({ children, router }) => {
  const [showHeader, setShowHeader] = useState(true);
  useEffect(() => {
    let ageVerified = checkAgeVerified();
    if (!ageVerified) {
      test.verifyAge(() => setAgeVerified(test.ageVerifiedValue));
    }
  }, []);
  useEffect(() => {
    // console.group("Layout.useEffect [this will run once]");
    // console.log("router", router);
    // console.groupEnd();

    // console.group("localStorage");
    // console.log("localStorage", localStorage);
    // console.groupEnd();
    if (router.pathname === paths.ageGate) setShowHeader(false);
  }, []);
  return (
    <Wrapper showHeader={showHeader}>
      {showHeader && (
        <Header desktopStyles={styles.desktop.header.styles}></Header>
      )}
      {children}
      <Footer></Footer>
      <FixedBackgroundVideo />
    </Wrapper>
  );
};

export default withRouter(Layout);
