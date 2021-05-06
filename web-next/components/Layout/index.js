import React, { useEffect, useState } from "react"
import { withRouter } from "next/router"
import styled, { css } from "styled-components"
import tw from "twin.macro"
/* paths */
import { paths } from "paths"
/* components */
import Header from "components/Header/index"
import MainBackgroundVideo from "components/Common/MainBackgroundVideo"
import Footer from "components/Layout/Footer"
import { createScrollbarStyles } from "components/Common/Styles"

const styles = {
  desktop: {
    header: {
      width: "100px",
      styles: css`
        ${tw`z-40`}
      `,
    },
  },
}

const Wrapper = styled.div`
  ${tw`fixed top-0 left-0 right-0 w-screen h-full`}
  @media (min-width: 1024px) {
    ${tw`fixed top-0 left-0 right-0 w-screen overflow-x-hidden`}
    padding-right: 0;
    padding-left: ${({ showHeader }) => (showHeader ? styles.desktop.header.width : "none")};
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
// const scrollbarStyles = createScrollbarStyles(scrollbarStylesOptions)
// const WrapperInner = styled.div`
//   ${tw`fixed inset-0 h-auto overflow-y-scroll`}
//   & {
//     ${scrollbarStyles}
//   }
// `

const BackgroundVideoWrapper = styled.div`
  ${tw`fixed inset-0`}
`

const FixedBackgroundVideo = () => {
  return (
    <BackgroundVideoWrapper>
      <MainBackgroundVideo></MainBackgroundVideo>
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
      <FixedBackgroundVideo />
      <Container>
        {showLayout && <Header desktopStyles={styles.desktop.header.styles}></Header>}
        {mainContent}
      </Container>
    </Wrapper>
  )
}

export default withRouter(Layout)
