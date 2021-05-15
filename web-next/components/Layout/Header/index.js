import React, { memo, useReducer, useCallback } from "react"
import styled, { keyframes } from "styled-components"
import tw from "twin.macro"
import { OPEN_DESKTOP_MENU, CLOSE_DESKTOP_MENU, SHOW_MENU_CONTENT, HIDE_MENU_CONTENT } from "./constants"
import { headerContainerStyles, menuLogoButtonStyles } from "./styles"
import reducer from "./reducer"
import Navbar from "components/Navbar"
import { MobileMenu, DesktopMenu } from "components/Menu"
import { defaultMenuList } from "components/Menu/data"
import { DesktopMenuLogoButton, MobileMenuLogoButton } from "components/Navbar/MenuLogoButton"

const headerFadeIn = keyframes`
  from {
    opacity:0;
  }
  to {
    opacity: 1;
  }
`

const HeaderContainer = styled.div`
  &,
  & * {
    ${tw`select-none`}
  }
  animation-name: ${headerFadeIn};
  animation-duration: 0.6s;
  animation-fill-mode: both;
  animation-delay: 1s;
  ${tw`relative w-screen lg:(w-full) bg-tr-white z-50 shadow-lg lg:shadow-2xl`};
  height: 60px;

  @media (min-width: 1024px) {
    width: ${({ menuOpen }) => (menuOpen && headerContainerStyles.menuOpen.open.width) || headerContainerStyles.menuOpen.close.width};
    /* TODO: refactor to transition transform:scale */
    transition: width ${headerContainerStyles.transitionDuration};
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    ${({ desktopStyles }) => desktopStyles && desktopStyles}
  }
`

const initState = {
  menuOpen: false,
  transitionEnd: {
    afterMenuOpen: false,
    afterMenuClose: false,
  },
}

const MobileMenuIGHashtagLink = styled.a`
  ${tw`font-bungee text-tr-black text-sm no-underline hover:underline`}
`
const MobileMenuIGHashtagContainer = styled.div`
  ${tw`flex items-center pl-4 absolute top-0 left-0 w-1/2 h-full lg:hidden`}
`
const Header = ({ desktopStyles }) => {
  const [{ menuOpen, transitionEnd }, dispatch] = useReducer(reducer, initState)

  const toggleDesktopMenu = () => {
    if (menuOpen) {
      dispatch({ type: CLOSE_DESKTOP_MENU })
      dispatch({ type: HIDE_MENU_CONTENT })
      return
    }
    return dispatch({ type: OPEN_DESKTOP_MENU })
  }

  const handleTransitionEnd = useCallback((e) => {
    if (menuOpen) {
      dispatch({ type: SHOW_MENU_CONTENT })
    }
  })

  return (
    <HeaderContainer onTransitionEnd={handleTransitionEnd} menuOpen={menuOpen} desktopStyles={desktopStyles}>
      {/***
    TODO: Add condition to socialButtonGroup prop.
    
    When breakpoint is Mobile | Tablet,
    pass null */}
      <MobileMenuIGHashtagContainer>
        <MobileMenuIGHashtagLink href="https://www.instagram.com/tunaaaa_room" target="_blank">
          #TunaaaaMoonAndBack
        </MobileMenuIGHashtagLink>
      </MobileMenuIGHashtagContainer>
      {/* <Navbar menuOpen={menuOpen} toggleMenu={toggleDesktopMenu} /> */}
      <Navbar />
      <DesktopMenu transitionEnd={transitionEnd} toggleMenu={toggleDesktopMenu} />
      <DesktopMenuLogoButton styles={menuLogoButtonStyles} menuOpen={menuOpen} toggleMenu={toggleDesktopMenu} />
      <MobileMenuLogoButton styles={menuLogoButtonStyles} menuOpen={menuOpen} toggleMenu={toggleDesktopMenu} />
      <MobileMenu menuList={defaultMenuList} menuOpen={menuOpen} toggleMenu={toggleDesktopMenu} />
    </HeaderContainer>
  )
}

export default Header
