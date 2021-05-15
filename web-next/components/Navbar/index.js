import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import SocialButtonGroup from "components/Layout/Header/SocialButtonGroup"
import MenuButton from "./MenuButton"
import NavbarRow from "./NavbarRow"

const Container = styled.div`
  ${tw`flex h-full`}
  border-bottom: ${({ menuOpen }) => menuOpen && "1px solid black"};
  @media (min-width: 1024px) {
    width: var(--DesktopNavbarWidth);
    max-width: var(--DesktopNavbarWidth);
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    /* DEV: remove temp background style */
    ${tw`flex-col items-center`}
    ${tw`bg-tr-white`}
  }
`

const DesktopMenuButton = React.memo(({ menuOpen }) => (
  <NavbarRow tw="hidden lg:(flex flex-1 items-start pt-6)">
    <MenuButton menuOpen={menuOpen} />
  </NavbarRow>
))

const Navbar = ({ menuOpen, toggleMenu }) => {
  return (
    <Container menuOpen={menuOpen}>
      <DesktopMenuButton menuOpen={menuOpen} />
      <SocialButtonGroup />
    </Container>
  )
}

export default Navbar
