import React, { useState, useReducer, useCallback } from "react";
import styled, { css, keyframes } from "styled-components";
import tw from "twin.macro";
import {
  OPEN_DESKTOP_MENU,
  CLOSE_DESKTOP_MENU,
  SHOW_MENU_CONTENT,
  HIDE_MENU_CONTENT,
} from "./constants";
import {
  headerContainerStyles,
  navbarStyles,
  desktopMenuButtonStyles,
} from "./styles";
import reducer from "./reducer";
import Content from "components/Navbar/Content";
import Navbar from "components/Navbar";
import SocialButtonGroup from "components/Header/Social";
import MenuButton from "components/Navbar/MenuButton";
import DesktopMenuButton from "components/Navbar/DesktopMenuButton";

const headerFadeIn = keyframes`
  from {
    opacity:0;
  }
  to {
    opacity: 1;
  }
`;

const HeaderContainer = styled.div`
  &,
  & * {
    ${tw`select-none`}
  }
  animation-name: ${headerFadeIn};
  animation-duration: 0.6s;
  animation-fill-mode: both;
  animation-delay: 1s;
  @media (min-width: 1024px) {
    ${tw`bg-tr-white`};
    width: ${({ menuOpen }) =>
      (menuOpen && headerContainerStyles.menuOpen.open.width) ||
      headerContainerStyles.menuOpen.close.width};
    transition: width ${headerContainerStyles.transitionDuration};
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    ${({ desktopStyles }) => desktopStyles && desktopStyles}
  }
`;

const navbarElementSharedStyles = css`
  & > svg {
    ${tw`hover:opacity-60 hover:cursor-pointer`}
  }
`;

const socialButtonGroupStylesheet = css`
  width: 38px;
  ${tw`space-y-4`}
  ${navbarElementSharedStyles}
`;

const NavbarRow = styled.div`
  ${tw`flex flex-1`}
  ${navbarElementSharedStyles}
`;

const initState = {
  menuOpen: false,
  transitionEnd: {
    afterMenuOpen: false,
    afterMenuClose: false,
  },
};

const Header = ({ desktopStyles }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const toggleDesktopMenu = useCallback(() => {
    const { menuOpen } = state;
    if (menuOpen) {
      dispatch({ type: CLOSE_DESKTOP_MENU });
      dispatch({ type: HIDE_MENU_CONTENT });
      return;
    }
    return dispatch({ type: OPEN_DESKTOP_MENU });
  });

  const transitionEnd = (e) => {
    const { menuOpen } = state;
    if (menuOpen) {
      dispatch({ type: SHOW_MENU_CONTENT });
    }
  };
  return (
    <HeaderContainer
      onTransitionEnd={transitionEnd}
      menuOpen={state.menuOpen}
      desktopStyles={desktopStyles}
    >
      <Navbar
        width={navbarStyles.width}
        menuButton={() => (
          <NavbarRow tw="items-start pt-6" onClick={toggleDesktopMenu}>
            <MenuButton />
          </NavbarRow>
        )}
        socialButtonGroup={() => (
          <NavbarRow tw="items-end pb-6">
            <SocialButtonGroup stylesheet={socialButtonGroupStylesheet} />
          </NavbarRow>
        )}
      ></Navbar>
      <Content transitionEnd={state.transitionEnd} />
      <DesktopMenuButton
        styles={desktopMenuButtonStyles}
        menuOpen={state.menuOpen}
        toggleMenu={toggleDesktopMenu}
      />
    </HeaderContainer>
  );
};

export default Header;
