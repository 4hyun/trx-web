import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"
import { ChevronCompactDown } from "components/Icons"
import { bounce } from "components/Common/Keyframes"

const ScrollDownIndicator = styled(ChevronCompactDown)`
  animation: ${bounce} 1.5s ease infinite;
  bottom: 2rem;
  font-size: 2rem;
  height: 4rem;
  left: 50%;
  letter-spacing: -1px;
  line-height: 4rem;
  margin-left: -3rem;
  opacity: 0.8;
  text-align: center;
  width: 6rem;
  ${tw`absolute text-tr-white transform-gpu hover:cursor-pointer`}
`

ScrollDownIndicator.propTypes = {
  onClick: PropTypes.func,
}

export default ScrollDownIndicator
