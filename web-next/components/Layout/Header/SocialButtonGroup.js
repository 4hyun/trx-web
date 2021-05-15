import { memo } from "react"
import tw, { css } from "twin.macro"
import BaseSocialButtonGroup from "components/Common/Social"
import NavbarRow from "components/Navbar/NavbarRow"
import navbarElementSharedStyles from "components/Navbar/styles"

const socialButtonGroupCSS = css`
  width: 38px;
  ${tw`flex flex-col space-y-4`}
  ${navbarElementSharedStyles}
`
const SocialButtonGroup = () => (
  <NavbarRow tw="hidden lg:(flex flex-1 items-end pb-6)">
    <BaseSocialButtonGroup stylesheet={socialButtonGroupCSS} />
  </NavbarRow>
)

export default SocialButtonGroup
