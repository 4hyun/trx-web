import { FacebookIcon, TwitterIcon, InstagramIcon } from "components/Icons"
import styled from "styled-components"

const SocialWrapper = styled.div`
  ${({ stylesheet }) => stylesheet && stylesheet}
`

const A = styled.a`
  & > svg {
    display: block;
  }
`

const SocialButtonGroup = ({ onClick, stylesheet, size }) => {
  return (
    <SocialWrapper onClick={onClick} stylesheet={stylesheet}>
      {/* <A href="" target="_blank">
        <FacebookIcon size={size} />
      </A>
      <A href="" target="_blank">
        <TwitterIcon size={size} />
      </A> */}
      <A href="https://www.instagram.com/tunaaaa_room" target="_blank">
        <InstagramIcon size={size} />
      </A>
    </SocialWrapper>
  )
}

export default SocialButtonGroup
