import { useContext } from 'react'
import { StoreFinderContext, StoreMapDispatchContext } from 'contexts'
import styled from 'styled-components'
import tw from 'twin.macro'

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
  transition: padding 0.3s ease;
  color: #fff;
  ${tw`w-full h-auto cursor-pointer px-6 py-7 mb-0 border-t border-tr-black`}
  &:last-child {
    ${tw`border-b border-tr-black`}
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
  ${tw`font-primary text-lg font-bold`}
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
    background: transparent;
    border-radius: 3px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    ${tw`bg-tr-white`}
    border-radius: 3px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #888;
  }
  @media (min-width: 992px) {
    ${
      '' /* top: var(--top-lg);
    position: absolute; */
    }
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
            stores.map(({ id, name, formatted_address, lat, lng }, i) => (
              <StyledItem
                key={id}
                onClick={() => {
                  if (!dispatch) return
                  const action = {
                    type: 'UPDATE_CENTER',
                    payload: { center: { lat, lng }, zoom: 12, selected: id },
                  }
                  dispatch(action)
                }}
              >
                <StoreName>{name}</StoreName>
                <StoreAddress>{formatted_address}</StoreAddress>
              </StyledItem>
            )))}
      </StyledList>
    </ScrollContainer>
  )
}

export default StoresList
