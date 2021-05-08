import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

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

const Navbar = ({ renderSocialButtonGroup, renderDesktopMenuButton, menuOpen }) => {
  return (
    <Container menuOpen={menuOpen}>
      {renderDesktopMenuButton && renderDesktopMenuButton()}
      {renderSocialButtonGroup && renderSocialButtonGroup()}
    </Container>
  )
}

export default Navbar
