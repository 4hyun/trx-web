const headerContainerStyles = {
  menuOpen: {
    open: {
      width: "600px",
    },
    close: {
      width: "100px",
    },
  },
  transitionDuration: ".3s",
};

const navbarStyles = {
  desktop: {
    width: "100px",
  },
};

const desktopMenuButtonStyles = {
  transitionDelay: headerContainerStyles.transitionDuration,
};

export { headerContainerStyles, navbarStyles, desktopMenuButtonStyles };
