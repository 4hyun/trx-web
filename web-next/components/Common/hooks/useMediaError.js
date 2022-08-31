import { useState } from 'react'

const useMediaError = () => {
  const [loadErrored, setState] = useState(null)
  return {
    loadErrored,
    setLoadErrored: () => setState(true),
    unsetLoadErrored: () => setState(false),
  }
}

export default useMediaError
