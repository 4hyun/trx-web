import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.main`
  ${tw`fixed inset-y-0 left-0 right-0 z-20 px-8 py-8`}
  @media (min-width: 1024px) {
    ${tw`px-0 py-0`}
    left: var(--DesktopNavbarWidth);
  }
`;

const HomeContent = ({ children }) => {
  return <Container>{children}</Container>;
};

export default HomeContent;
