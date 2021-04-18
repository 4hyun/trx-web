import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`flex`}
  @media (min-width: 1024px) {
    width: ${({ width }) => width || "var(--DesktopNavbarWidth)"};
    max-width: 100px;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    /* DEV: remove temp background style */
    ${tw`flex-col items-center`}
    ${tw`bg-tr-white`}
  }
`;

const Navbar = ({ renderSocialButtonGroup, renderMenuButton }) => {
  return (
    <Container>
      {renderMenuButton && renderMenuButton()}
      {renderSocialButtonGroup && renderSocialButtonGroup()}
    </Container>
  );
};

export default Navbar;
