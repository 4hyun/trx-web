import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.main`
  ${tw`px-6 py-8`}
  top: 48px;
  @media (min-width: 1024px) {
    ${tw`fixed bottom-0 left-0 right-0 px-0 py-0 top-0`}
    left: var(--DesktopNavbarWidth);
  }
`;

const HomeContentContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default HomeContentContainer;
