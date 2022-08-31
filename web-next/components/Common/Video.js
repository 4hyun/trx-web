import styled from 'styled-components'
import tw from 'twin.macro'

const MainBackgroundVideoFallbackImageUrl =
  '/layout-video-fallback-backgroundx2.png'

const Video = styled.video`
  ${tw`w-full h-full object-cover`}
  ${({ loadErrored }) =>
    loadErrored && {
      background: `url(${MainBackgroundVideoFallbackImageUrl}) 100%/100% no-repeat ;
`,
    }}
`
export default Video
