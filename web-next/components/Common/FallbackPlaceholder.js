import styled from 'styled-components'

const FallbackPlaceholder = styled.div`
  ${({ width = '100px', height = '150px' }) => ({ width, height })}
  ${({ fallbackImageUrl }) =>
    `background: url(${fallbackImageUrl}) no-repeat center;`}
  border-radius: 4px;
`

export default FallbackPlaceholder
