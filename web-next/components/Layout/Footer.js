import React, {memo} from "react"
import NextLink from "next/link"
import styled, { css } from "styled-components"
import tw from "twin.macro"
/* components */
import SubscribeForm from "@/components/Common/Form/SubscribeForm"
import SocialButtonGroup from "components/Common/Social"
/* TODO: display Footer when scrolled (once) */
const StyledFooter = styled.footer`
  ${tw`mt-auto flex flex-col justify-center items-center w-full py-12 xl:(py-12)`}
  ${tw`bg-tr-black text-tr-white font-bungee select-none`}
  /* Temp Styles */
  min-height: var(--FooterMinHeight);
`

const Grid = styled.div`
  max-width: 1200px;
  ${tw`grid grid-rows-2 grid-cols-3 px-6 xs:px-8 w-full gap-y-6`}
  @media (min-width:1024px) {
    ${tw`lg:px-20 xl:px-8 auto-rows-auto gap-y-14`}
  }
`

const Column = styled.div`
  ${tw`flex flex-col justify-start items-center space-y-2`}
`

const SocialColumn = styled.div`
  ${tw`flex justify-start items-start col-span-full`}
  ${tw`xs:(col-auto justify-end)`}
`

const socialButtonGroupCSS = css`
  ${tw`flex justify-end space-x-4`}
  & svg {
    ${tw`hover:opacity-60 hover:cursor-pointer`}
  }
`

const Row = styled.div`
  ${tw`flex w-full h-full`}
`

const SitemapRow = styled(Row)`
  ${tw`h-auto`}
  & > :not(:last-child) {
    margin-right: 1rem;
  }
  & > * {
    ${tw`leading-10! xs:leading-8!`}
  }
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
  ${tw`font-primary text-sm w-10/12`}
`

const StyledLink = styled.a`
  ${tw`cursor-pointer text-tr-white text-opacity-90 text-xs xs:text-base hover:text-opacity-100`}
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
  height: 3em;
  width: auto;
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
        <Column tw="col-span-full xs:col-span-1">
          <Row tw="justify-start items-start space-x-6 flex-wrap xl:justify-center">
            <A href="https://tunaaaaroom.ca">
              <BrandLogo src="https://storage.googleapis.com/trx-web-static-media/tro-footer-logo-72x90.png" alt="Tunaaaa Room Logo" />
            </A>
            <A href="/">
              <BrandLogo src="https://storage.googleapis.com/trx-web-static-media/xtracts_flask-footer-logo-72x90.png" alt="Tunaaaa Room Logo" />
            </A>
          </Row>
        </Column>
        <Column>
          <SitemapRow tw="flex-wrap">
            <Link href="/collections" name="Collections" />
            <Link href="/flavors" name="Flavors" />
            <Link href="/find-store" name="Find Stores" />
            {/* <Link href="contact" name="Contact" /> */}
          </SitemapRow>
        </Column>
        <SocialColumn>
          <SocialButtonGroup stylesheet={socialButtonGroupCSS} size={"1.5rem"} />
        </SocialColumn>
      </Grid>
    </StyledFooter>
  )
}

export default memo(Footer)
