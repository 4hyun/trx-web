import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const defaultStyles = {
  width: "100px",
};

const Container = styled.div`
  @media (min-width: 1024px) {
    width: ${({ width }) => width || defaultStyles.width};
    max-width: 100px;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    /* DEV: remove temp background style */
    ${tw`flex flex-col items-center`}
    ${tw`bg-tr-white`}
  }
`;

const Navbar = ({ socialButtonGroup, menuButton }) => {
  return (
    <Container>
      {menuButton && menuButton()}
      {socialButtonGroup && socialButtonGroup()}
    </Container>
  );
};

export default Navbar;
