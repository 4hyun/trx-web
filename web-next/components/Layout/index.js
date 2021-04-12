import React from "react";
import Header from "components/Header/index";
import Footer from "components/Layout/Footer";
import styled from "styled-components";

const Wrapper = styled.div`
  @media (min-width: 768px) {
    padding-left: 100px;
  }
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header></Header>
      {children}
      <Footer></Footer>
    </Wrapper>
  );
};

export default Layout;
