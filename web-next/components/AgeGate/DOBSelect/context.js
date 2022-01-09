import React from 'react'

export const initialDOB = {
  y: null,
  m: null,
  d: null,
}

export const DOBContext = React.createContext({
  prov: null,
  dob: { ...initialDOB },
  setDOB: () => {},
  setProv: () => {},
})
