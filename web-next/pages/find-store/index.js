import React, { useContext } from "react"
import styled, { css } from "styled-components"
import tw from "twin.macro"
import { fetchAPI } from "lib/api"
import { StoreFinderContext } from "contexts"
import StoreMap from "components/StoreFinder/StoresMap"
import StoresPanel from "components/StoreFinder/StoresPanel"
import Footer from "components/Layout/Footer"

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

  return (
    <GridLayout>
      <StoreFinderContext.Provider value={{ stores: retailStores, searchValue }}>
        <StoreMap wrapperStyles={storeMapWrapperStyles}></StoreMap>
        <StoresPanelWrapper>
          <StoresPanel />
        </StoresPanelWrapper>
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </StoreFinderContext.Provider>
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
        formatted_address,
        place_id,
        trx_formatted_phone_number
    }
  }
  `)
  const retailStores = data?.stores
  return { props: { retailStores } }
}
