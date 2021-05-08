import React from "react"
import Video from "components/Common/Video"

const VideoBackground = (videoOptions) => {
  return (
    <Video {...videoOptions}>
      <source src="/hero-vid-1.mp4" type="video/mp4" />
    </Video>
  )
}

export default VideoBackground
