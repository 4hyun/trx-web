import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Video = styled.video`
  ${tw`w-full h-full object-cover`}
`;

const MainBackgroundVideo = () => {
  return (
    <Video autoPlay={true} loop={true} preload="metadata">
      <source src="/trx-logo-vid-desktop.mp4" type="video/mp4" />
      {/* <source src="/static/video/banner.a0aaedfdc99f.ogv" type="video/ogg" /> */}
      {/* <source src="/static/video/banner.3b4d37a6ca54.webm" type="video/webm" /> */}
    </Video>
  );
};

export default MainBackgroundVideo;
