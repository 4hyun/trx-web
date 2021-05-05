import React from "react"
import styled, { css } from "styled-components"
import tw from "twin.macro"
import StoreMap from "components/StoreFinder/StoresMap"

const GridLayout = styled.div`
  ${tw`fixed inset-0 z-20`}
  ${tw`w-full h-full grid grid-cols-12`}
`

const wrapperStyles = css`
  ${tw`col-start-1 col-end-13`}
`

const index = () => {
  return (
    <GridLayout>
      <StoreMap wrapperStyles={wrapperStyles}></StoreMap>
    </GridLayout>
  )
}

export default index
