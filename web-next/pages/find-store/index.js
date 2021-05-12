import React from "react"
import styled, { css } from "styled-components"
import tw from "twin.macro"
import StoreMap from "components/StoreFinder/StoresMap"
import StoresPanel from "components/StoreFinder/StoresPanel"
import Footer from "components/Layout/Footer"

const GridLayout = styled.div`
  ${tw`w-full h-full grid grid-cols-12 grid-flow-row-dense`}
  ${"" /* ${tw`fixed inset-0 z-20`} */}
  ${"" /* margin-top: var(--MobileNavbarHeight); */}
  @media (min-width: 1024px) {
    padding-top: 0;
  }
`

const storeMapWrapperStyles = css`
  ${tw`col-span-full`}
  ${tw`md:col-start-4 md:col-end-13`}
  ${tw`lg:col-start-1 lg:col-end-10`}
`
const StoresPanelWrapper = styled.div`
  ${tw`relative col-span-full bg-tr-green-light`}
  ${tw`md:col-start-1 md:col-end-4 bg-tr-green-light`}
  ${tw`lg:col-start-10 lg:col-end-13`}
`

const FooterWrapper = styled.div`
  ${tw`col-span-full`}
`

const FindStorePage = () => {
  return (
    <GridLayout>
      <StoreMap wrapperStyles={storeMapWrapperStyles}></StoreMap>
      <StoresPanelWrapper>
        <StoresPanel />
      </StoresPanelWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </GridLayout>
  )
}

export default FindStorePage
