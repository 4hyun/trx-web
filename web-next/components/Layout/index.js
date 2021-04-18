import React, { useEffect, useState } from "react";
import { withRouter } from "next/router";
import { paths } from "paths";
import { AGE_GATE_LS_KEY } from "pages/age-gate/constants";
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
  @media (min-width: 1024px) {
    ${tw`fixed top-0 left-0 right-0 w-screen overflow-x-hidden`}
    padding-right: 0;
    padding-left: ${({ showHeader }) =>
      showHeader ? styles.desktop.header.width : "none"};
  }
`;

const Container = styled.div`
  ${tw`absolute z-20 w-min h-auto auto-rows-min`}
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

const Layout = ({ children: mainContent, router }) => {
  const [showHeader, setShowHeader] = useState(true);
  useEffect(() => {
    // console.group("Layout.useEffect [this will run once]");
    // console.log("router", router);
    // console.groupEnd();

    // console.group("localStorage");
    // console.log("localStorage", localStorage);
    // console.groupEnd();
    if (router.pathname === paths.ageGate) return setShowHeader(false);
    if (showHeader) return;
    setShowHeader(true);
  }, [router.pathname]);
  return (
    <Wrapper showHeader={showHeader}>
      <Container>
        {showHeader && (
          <Header desktopStyles={styles.desktop.header.styles}></Header>
        )}
        {mainContent}
        <Footer></Footer>
      </Container>
      <FixedBackgroundVideo />
    </Wrapper>
  );
};

export default withRouter(Layout);
