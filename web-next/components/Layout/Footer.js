import NextLink from "next/link"
import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
/* components */
import SubscribeForm from "@/components/Common/Form/SubscribeForm"

/* TODO: display Footer when scrolled (once) */
const StyledFooter = styled.footer`
  ${tw`flex flex-col justify-center items-center w-full py-12 xl:(pt-12 pb-0)`}
  ${tw`bg-tr-black text-tr-white font-bungee select-none`}
  /* Temp Styles */
  min-height: var(--FooterMinHeight);
`

const Grid = styled.div`
  max-width: 1200px;
  ${tw`grid grid-rows-2 grid-cols-3 px-4 xs:px-8 w-full gap-y-6`}
  @media (min-width:1024px) {
    grid-template-rows: 135px 100px 1fr;
    ${tw`lg:px-20 xl:px-8`}
  }
`

const Column = styled.div`
  ${tw`flex flex-col justify-start items-center space-y-2`}
`

const Row = styled.div`
  ${tw`flex justify-center w-full h-full`}
`

const FormColumnOne = styled(Column)`
  ${tw`col-span-full`}
  ${tw`xl:(col-start-2 col-end-3)`}
  ${tw`items-start justify-center space-y-4`}
`
const FormColumnTwo = styled(Column)`
  ${tw`col-span-full`}
  ${tw`xl:(col-start-3 col-end-4)`}
  ${tw`items-start justify-center`}
`

const FormTitle = styled.h1``
const FormMessage = styled.p`
  ${tw`font-primary text-base max-w-md lg:max-w-sm`}
`

const StyledLink = styled.a`
  ${tw`cursor-pointer text-tr-white text-opacity-70 text-xs xs:text-base hover:text-opacity-100`}
`

const Link = ({ href, name }) => {
  return (
    <NextLink href={href} passHref>
      <StyledLink>{name}</StyledLink>
    </NextLink>
  )
}

const A = styled.a``

const BrandLogo = styled.img`
  height: 60px;
  width: auto;
  opacity: 0.7;
  :hover {
    opacity: 1;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <Grid>
        <FormColumnOne>
          <FormTitle>Subscribe for Free</FormTitle>
          <FormMessage>Get notified of the latest cannabis news, deals, events updates and more!</FormMessage>
        </FormColumnOne>
        <FormColumnTwo>
          <SubscribeForm></SubscribeForm>
        </FormColumnTwo>
        <Column>
          <Row tw="items-start space-x-4">
            <A href="https://tunaaaaroom.ca">
              <BrandLogo src="https://storage.googleapis.com/trx-web-static-media/tro-footer-logo-72x90.png" alt="Tunaaaa Room Logo" />
            </A>
            <A href="/">
              <BrandLogo src="https://storage.googleapis.com/trx-web-static-media/xtracts_flask-footer-logo-72x90.png" alt="Tunaaaa Room Logo" />
            </A>
          </Row>
        </Column>
        <Column>
          <Link href="/" name="Collections" />
          <Link href="/" name="Find Stores" />
        </Column>
        <Column>
          <Link href="/" name="Contact" />
        </Column>
      </Grid>
    </StyledFooter>
  )
}

export default Footer
