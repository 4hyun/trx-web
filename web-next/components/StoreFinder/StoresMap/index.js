import { useContext } from "react"
import styled from "styled-components"
import tw from "twin.macro"
import GoogleMapReact from "google-map-react"
import { StoreFinderContext, StoreMapStateContext } from "contexts"

const StyledMarker = styled.div`
  white-space: pre;
  width: 40px;
  height: 40px;
  background-image: url("/marker-v2.png");
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
`
const Wrapper = styled.div`
  ${tw`w-full`}
  ${"" /* mobile height */}
  height:calc(100vh - var(--MobileNavbarHeight) - var(--MobileStoreFinderPanelHeadingHeight));
  ${"" /* other height */}
  ${({ wrapperStyles }) => wrapperStyles && wrapperStyles}
`

const StoreMap = (props) => {
  const { stores } = useContext(StoreFinderContext)
  const { center, zoom, styles } = useContext(StoreMapStateContext)
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
        options={() => ({ styles: styles })}
      >
        {stores &&
          stores.map(({ lat, lng, id }) => {
            return (
              <StyledMarker
                key={id}
                lat={+lat}
                lng={+lng}
                onClick={() => {
                  if (!dispatch) return
                  const action = {
                    type: "UPDATE_CENTER",
                    payload: { center: { lat, lng }, zoom: 12 },
                  }
                  dispatch(action)
                }}
              />
            )
          })}
      </GoogleMapReact>
    </Wrapper>
  )
}

export default StoreMap
