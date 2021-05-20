import React from "react"
import tw, { styled } from "twin.macro"
/* components */
import ScrollDownIndicator from "components/Common/Indicators/ScrollDownIndicator"
import { animateScroll as scroll } from "react-scroll"
/* utils */
import { getPageHeight } from "lib/utils"
import { useWindowSize } from "lib/hooks"
import VideoBackground from "./VideoBackground"
/* logo */
import TROLogo from "../../../public/logo/trWhiteLogo.svg"

const isMobile = (width) => width <= 475

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
  ${tw`w-full text-tr-white font-accent font-bold text-4xl uppercase flex items-center select-none mx-10 whitespace-pre xs:whitespace-normal lg:(mx-0 ml-20) xl:(text-5xl)`}
  & > svg {
    ${tw`w-1/4 h-auto mx-auto self-start xs:(w-auto mx-1 self-auto)`}
  }
`

const titleText = { mobile: "#Tunaaaa\nmoonand\nback", desktop: "#Tunaaaamoonandback" }

const videoOptions = {
  autoPlay: true,
  loop: true,
}

const HomeHero = () => {
  const { width } = useWindowSize()

  return (
    <Container>
      <VideoBackground {...videoOptions} />
      <OverlayFill />
      <OverlayContentWrapper>
        <TitleText>
          {isMobile(width) ? titleText.mobile : titleText.desktop}
          <TROLogo tw="ml-2" />
        </TitleText>
      </OverlayContentWrapper>
      <IndicatorWrapper>
        <ScrollDownIndicator
          onClick={() => {
            scroll.scrollTo(getPageHeight())
          }}
        />
      </IndicatorWrapper>
    </Container>
  )
}

export default HomeHero
