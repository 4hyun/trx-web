import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { IconAngleDown } from "components/Icons";

const Container = styled.div``;
const AccordionSummaryContainer = styled.div``;
const DefaultAccordionSummary = styled.div``;
const ContentWrapper = styled.div``;

const styles = {
  defaultSize: "50px",
};

const sizeStyles = (size) => ({ width: size, height: size });

export const AccordionToggleIcon = styled(IconAngleDown)`
  ${({ size }) => sizeStyles(size ? size : styles.defaultSize)}
  ${({ open }) => open && tw`transform rotate-180`};
  &,
  & path {
    ${({ mouseOver }) => mouseOver && tw`text-tr-white fill-current`}
  }
  ${tw`transition-transform`};
`;

const Accordion = (props) => {
  const [open, setOpen] = useState(false);
  const [mouseOver, setMouseOver] = useState(null);
  const toggleAccordion = () => {
    console.log("toggleAccordion()");
    setOpen(!open);
  };
  const onMouseOver = () => {
    setMouseOver(true);
  };
  const onMouseLeave = () => {
    setMouseOver(false);
  };
  return (
    <Container onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      <AccordionSummaryContainer>
        {(props.renderAccordionSummary &&
          props.renderAccordionSummary({
            toggleAccordion,
            open,
            mouseOver,
          })) || (
          <DefaultAccordionSummary onClick={toggleAccordion}>
            Accordion Summary
            <AccordionToggleIcon open={open} mouseOver={mouseOver} />
          </DefaultAccordionSummary>
        )}
      </AccordionSummaryContainer>
      <ContentWrapper>
        {props.renderAccordionContent && props.renderAccordionContent({ open })}
      </ContentWrapper>
    </Container>
  );
};

export default Accordion;
