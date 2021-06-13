import React, { memo } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import SocialButtonGroup from 'components/Layout/Header/SocialButtonGroup'
import MenuIconButton from './MenuIconButton'
import Row from './Row'

const Container = styled.div`
  ${tw`flex h-full`}
  border-bottom: ${({ menuOpen }) => menuOpen && '1px solid black'};
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

const DesktopMenuIconButton = React.memo(({ toggleMenu }) => (
  <Row tw="hidden lg:(flex flex-1 items-start pt-6) " onClick={toggleMenu}>
    <MenuIconButton />
  </Row>
))

const DesktopSideNavbar = ({ menuOpen, toggleMenu }) => (
  <Container menuOpen={menuOpen}>
    <DesktopMenuIconButton toggleMenu={toggleMenu} />
    <SocialButtonGroup />
  </Container>
)

export default memo(DesktopSideNavbar)
