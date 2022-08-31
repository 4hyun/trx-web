import PropTypes from 'prop-types'
import { useEffect } from 'react'
import tw, { styled } from 'twin.macro'
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

const FallbackBlock = styled.div`
  width: 100px;
  height: 150px;
  ${({ fallbackImageUrl }) =>
    `background: url(${fallbackImageUrl}) no-repeat center;`}
  border-radius: 4px;
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
        console.log('video load error!')
        setLoadErrored()
      }}
    />
  ) : (
    <FallbackBlock fallbackImageUrl={fallbackImageUrl} />
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
