import React, { useEffect, useState } from "react"
import { withRouter } from "next/router"
import styled, { css } from "styled-components"
import tw from "twin.macro"
/* paths */
import { paths } from "paths"
/* components */
import Header from "@/components/Layout/Header"
import MainBackgroundVideo from "components/Common/MainBackgroundVideo"
import Footer from "components/Layout/Footer"
/* styles */
import { navbarStyles } from "@/components/Layout/Header/styles"

const Wrapper = styled.div`
  @media (min-width: 1024px) {
    ${tw`w-full`}
    padding-right: 0;
    padding-left: ${({ showHeader }) => (showHeader ? navbarStyles.desktop.width : "none")};
  }
`

const Container = styled.div`
  ${tw`w-full h-full auto-rows-min`}
`

const BackgroundVideoWrapper = styled.div`
  ${tw`fixed inset-0`}
`

const FixedBackgroundVideo = (videoProps) => {
  return (
    <BackgroundVideoWrapper>
      <MainBackgroundVideo {...videoProps} />
    </BackgroundVideoWrapper>
  )
}

const Layout = ({ children: mainContent, router }) => {
  const [showLayout, setShowLayout] = useState(true)

  useEffect(() => {
    if (router.pathname === paths.ageGate) return setShowLayout(false)
    if (showLayout) return
    setShowLayout(true)
  }, [router.pathname])
  return (
    <Wrapper showHeader={showLayout}>
      <FixedBackgroundVideo autoPlay={true} loop={true} />
      <Container>
        {showLayout && <Header desktopStyles={navbarStyles.desktop.styles}></Header>}
        {mainContent}
      </Container>
    </Wrapper>
  )
}

export default withRouter(Layout)
