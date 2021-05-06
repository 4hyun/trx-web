import { css } from "styled-components"

export const createScrollbarStyles = ({ width, trackColor, handleColor, handleColorOnHover }) => css`
  /* width */
  ::-webkit-scrollbar {
    width: ${width};
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${trackColor};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${handleColor};
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${handleColorOnHover};
  }
`

export const scrollbarHideStyles = css`
  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`
