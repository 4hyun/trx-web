import React from "react"
import Video from "components/Common/Video"

const VideoBackground = (videoOptions) => {
  return (
    <Video {...videoOptions} muted={true}>
      <source src="https://storage.googleapis.com/trx-web-static-media/hero-vid-1.MP4" type="video/mp4" />
    </Video>
  )
}

export default VideoBackground
