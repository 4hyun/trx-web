import { useContext } from 'react'
import styled from "styled-components";
import StoresList from "./StoresList.js";
import { StoreFinderContext, StoreMapDispatchContext } from "contexts";

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  & > .StoreSearch {
    margin-left: 32px;
  }
  /* SearchBox */
  & > :nth-child(2) {
    margin-top: 2rem;
  }

  & > :nth-child(3) {
    /* margin-top: 1.5rem; */
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    padding: 0 32px;
    & > .StoreSearch {
      margin-left: 0;
    }
  }
`;

const Heading = styled.h2`
  font-family: "Bangers", sans-serif;
  font-weight: 400;
  line-height: 1;
  font-size: 40px;
  letter-spacing: 1px;
  margin-top: 3rem;
  margin-bottom: 0;
  margin-left: 32px;
  color: #fff;
  @media (min-width: 992px) {
    margin-left: 0;
  }
`;

const StoresPanel = (props) => {
  const { stores } = useContext(StoreFinderContext);
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
  );
};

export default StoresPanel;
