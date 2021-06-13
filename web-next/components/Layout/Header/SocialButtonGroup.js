import { memo } from 'react'
import tw, { css } from 'twin.macro'
import BaseSocialButtonGroup from 'components/Common/Social'
import Row from '@/components/DesktopSideNavbar/Row'
import navbarElementSharedStyles from '@/components/DesktopSideNavbar/styles'

const socialButtonGroupCSS = css`
  width: 38px;
  ${tw`flex flex-col space-y-4`}
  ${navbarElementSharedStyles}
`
const SocialButtonGroup = () => (
  <Row tw="hidden lg:(flex flex-1 items-end pb-6)">
    <BaseSocialButtonGroup stylesheet={socialButtonGroupCSS} />
  </Row>
)

export default memo(SocialButtonGroup)
