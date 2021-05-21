import React, { useEffect, useState } from 'react'
import { withRouter } from 'next/router'
import styled from 'styled-components'
import tw from 'twin.macro'
import { AGE_GATE_LS_KEY } from 'components/AgeGate/constants'
/* context */
import AgeGateContext from 'components/AgeGate/context'
/* paths */
import { paths } from 'paths'
/* components */
import Header from '@/components/Layout/Header'
import MainBackgroundVideo from '@/components/Common/MainBackgroundVideo'
import ScrollTopButton from '@/components/Common/ScrollTopButton'
/* styles */
import { navbarStyles } from '@/components/Layout/Header/styles'

const Wrapper = styled.div`
  ${tw`w-full h-screen`}
  @media (min-width: 1024px) {
    padding-right: 0;
    padding-left: ${({ paddingLeft }) =>
      paddingLeft ? navbarStyles.desktop.width : 'none'};
  }
`

const Container = styled.div`
  ${tw`w-full h-full auto-rows-min`}
`

const BackgroundVideoWrapper = styled.div`
  ${tw`fixed inset-0`}
`

const FixedBackgroundVideo = (videoProps) => (
  <BackgroundVideoWrapper>
    <MainBackgroundVideo {...videoProps} />
  </BackgroundVideoWrapper>
)

const Layout = ({ children: mainContent, router }) => {
  const [ageCheckedValue, setAgeChecked] = useState(null)
  const [showHeader, setShowHeader] = useState(true)
  const ageGateContextValue = { ageCheckedValue, setAgeChecked }
  useEffect(() => {
    // console.log("router ", router);
    if (router.pathname === '/') {
      // console.log('>>DEBUG: <MyApp/> router.pathname === "/"')
      const ageCheckValue = localStorage.getItem(AGE_GATE_LS_KEY)
      if (ageCheckValue) {
        setAgeChecked(ageCheckValue)
      } else {
        router.replace('age-gate')
      }
    }
  }, [router.pathname])

  useEffect(() => {
    // console.log(">>DEBUG : <Layout/> useEffect() ")
    if (router.pathname === paths.ageGate) return setShowHeader(false)
    if (showHeader) return null
    setShowHeader(true)
    return null
  }, [router.pathname])

  return (
    <Wrapper paddingLeft={showHeader}>
      {router.pathname === '/age-gate' && (
        <FixedBackgroundVideo autoPlay loop />
      )}
      <Container>
        <AgeGateContext.Provider value={ageGateContextValue}>
          {showHeader && <Header desktopStyles={navbarStyles.desktop.styles} />}
          {mainContent}
        </AgeGateContext.Provider>
      </Container>
      <ScrollTopButton />
    </Wrapper>
  )
}

export default withRouter(Layout)
