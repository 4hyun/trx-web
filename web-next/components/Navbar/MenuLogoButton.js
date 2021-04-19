import React from "react";
import styled, { css } from "styled-components";
import {
  LogoCircleWhiteOnBlack as DesktopMenuIconOpen,
  DesktopMenuIconClose,
} from "components/Icons";
import tw from "twin.macro";

const Container = {
  Desktop: styled.div`
    ${tw`hidden lg:(absolute bottom-0 top-0 right-0 flex justify-center)`}
    @media(min-width: 768px) {
      width: 1px;
    }
  `,
  Mobile: styled.div`
    ${tw`absolute w-full mt-auto lg:hidden z-50`}
  `,
};

const STYLE_BY_MENU_STATE = {
  base: css`
    position: absolute;
    right: 4%;
    @media (min-width: 768px) {
      right: 10%;
    }
    @media (min-width: 1024px) {
      right: initial;
    }
    ${tw`cursor-pointer`}
    transition: top 0.3s, transform 0.3s;
  `,
  desktop: {
    open: css`
      top: 20%;
      transform: scale(0.5);
      :hover #BG {
        fill: rgb(104, 104, 104);
      }
    `,
    close: css`
      top: 50%;
      transform: translateY(-50%);
      :hover #Circle {
        fill: rgb(104, 104, 104);
      }
    `,
  },
  mobile: {
    open: css`
      ${tw`transform -translate-y-1/2 scale-50`}
      :hover #BG {
        fill: rgb(104, 104, 104);
      }
    `,
    close: css`
      ${tw`transform -translate-y-1/2 scale-75`}
      :hover #Circle {
        fill: rgb(104, 104, 104);
      }
    `,
  },
};

const ButtonWrapper = styled.div`
  ${STYLE_BY_MENU_STATE.base}
  @media (max-width: 1023px) {
    ${({ menuOpen }) => STYLE_BY_MENU_STATE.mobile[menuOpen ? "open" : "close"]}
  }
  @media (min-width: 1024px) {
    ${({ menuOpen }) =>
      STYLE_BY_MENU_STATE.desktop[menuOpen ? "open" : "close"]}
  }

  ${({ transitionDelay }) => ({ "transition-delay": transitionDelay })}
`;

export const DesktopMenuLogoButton = ({ styles, menuOpen, toggleMenu }) => {
  return (
    <Container.Desktop
      onTransitionEnd={(e) => {
        e.stopPropagation();
        console.log("different handler<Container.Desktop>");
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
    </Container.Desktop>
  );
};

export const MobileMenuLogoButton = ({ styles, menuOpen, toggleMenu }) => {
  return (
    <Container.Mobile>
      <ButtonWrapper menuOpen={menuOpen} onClick={toggleMenu}>
        {!menuOpen ? <DesktopMenuIconOpen /> : <DesktopMenuIconClose />}
      </ButtonWrapper>
    </Container.Mobile>
  );
};

export default DesktopMenuLogoButton;
