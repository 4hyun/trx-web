import {
  OPEN_DESKTOP_MENU,
  CLOSE_DESKTOP_MENU,
  SHOW_MENU_CONTENT,
  HIDE_MENU_CONTENT,
} from "./constants";

const reducer = (state, action) => {
  switch (action.type) {
    case CLOSE_DESKTOP_MENU: {
      return { ...state, menuOpen: !state.menuOpen };
    }
    case OPEN_DESKTOP_MENU: {
      return { ...state, menuOpen: !state.menuOpen };
    }
    case SHOW_MENU_CONTENT: {
      let transitionEnd = {
        afterMenuOpen: true,
        afterMenuClose: false,
      };
      return { ...state, transitionEnd };
    }
    case HIDE_MENU_CONTENT: {
      let transitionEnd = {
        afterMenuOpen: false,
        afterMenuClose: true,
      };
      return { ...state, transitionEnd };
    }
    default:
      return state;
  }
};

export default reducer;
