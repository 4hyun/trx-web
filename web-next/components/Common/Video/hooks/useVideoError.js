import { useState } from 'react'

const useVideoError = () => {
  const [loadErrored, setState] = useState(null)
  return {
    loadErrored,
    setLoadErrored: () => setState(true),
    unsetLoadErrored: () => setState(false),
  }
}

export default useVideoError
