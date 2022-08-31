import PropTypes from 'prop-types'
import { useEffect } from 'react'
import tw, { styled } from 'twin.macro'
import FallbackPlaceholder from '../Common/FallbackPlaceholder'
import useMediaError from '../Common/hooks/useMediaError'

const SectionCoverBase = styled.img`
  ${tw`max-w-full`}
  ${({ loadErrored, fallbackImageUrl }) =>
    loadErrored &&
    fallbackImageUrl && {
      background: `url(${fallbackImageUrl}) 100%/100% no-repeat ;
`,
    }}
`

const SectionCover = (props) => {
  const { fallbackImageUrl } = props
  const { loadErrored, setLoadErrored, unsetLoadErrored } = useMediaError()
  useEffect(() => {
    return () => unsetLoadErrored()
  }, [])
  return !loadErrored ? (
    <SectionCoverBase
      {...props}
      loadErrored={loadErrored}
      onError={() => {
        setLoadErrored()
      }}
    />
  ) : (
    <FallbackPlaceholder fallbackImageUrl={fallbackImageUrl} />
  )
}

SectionCover.defaultProps = {
  src: '',
  srcSet: null,
  sizes: null,
  fallbackImageUrl: '/mock/CollectionCard/mock-600x600.png',
}

SectionCover.propTypes = {
  src: PropTypes.string,
  srcSet: PropTypes.string,
  sizes: PropTypes.string,
  fallbackImageUrl: PropTypes.string,
}

export default SectionCover
