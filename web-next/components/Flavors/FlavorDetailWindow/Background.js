import tw, { styled } from 'twin.macro'

const Background = styled.div`
  z-index: 100;
  padding-top: var(--MobileNavbarHeight);
  @media (min-width: 1024px) {
    margin-left: var(--DesktopNavbarWidth);
  }
  ${tw`fixed inset-0 grid grid-cols-12 grid-rows-5 bg-tr-black bg-opacity-25 lg:(grid-rows-none mt-0)`}
`

export default Background
