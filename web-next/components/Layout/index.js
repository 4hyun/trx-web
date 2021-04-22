import React, { useEffect, useState } from "react";
import { withRouter } from "next/router";
import { paths } from "paths";
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
  const [showLayout, setShowLayout] = useState(true);

  useEffect(() => {
    if (router.pathname === paths.ageGate) return setShowLayout(false);
    if (showLayout) return;
    setShowLayout(true);
  }, [router.pathname]);
  return (
    <Wrapper showHeader={showLayout}>
      <Container>
        {showLayout && (
          <Header desktopStyles={styles.desktop.header.styles}></Header>
        )}
        {mainContent}
        {showLayout && <Footer></Footer>}
      </Container>
      <FixedBackgroundVideo />
    </Wrapper>
  );
};

export default withRouter(Layout);
