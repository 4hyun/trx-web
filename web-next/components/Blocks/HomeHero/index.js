import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
/* components */
import VideoBackground from "./VideoBackground"
import ScrollDownIndicator from "components/Common/Indicators/ScrollDownIndicator"
import { animateScroll as scroll } from "react-scroll"
/* logo */
import TROLogo from "../../../public/logo/trWhiteLogo.svg"

const IndicatorWrapper = styled.div`
  ${tw`absolute left-0 right-0 bottom-0 h-1/4 flex items-center justify-center`}
`

const Container = styled.div`
  ${tw`relative col-span-full h-screen bg-tr-black`}
`

const OverlayContentWrapper = styled.div`
  ${tw`w-full h-full absolute top-0 left-0 flex justify-center items-center`}
`

const OverlayFill = styled.div`
  ${tw`w-full h-full absolute top-0`}
  background: radial-gradient(50% 50% at 50% 50%,#00000012 0%,rgb(55 55 55 / 0%) 65.62%,rgba(67,67,67,0) 100%);
  background-blend-mode: overlay;
`

const TitleText = styled.p`
  ${tw`text-tr-white font-accent font-bold text-4xl uppercase flex items-center select-none`}
  letter-spacing: 0.15em;
`

const titleText = "#Tunaaaamoonandback"

const videoOptions = {
  autoPlay: true,
  loop: true,
}

const HomeHero = () => {
  return (
    <Container>
      <VideoBackground {...videoOptions}></VideoBackground>
      <OverlayFill />
      <OverlayContentWrapper>
        <TitleText>
          {titleText}
          <TROLogo tw="ml-2" />
        </TitleText>
      </OverlayContentWrapper>
      <IndicatorWrapper>
        <ScrollDownIndicator
          onClick={() => {
            console.log("clicked")
            window.scroll(0, 1000)
          }}
        />
      </IndicatorWrapper>
    </Container>
  )
}

export default HomeHero
