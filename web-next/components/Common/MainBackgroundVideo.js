import Video from '@/components/Common/Video/Video'
import { useEffect, useState } from 'react'
import useVideoError from './Video/hooks/useVideoError'

const VIDEO_FALLBACK_IMAGE_URL = '/layout-video-fallback-backgroundx2.png'

const MainBackgroundVideo = ({ autoPlay, loop }) => {
  const { loadErrored, setLoadErrored, unsetLoadErrored } = useVideoError()
  useEffect(() => {
    return () => unsetLoadErrored()
  }, [])
  return (
    <Video
      autoPlay={autoPlay}
      loop={loop}
      preload="metadata"
      muted
      loadErrored={loadErrored}
      fallbackImageUrl={VIDEO_FALLBACK_IMAGE_URL}
    >
      <source
        src="https://storage.googleapis.com/trx-web-static-media/trx-logo-vid-desktop.mp4"
        type="video/mp4"
        onStalled={() => {
          console.log('DEBUG MainBackgroundVideo stalled.')
        }}
        onError={() => {
          console.log('video load error!')
          setLoadErrored()
        }}
      />
      <source src="/layout-video-fallback-background.png" type="media/png" />
      {/* <source src="/static/video/banner.a0aaedfdc99f.ogv" type="video/ogg" /> */}
      {/* <source src="/static/video/banner.3b4d37a6ca54.webm" type="video/webm" /> */}
    </Video>
  )
}

export default MainBackgroundVideo
