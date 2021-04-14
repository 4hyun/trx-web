import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.main`
  @media (min-width: 768px) {
    ${tw`fixed inset-y-0 right-0 z-20`}
    left: var(--DesktopNavbarWidth);
  }
`;

const HomeContent = ({ children }) => {
  return <Container>{children}</Container>;
};

export default HomeContent;
