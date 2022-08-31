import React, { useEffect } from 'react'
import Video from '@/components/Common/Video/Video'
import useVideoError from '@/components/Common/Video/hooks/useVideoError'

const VIDEO_FALLBACK_IMAGE_URL = '/layout-video-fallback-backgroundx2.png'

const VideoBackground = (videoOptions) => {
  const { loadErrored, setLoadErrored, unsetLoadErrored } = useVideoError()
  useEffect(() => {
    return () => unsetLoadErrored()
  }, [])
  return (
    <Video
      {...videoOptions}
      muted
      loadErrored={loadErrored}
      fallbackImageUrl={VIDEO_FALLBACK_IMAGE_URL}
    >
      <source
        src="https://storage.googleapis.com/trx-web-static-media/hero-vid-1.MP4"
        type="video/mp4"
        onError={() => {
          console.log('video load error!')
          setLoadErrored()
        }}
      />
    </Video>
  )
}
export default VideoBackground
