import { UPDATE_CENTER } from "./constants"

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_CENTER: {
      return { ...state, ...action.payload }
    }
    default:
      return state
  }
}

export default reducer
