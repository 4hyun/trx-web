import { useContext } from "react"
import styled from "styled-components"
import tw from "twin.macro"
import StoresList from "./StoresList.js"
import { StoreFinderContext, StoreMapDispatchContext } from "contexts"

const Container = styled.div`
  ${tw`grid`}
  ${tw`w-full h-full overflow-hidden`}
  ${tw`md:border-r lg:(border-l border-r-0) border-tr-black`}
  & > .StoreSearch {
    margin-left: 32px;
  }
  /* SearchBox */
  & > :nth-child(2) {
    @media (min-width: 1024px) {
      margin-top: 0;
      ${tw`-mx-8`}
    }
  }

  & > :nth-child(3) {
    /* margin-top: 1.5rem; */
  }
  @media (min-width: 768px) {
  }
  ${tw`lg:(py-0 px-8)`}
  @media (min-width: 1024px) {
    & > .StoreSearch {
      margin-left: 0;
    }
  }
`

const Heading = styled.h2`
  ${tw`font-bungee text-3xl flex items-center pl-8 text-white bg-tr-black`}
  ${tw`lg:(-mx-8)`}
  box-shadow: 0 1px 12px 5px rgba(60,70,48,0.48);
  height: var(--MobileStoreFinderPanelHeadingHeight);
  font-weight: 400;
  line-height: 1;
  letter-spacing: 1px;
  margin-bottom: 0;
`

const StoresPanel = (props) => {
  // const { stores } = useContext(StoreFinderContext)
  return (
    <Container>
      <Heading>Find Stores</Heading>
      {/* <StoresSearch
        className="StoreSearch"
        allStores={stores}
        onChange={(value) => setInputValue(value)}
      ></StoresSearch> */}
      <StoreMapDispatchContext.Provider value={props.dispatch}>
        <StoresList></StoresList>
      </StoreMapDispatchContext.Provider>
    </Container>
  )
}

export default StoresPanel
