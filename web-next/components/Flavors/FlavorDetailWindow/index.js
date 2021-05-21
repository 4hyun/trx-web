import { useMemo } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
/* utils */
import { srcSetMapFn } from 'lib/utils'
/* components */
import Background from './Background'
import Window from './Window'
import { ArrowBack } from '@/components/Icons'

/* shared styles */
import { borderRadiusLeft } from './styles'

const Row = tw.div`flex h-full`
const CoverWrapper = tw.div`flex-1`
const Cover = styled.img`
  ${tw`w-full h-full object-cover`}${borderRadiusLeft}
`
const GridColumn = tw.div`flex-1 grid p-4 auto-rows-auto`
const FlavorHeader = tw.h2`font-accent-2 text-3xl`
const Description = tw.p`pt-4 h-full text-sm overflow-y-scroll lg:(text-base) -mr-3 pr-3`
const ArrowBackIcon = styled(ArrowBack)`
  ${tw`absolute right-4 bottom-4 w-8 cursor-pointer transform active:(-translate-x-2)`}
`

const sizes = `(max-width: 475px) 40vw, 400px`
const FlavorDetailWindow = ({ flavor, hide }) => {
  const {
    name,
    description,
    main_img: { formats },
  } = flavor
  const srcSet = useMemo(
    () =>
      Object.keys(formats)
        .map((formatKey) => srcSetMapFn(formatKey, formats))
        .join(),
    [flavor]
  )
  return (
    <Background>
      <Window>
        <Row>
          <CoverWrapper>
            <Cover src={formats.url} srcSet={srcSet} sizes={sizes} />
          </CoverWrapper>
          <GridColumn>
            <FlavorHeader>{name}</FlavorHeader>
            <Description>{description}</Description>
          </GridColumn>
        </Row>
        <ArrowBackIcon onClick={hide} />
      </Window>
    </Background>
  )
}

export default FlavorDetailWindow
