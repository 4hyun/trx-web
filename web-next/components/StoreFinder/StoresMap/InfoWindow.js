import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
/* utils */
import { capitalize } from 'lib/utils'

const StoreName = styled.h3`
  ${tw`font-primary text-base mb-1`}
`
const StoreInfoItem = styled.p``
const StoreInfoWindow = styled.div`
  bottom: calc(100% + 16px);
  ${tw`absolute bg-tr-white px-2.5 pt-2 pb-3 rounded-lg transform -translate-x-1/2 left-1/2 z-10`}
  :after {
    content: '';
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid var(--tr-white);
    position: absolute;
    bottom: 0;
    transform: translate(-50%, 100%);
    left: 50%;
  }
`
const InfoWindow = ({ phone, name }) => {
  return (
    <StoreInfoWindow>
      <StoreName>{capitalize(name)}</StoreName>
      {phone && (
        <StoreInfoItem>
          <a href={`tel:${phone}`}>{phone}</a>
        </StoreInfoItem>
      )}
    </StoreInfoWindow>
  )
}

export default InfoWindow
