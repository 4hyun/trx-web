import { css } from "styled-components"
import tw from "twin.macro"

const navbarElementSharedStyles = css`
  & svg {
    ${tw`hover:opacity-60 hover:cursor-pointer`}
  }
`

export default navbarElementSharedStyles
