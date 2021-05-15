import React, { useContext, useReducer, useEffect } from "react"
import styled, { css } from "styled-components"
import tw from "twin.macro"
import { fetchAPI } from "lib/api"
import { StoreFinderContext, StoreMapStateContext, storeMapContextInitialState } from "contexts"
import StoreMap from "components/StoreFinder/StoresMap"
import StoresPanel from "components/StoreFinder/StoresPanel"
import Footer from "components/Layout/Footer"
import reducer from "components/StoreFinder/reducer"

const GridLayout = styled.div`
  ${tw`w-full grid grid-cols-12 grid-flow-row-dense`}
  @media (min-width: 768px) {
    grid-auto-rows: 80vh minmax(max-content, auto);
  }
  @media (min-width: 1024px) {
    padding-top: 0;
  }
`

const storeMapWrapperStyles = css`
  ${tw`col-span-full`}
  ${tw`md:(col-start-4 col-end-13 h-full)`}
  ${tw`lg:(col-start-1 col-end-10)`}
`
const StoresPanelWrapper = styled.div`
  ${tw`relative col-span-full bg-tr-green-light`}
  ${tw`md:col-start-1 md:col-end-4 bg-tr-green-light`}
  ${tw`lg:col-start-10 lg:col-end-13`}
`

const FooterWrapper = styled.div`
  ${tw`col-span-full `}
`

const FindStorePage = ({ retailStores }) => {
  const { stores, searchValue } = useContext(StoreFinderContext)
  const [storeMapState, dispatch] = useReducer(reducer, storeMapContextInitialState)
  useEffect(() => { console.log("FindStorePage rendered")},[])

  return (
    <GridLayout>
      <StoreMapStateContext.Provider value={storeMapState}>
        <StoreFinderContext.Provider value={{ stores: retailStores, searchValue }}>
          <StoreMap wrapperStyles={storeMapWrapperStyles}></StoreMap>
          <StoresPanelWrapper>
            <StoresPanel dispatch={dispatch} />
          </StoresPanelWrapper>
          <FooterWrapper>
            <Footer />
          </FooterWrapper>
        </StoreFinderContext.Provider>
      </StoreMapStateContext.Provider>
    </GridLayout>
  )
}

export default FindStorePage

export const getStaticProps = async ({ preview = null }) => {
  const data = await fetchAPI(`
  query {
    stores(where:{retailer:true}) {
        id,
        retailer,
        lng,
        lat,
        name,
        address,
        place_id,
        phone
    }
  }
  `)
  const retailStores = data?.stores
  return { props: { retailStores } }
}
