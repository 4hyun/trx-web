import React from "react";
import styled, { css } from "styled-components";
import {
  LogoCircleWhiteOnBlack as DesktopMenuIconOpen,
  DesktopMenuIconClose,
} from "components/Icons";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`absolute bottom-0 top-0 right-0 flex justify-center`}
  width: 1px;
`;

const STYLE_BY_MENU_STATE = {
  base: css`
    position: absolute;
    transition: top 0.3s, transform 0.3s;
    ${tw`cursor-pointer`}
  `,
  open: css`
    top: 20%;
    transform: translateY(-50%);
    transform: scale(0.5);
    :hover #BG {
      fill: rgb(35, 35, 35, 0.6);
    }
  `,
  close: css`
    top: 50%;
    transform: translateY(-50%);
    :hover #Circle {
      fill: rgb(35, 35, 35, 0.6);
    }
  `,
};

const ButtonWrapper = styled.div`
  ${STYLE_BY_MENU_STATE.base}
  ${({ menuOpen }) => STYLE_BY_MENU_STATE[menuOpen ? "open" : "close"]}
  ${({ transitionDelay }) => ({ "transition-delay": transitionDelay })}
`;

const DesktopMenuButton = ({ styles, menuOpen, toggleMenu }) => {
  return (
    <Container
      onTransitionEnd={(e) => {
        e.stopPropagation();
        console.log("different handler<Container>");
      }}
    >
      <ButtonWrapper
        menuOpen={menuOpen}
        onClick={toggleMenu}
        transitionDelay={styles.transitionDelay}
        onTransitionEnd={(e) => {
          e.stopPropagation();
          console.log("different handler<ButtonWrapper>");
        }}
      >
        {!menuOpen ? <DesktopMenuIconOpen /> : <DesktopMenuIconClose />}
      </ButtonWrapper>
    </Container>
  );
};

export default DesktopMenuButton;
