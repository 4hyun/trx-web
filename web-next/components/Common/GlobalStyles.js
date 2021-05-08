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
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
