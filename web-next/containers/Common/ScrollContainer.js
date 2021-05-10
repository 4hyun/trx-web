import tw, { styled } from "twin.macro"

const ScrollContainer = styled.main`
  ${tw`absolute top-0 space-y-10`}
  ${"" /* top: var(--MobileNavbarHeight); */}
  @media (min-width: 1024px) {
    ${tw`top-0 px-0 pt-0`}
    left: var(--DesktopNavbarWidth);
  }
`

export default ScrollContainer
