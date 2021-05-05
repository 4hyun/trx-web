import { useContext } from "react"
import { StoreFinderContext, StoreMapDispatchContext } from "contexts"
import styled from "styled-components"

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  /* grid-row-gap: 35px; */
  width: 100%;
  height: auto;
  list-style: none;
  padding-left: 0;
`

const StyledItem = styled.li`
  width: 100%;
  height: auto;
  cursor: pointer;
  padding-top: 2rem;
  padding-bottom: 2rem;
  margin-bottom: 0;
  transition: padding 0.3s ease;
  padding-left: 32px;
  color: #fff;
  border-top: 0.5px solid #000;
  &:last-child {
    border-bottom: 0.5px solid #000;
  }
  @media (min-width: 992px) {
  }
  &:hover {
    background-color: #fff;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    transition: padding 0.3s ease;
  }
  &:hover * {
    color: #000;
  }
  &:active {
    background-color: #fff;
  }
`

const StoreName = styled.h3`
  color: #fff;
  font-family: "Cuprum", sans-serif;
  font-size: 24px;
  line-height: 1;
  margin-bottom: 0;
`

const StoreAddress = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  line-height: 1.5em;
  margin-top: 0.5rem;
  margin-bottom: 0;
`

const ScrollContainer = styled.div`
  --top-lg: 86px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: scroll;
  /* Scrollbar */
  /* width */
  ::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  @media (min-width: 992px) {
    top: var(--top-lg);
    position: absolute;
  }
`

const StoresList = (props) => {
  const { stores } = useContext(StoreFinderContext)
  const dispatch = useContext(StoreMapDispatchContext)
  const storesFilteredBySearch = false
  return (
    <ScrollContainer className="select-none">
      <StyledList>
        {(storesFilteredBySearch && storesFilteredBySearch.map(() => {})) ||
          (stores &&
            stores.map(({ id, cfields: { store_name, store_address, center } }, i) => {
              return (
                <StyledItem
                  key={id}
                  onClick={() => {
                    if (!dispatch) return
                    const action = {
                      type: "UPDATE_CENTER",
                      payload: { center: center, zoom: 12 },
                    }
                    dispatch(action)
                  }}
                >
                  <StoreName>{store_name}</StoreName>
                  <StoreAddress>{store_address}</StoreAddress>
                </StyledItem>
              )
            }))}
      </StyledList>
    </ScrollContainer>
  )
}

export default StoresList
