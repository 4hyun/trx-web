import React from "react"
import mapStyle from "components/StoreFinder/StoresMap/mapStyle.json"

const defaultValue = {
  center: {
    lat: 53.55603372683424,
    lng: -113.48928774950261,
  },
  zoom: 12,
  styles: mapStyle,
}

const StoreMapStateContext = React.createContext(defaultValue)

// state will be <StoreMapStateContext>
const StoreMapDispatchContext = React.createContext()

export { defaultValue, StoreMapStateContext, StoreMapDispatchContext }
