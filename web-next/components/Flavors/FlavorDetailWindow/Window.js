import styled from 'styled-components'
import tw from 'twin.macro'
/* shared styles */
import { borderRadiusLeft } from './styles'

const Window = styled.div`
  ${tw`relative bg-tr-white rounded-md row-start-2 row-end-5 col-start-2 col-end-12 lg:(h-1/2 col-start-3 col-end-10 my-auto shadow-xl)`}
  ${borderRadiusLeft}
`

export default Window
