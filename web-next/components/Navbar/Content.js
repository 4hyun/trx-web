import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { navbarStyles } from "components/Header/styles";
import Accordion, { AccordionToggleIcon } from "components/Common/Accordion";

const Container = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: ${(props) =>
      props.transitionEnd.afterMenuOpen ? "block" : "none"};
    width: calc(100% - ${navbarStyles.desktop.width});
    ${tw`px-16 py-8 h-full float-right`}
  }
`;

const List = styled.ul`
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  letter-spacing: -0.25px;
`;

const Item = styled.li`
  ${tw`rounded-xl cursor-pointer transition-spacing`}
  ${tw`flex items-center px-2.5 pt-2.5 pb-3`}
  ${tw`text-tr-black text-5xl leading-snug`}
  ${tw`hover:(bg-tr-black text-tr-white pl-6)`}
  font-weight: inherit;
  letter-spacing: inherit;
`;

const FeatureContent = styled.div`
  ${tw`relative top-4`}
  ${tw`rounded-xl bg-tr-black text-tr-white`}
  ${tw`hidden px-2.5 pt-2.5 pb-3`}
  ${({ open }) => open && tw`flex`}
`;

const FeatureItem = styled.div`
  ${tw`font-accent font-bold text-base`}
`;

const AccordionSummary = styled(Item)`
  ${tw`justify-between pr-6`}
`;

const Content = ({ transitionEnd }) => {
  return (
    <Container transitionEnd={transitionEnd}>
      <List>
        <Item>Collection</Item>
        <Item>Find Store</Item>
        <Accordion
          renderAccordionSummary={({ toggleAccordion, open, mouseOver }) => (
            <AccordionSummary onClick={toggleAccordion}>
              Feature
              <AccordionToggleIcon
                open={open}
                mouseOver={mouseOver}
                size={"32px"}
              />
            </AccordionSummary>
          )}
          renderAccordionContent={({ open }) => (
            <FeatureContent open={open}>
              <FeatureItem>Some Feature Content here</FeatureItem>
            </FeatureContent>
          )}
        />
      </List>
    </Container>
  );
};

export default Content;
