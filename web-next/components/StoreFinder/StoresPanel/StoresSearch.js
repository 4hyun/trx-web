import { useEffect } from "react"
import styled from "styled-components"

const StyledInput = styled.input`
  width: 80%;
  background-color: #fff !important;
  @media (min-width: 992px) {
  }
  height: 2rem;
  border: 0.5px solid #000;
  border-radius: 4px;
  box-sizing: content-box;
  padding: 12px 10px;
  font-size: 16px;
`

const StoresSearch = (props) => {
  const { onChange } = props
  const { data, fuseConfigs } = props
  let fuse
  const defaultFuseConfigs = {
    /**
     * At what point does the match algorithm give up. A threshold of 0.0
     * requires a perfect match (of both letters and location), a threshold
     * of 1.0 would match anything.
     */
    threshold: 0.05,
    /**
     * Determines approximately where in the text is the pattern expected to be found.
     */
    location: 0,
    /**
     * Determines how close the match must be to the fuzzy location
     * (specified by location). An exact letter match which is distance
     * characters away from the fuzzy location would score as a complete
     * mismatch. A distance of 0 requires the match be at the exact
     * location specified, a distance of 1000 would require a perfect
     * match to be within 800 characters of the location to be found
     * using a threshold of 0.8.
     */
    distance: 100,
    /**
     * When set to include matches, only the matches whose length exceeds this
     * value will be returned. (For instance, if you want to ignore single
     * character index returns, set to 2).
     */
    minMatchCharLength: 1,
    /**
     * List of properties that will be searched. This supports nested properties,
     * weighted search, searching in arrays of strings and objects.
     */
    keys: ["value"],
  }

  const handleInputChange = (e) => {
    const { value } = e.target
    onChange(value)
  }

  useEffect(() => {
    /* 
      DEV: code copied from 
      https://github.com/ghoshnirmalya/react-search-box/blob/master/src/index.js
      
    */
    // const configs = Object.assign({}, defaultFuseConfigs, fuseConfigs);
  }, [])

  return <StyledInput className={`${props.className}`} placeholder="Type store name here." onChange={handleInputChange} />
}

export default StoresSearch
