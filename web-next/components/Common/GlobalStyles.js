import React from "react"
import { createGlobalStyle } from "styled-components"
import tw, { css, theme, GlobalStyles as BaseStyles } from "twin.macro"

const CustomStyles = createGlobalStyle`
  :root {
    --DesktopNavbarWidth: 75px;
    --MobileNavbarHeight: 60px;
    --FooterMinHeight: 200px;
  }
  * {  
    -webkit-tap-highlight-color: transparent;
    ${tw`antialiased`};
  }
  button {
    ${"" /* TODO: apply button reset styles here */}
  }
  body {
    ::-webkit-scrollbar {
      width: 12px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background-color: #222;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background-color: #000;
      border-radius:4px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #ccccc7;
    }
  }
`

const GlobalStyles = () => (
  <React.Fragment>
    <BaseStyles />
    <CustomStyles />
  </React.Fragment>
)

export default GlobalStyles
