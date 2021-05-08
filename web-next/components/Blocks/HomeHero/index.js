import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
/* components */
import VideoBackground from "./VideoBackground"

const Container = styled.div`
  ${tw`col-span-full h-screen bg-tr-black`}
`

const videoOptions = {
  autoPlay: true,
  loop: true,
}

const HomeHero = () => {
  return (
    <Container>
      <VideoBackground {...videoOptions}></VideoBackground>
    </Container>
  )
}

export default HomeHero
