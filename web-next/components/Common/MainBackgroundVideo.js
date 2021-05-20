import Video from "components/Common/Video"

const MainBackgroundVideo = ({ autoPlay, loop }) => (
    <Video autoPlay={autoPlay} loop={loop} preload="metadata" muted>
      <source src="https://storage.googleapis.com/trx-web-static-media/trx-logo-vid-desktop.mp4" type="video/mp4" />
      {/* <source src="/static/video/banner.a0aaedfdc99f.ogv" type="video/ogg" /> */}
      {/* <source src="/static/video/banner.3b4d37a6ca54.webm" type="video/webm" /> */}
    </Video>
  )

export default MainBackgroundVideo
