import styled from 'styled-components'
import tw from 'twin.macro'

const Video = styled.video`
  ${tw`w-full h-full object-cover`}
  ${({ loadErrored, fallbackImageUrl }) =>
    loadErrored && fallbackImageUrl
      ? {
          background: `url(${fallbackImageUrl}) 100%/100% no-repeat ;
`,
        }
      : { background: 'green' }}
`
export default Video
