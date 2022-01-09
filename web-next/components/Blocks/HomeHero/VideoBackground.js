import React from "react"
import Video from "components/Common/Video"

const defaultOptions = {
}

const VideoBackground = (videoOptions) => (
    <Video {...videoOptions} muted>
      <source src="https://storage.googleapis.com/trx-web-static-media/hero-vid-1.MP4" type="video/mp4" />
    </Video>
  )

export default VideoBackground
