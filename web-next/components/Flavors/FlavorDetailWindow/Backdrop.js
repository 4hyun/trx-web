import tw, { styled } from 'twin.macro'

const Backdrop = styled.div`
  ${tw`z-30`}
  ${'' /* padding-top: var(--MobileNavbarHeight); */}
  @media (min-width: 1024px) {
    margin-left: var(--DesktopNavbarWidth);
  }
  ${
    '' /* ${tw`fixed inset-0 grid grid-cols-12 grid-rows-5 bg-tr-black bg-opacity-25 lg:(grid-rows-none mt-0)`} */
  }
  ${'' /* TODO: swap grid styles with flexbox */}
  ${tw`fixed inset-0 grid grid-cols-12 grid-rows-5 bg-tr-black bg-opacity-25 lg:(flex justify-center items-center)`}
  @media screen and (min-width: 1024px) {
    --p-x: 10%;
    padding-left: var(--p-x);
    padding-right: var(--p-x);
  }
`

export default Backdrop
