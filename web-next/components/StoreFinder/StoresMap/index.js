import { useContext } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import GoogleMapReact from 'google-map-react'
import { StoreFinderContext, StoreMapStateContext } from 'contexts'
/* utils */
import { capitalize } from 'lib/utils'

const StyledMarker = styled.div`
  white-space: pre;
  width: 30.63px;
  height: 64px;
  background-image: url('/marker-v2.png');
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  position: relative;
`
const Wrapper = styled.div`
  ${tw`w-full`}
  ${'' /* mobile height */}
  height:calc(100vh - var(--MobileNavbarHeight) - var(--MobileStoreFinderPanelHeadingHeight));
  ${'' /* other height */}
  ${({ wrapperStyles }) => wrapperStyles && wrapperStyles}
`

const StoreName = styled.h3`
  ${tw`font-primary text-base mb-1`}
`
const StoreInfoItem = styled.p``
const StoreInfoWindow = styled.div`
  bottom: calc(100% + 16px);
  ${tw`absolute bg-tr-white px-2.5 pt-2 pb-3 rounded-lg transform -translate-x-1/2 left-1/2`}
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

const StoreMap = (props) => {
  const { stores } = useContext(StoreFinderContext)
  const { center, zoom, styles, selected } = useContext(StoreMapStateContext)
  const { dispatch, wrapperStyles } = props

  return (
    <Wrapper wrapperStyles={wrapperStyles}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        }}
        center={{ lat: +center.lat, lng: +center.lng }}
        onChange={() => {
          // console.log("map center changed")
        }}
        zoom={zoom}
        options={() => ({ styles })}
      >
        {stores &&
          stores.map(({ lat, lng, id, name, phone }) => (
            <StyledMarker
              key={id}
              lat={+lat}
              lng={+lng}
              onClick={() => {
                if (!dispatch) return

                const action = {
                  type: 'UPDATE_CENTER',
                  payload: { center: { lat, lng }, zoom: 12, selected: id },
                }
                dispatch(action)
              }}
            >
              {selected === id && (
                <StoreInfoWindow>
                  <StoreName>{capitalize(name)}</StoreName>
                  {phone && (
                    <StoreInfoItem>
                      <a href={`tel:${phone}`}>{phone}</a>
                    </StoreInfoItem>
                  )}
                </StoreInfoWindow>
              )}
            </StyledMarker>
          ))}
      </GoogleMapReact>
    </Wrapper>
  )
}

export default StoreMap
