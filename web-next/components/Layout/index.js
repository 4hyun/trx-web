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
import { createScrollbarStyles } from "components/Common/Styles"

const Wrapper = styled.div`
  ${tw`absolute top-0 left-0 right-0 w-screen h-full`}
  @media (min-width: 1024px) {
    ${tw`w-screen`}
    padding-right: 0;
    padding-left: ${({ showHeader }) => (showHeader ? navbarStyles.desktop.width : "none")};
  }
`

const Container = styled.div`
  ${tw`w-full h-full auto-rows-min`}
`

const scrollbarStylesOptions = {
  width: "10px",
  trackColor: "#f1f1f1",
  handleColor: "#888",
  handleColorOnHover: "#555",
}

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
