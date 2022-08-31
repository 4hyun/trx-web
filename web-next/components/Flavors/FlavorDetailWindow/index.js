import { useEffect, useMemo } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
/* hooks */
import useLockBodyScroll from 'lib/hooks/useLockBodyScroll'
/* utils */
import { srcSetMapFn } from 'lib/utils'
/* components */
import { ArrowBack } from '@/components/Icons'
import useMediaError from '@/components/Common/hooks/useMediaError'
import FallbackPlaceholder from '@/components/Common/FallbackPlaceholder'
import Backdrop from './Backdrop'
import Window from './Window'
import { borderRadiusLeft } from './styles'

const Row = tw.div`flex h-full w-full`
const ImageWrapper = tw.div`flex-1`
const Image = styled.img`
  ${tw`w-full h-full object-cover object-center`}${borderRadiusLeft}
`

const GridColumn = styled.div`
  ${tw`flex-1 grid auto-rows-auto gap-y-2 px-4 pb-2`}
  grid-template-rows: min-content auto;
`
const FlavorHeader = tw.h2`font-accent-2 text-3xl pt-4`
const Description = tw.p`text-sm overflow-y-auto lg:(text-base) -mr-4 pr-3`
const ArrowBackIcon = styled(ArrowBack)`
  ${tw`absolute right-4 bottom-4 w-8 cursor-pointer`}
`

const sizes = `(max-width: 475px) 40vw, 400px`
const FlavorDetailWindow = ({ flavor, hide }) => {
  useLockBodyScroll()

  const { loadErrored, setLoadErrored, unsetLoadErrored } = useMediaError()
  useEffect(() => {
    return () => unsetLoadErrored()
  }, [])

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
    <Backdrop>
      <Window>
        <Row>
          <ImageWrapper>
            {loadErrored ? (
              <FallbackPlaceholder
                fallbackImageUrl="/mock/CollectionCard/mock-600x600.png"
                width="100%"
                height="100%"
              />
            ) : (
              <Image
                src={formats.url}
                srcSet={srcSet}
                sizes={sizes}
                loadErrored={loadErrored}
                onError={() => {
                  setLoadErrored()
                }}
              />
            )}
          </ImageWrapper>
          <GridColumn>
            <FlavorHeader>{name}</FlavorHeader>
            <Description>{description}</Description>
          </GridColumn>
        </Row>
        <ArrowBackIcon onClick={hide} />
      </Window>
    </Backdrop>
  )
}

export default FlavorDetailWindow
