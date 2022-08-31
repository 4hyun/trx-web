import Video from 'components/Common/Video'
import { useState } from 'react'

const MainBackgroundVideo = ({ autoPlay, loop }) => {
  const [loadErrored, setLoadErrored] = useState(null)
  return (
    <Video
      autoPlay={autoPlay}
      loop={loop}
      preload="metadata"
      muted
      loadErrored={loadErrored}
    >
      <source
        src="https://storage.googleapis.com/trx-web-static-media/trx-logo-vid-desktop.mp4"
        type="video/mp4"
        onStalled={() => {
          console.log('DEBUG MainBackgroundVideo stalled.')
        }}
        onError={() => {
          console.log('video load error!')
          setLoadErrored(true)
        }}
      />
      <source src="/layout-video-fallback-background.png" type="media/png" />
      {/* <source src="/static/video/banner.a0aaedfdc99f.ogv" type="video/ogg" /> */}
      {/* <source src="/static/video/banner.3b4d37a6ca54.webm" type="video/webm" /> */}
    </Video>
  )
}

export default MainBackgroundVideo
