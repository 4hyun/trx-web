import tw, { css } from "twin.macro"

const headerContainerStyles = {
  menuOpen: {
    open: {
      width: "500px",
    },
    close: {
      width: "75px",
    },
  },
  transitionDuration: ".3s",
}

const navbarStyles = {
  desktop: {
    width: "75px",
    styles: css`
      ${tw`z-40`}
    `,
  },
}

const menuLogoButtonStyles = {
  transitionDelay: headerContainerStyles.transitionDuration,
}

export { headerContainerStyles, navbarStyles, menuLogoButtonStyles }
