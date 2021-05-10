import Link from "next/link"
import React, { useEffect } from "react"
import styled from "styled-components"
import tw from "twin.macro"
import { navbarStyles } from "@/components/Layout/Header/styles"
import Accordion, { AccordionToggleIcon } from "components/Common/Accordion"

const Container = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: ${(props) => (props.transitionEnd.afterMenuOpen ? "block" : "none")};
    width: calc(100% - ${navbarStyles.desktop.width});
    ${tw`px-12 py-8 h-full float-right`}
  }
`

const List = styled.ul`
  ${tw`font-bungee text-xl`}
  letter-spacing: -0.25px;
`

const Item = styled.a`
  ${tw`rounded-xl cursor-pointer transition-spacing`}
  ${tw`flex items-center px-2.5 pt-2.5 pb-3`}
  ${tw`text-tr-black text-3xl leading-snug`}
  ${tw`hover:(bg-tr-black text-tr-white pl-6)`}
  font-weight: inherit;
  letter-spacing: inherit;
`

const FeatureContent = styled.div`
  ${tw`relative top-4 flex flex-col space-y-4`}
  ${tw`rounded-xl bg-tr-black text-tr-white`}
  ${tw`hidden px-2.5 py-4`}
  ${({ open }) => open && tw`flex`}
`

const FeatureItem = styled.div`
  ${tw`font-bungee text-xl pl-2 leading-10`}
`

const AccordionSummary = styled(Item)`
  ${tw`justify-between pr-6`}
`

const DELAY_CLOSE_MENU_TIME = 500
export const DesktopMenu = ({ transitionEnd, toggleMenu }) => {
  // useEffect(() => {
  //   console.log("DesktopMenu rendered")
  // })

  const delayCloseMenu = () => {
    setTimeout(() => {
      toggleMenu()
    }, DELAY_CLOSE_MENU_TIME)
  }
  return (
    <Container transitionEnd={transitionEnd}>
      <List>
        <Link href="/" passHref>
          <Item onClick={delayCloseMenu}>Home</Item>
        </Link>
        <Link href="/collections" passHref>
          <Item onClick={delayCloseMenu}>Collection</Item>
        </Link>
        <Link href="/find-store" passHref>
          <Item onClick={delayCloseMenu}>Find Store</Item>
        </Link>
        <Accordion
          renderAccordionSummary={({ toggleAccordion, open, mouseOver }) => (
            <AccordionSummary onClick={toggleAccordion}>
              Flavors
              <AccordionToggleIcon open={open} mouseover={mouseOver} size={"32px"} />
            </AccordionSummary>
          )}
          renderAccordionContent={({ open }) => (
            <FeatureContent open={open}>
              <FeatureItem>coming soon!</FeatureItem>
              <FeatureItem>coming soon!</FeatureItem>
              <FeatureItem>coming soon!</FeatureItem>
              <FeatureItem>coming soon!</FeatureItem>
              <FeatureItem>coming soon!</FeatureItem>
              <FeatureItem>coming soon!</FeatureItem>
              {/* TODO: get flavors and list them here */}
            </FeatureContent>
          )}
        />
      </List>
    </Container>
  )
}
