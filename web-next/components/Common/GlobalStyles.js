import { createGlobalStyle } from "styled-components";
import tw, { css, theme, GlobalStyles as BaseStyles } from "twin.macro";

const CustomStyles = createGlobalStyle`
  :root {
    --DesktopNavbarWidth: 100px;
  }
  * {  
    -webkit-tap-highlight-color: transparent;
    ${tw`antialiased`};
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
