import React, { useReducer, useCallback } from "react";
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
  menuLogoButtonStyles,
} from "./styles";
import reducer from "./reducer";
import Content from "components/Navbar/Content";
import Navbar from "components/Navbar";
import SocialButtonGroup from "components/Header/Social";
import DesktopMenuButton from "components/Navbar/MenuButton";
import {
  DesktopMenuLogoButton,
  MobileMenuLogoButton,
} from "components/Navbar/MenuLogoButton";

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
  ${tw`relative w-screen lg:(w-full) bg-tr-white`};
  height: 60px;
  @media (min-width: 1024px) {
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
  ${navbarElementSharedStyles}
`;

const initState = {
  menuOpen: false,
  transitionEnd: {
    afterMenuOpen: false,
    afterMenuClose: false,
  },
};

const MobileMenuIGHashtagLink = styled.a`
  ${tw`font-bungee text-tr-black text-sm no-underline hover:underline`}
`;
const MobileMenuIGHashtagContainer = styled.div`
  ${tw`flex items-center pl-4 absolute top-0 left-0 w-1/2 h-full lg:hidden`}
`;
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
  const renderSocialButtonGroup = useCallback(() => (
    <NavbarRow tw="hidden lg:(flex flex-1 items-end pb-6)">
      <SocialButtonGroup stylesheet={socialButtonGroupStylesheet} />
    </NavbarRow>
  ));
  const renderDesktopMenuButton = useCallback(() => (
    <NavbarRow
      tw="hidden lg:(flex flex-1 items-start pt-6)"
      onClick={toggleDesktopMenu}
    >
      <DesktopMenuButton />
    </NavbarRow>
  ));

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
      {/***
    TODO: Add condition to socialButtonGroup prop.
    
    When breakpoint is Mobile | Tablet,
    pass null */}
      <MobileMenuIGHashtagContainer>
        <MobileMenuIGHashtagLink>#TunaaaaMoonAndBack</MobileMenuIGHashtagLink>
      </MobileMenuIGHashtagContainer>
      <Navbar
        width={navbarStyles.width}
        renderDesktopMenuButton={renderDesktopMenuButton}
        renderSocialButtonGroup={renderSocialButtonGroup}
      ></Navbar>
      <Content transitionEnd={state.transitionEnd} />
      <DesktopMenuLogoButton
        styles={menuLogoButtonStyles}
        menuOpen={state.menuOpen}
        toggleMenu={toggleDesktopMenu}
      />
      <MobileMenuLogoButton
        styles={menuLogoButtonStyles}
        menuOpen={state.menuOpen}
        toggleMenu={toggleDesktopMenu}
      />
    </HeaderContainer>
  );
};

export default Header;
