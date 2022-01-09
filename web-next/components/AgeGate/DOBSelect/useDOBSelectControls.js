import { useState } from 'react'

const useDOBSelectControls = () => {
  const SELECT_LIST = ['y', 'm', 'd']
  const [{ ymdKey, index }, setSelectToShow] = useState({
    ymdKey: null,
    index: 0,
  })
  const lastIndex = SELECT_LIST.length - 1
  const dobSelectNext = () => {
    if (index !== lastIndex)
      setSelectToShow({ ymdKey: SELECT_LIST[index + 1], index: index + 1 })
  }
  const dobSelectPrev = () =>
    index !== 0 &&
    setSelectToShow({ ymdKey: SELECT_LIST[index - 1], index: index - 1 })

  // eslint-disable-next-line no-shadow
  const startDobSelect = (ymdKey = 'y') => {
    setSelectToShow((prev) => ({ ...prev, ymdKey }))
  }
  return { ymdKey, dobSelectNext, dobSelectPrev, startDobSelect }
}

export default useDOBSelectControls
