import { useMemo } from 'react'
import tw, { styled } from 'twin.macro'
/* components */
import { useWindowSize } from 'lib/hooks'
import { parseScrollContainerID } from '@/components/Collections/utils'
import SectionCover from './SectionCover'
/* utils */

const SectionWrapper = styled.section`
  ${tw`flex`}
  ${({ coverLeft }) => coverLeft && tw`flex-row-reverse`}
`
const SectionTitle = styled.h2`
  ${tw`font-bungee text-2xl tracking-widest!`}
  ${tw`xl:(font-normal)`}
`

const TextContent = tw.p`text-base leading-relaxed`

const Column = styled.div``
const srcSetMapFn = (formatKey, formats) => {
  const { url, width } = formats[formatKey]
  return `${url} ${width}w, `
}
const sizes = `(max-width: 475px) 40vw, 400px`

/* Cover is aligned right by default */
const Section = ({ collection, coverLeft }) => {
  const { width } = useWindowSize()
  const { desc, name, cover_media } = collection
  const srcSet = useMemo(
    () =>
      Object.keys(cover_media.formats)
        .map((formatKey) => srcSetMapFn(formatKey, cover_media.formats))
        .join(),
    [collection]
  )
  return (
    <SectionWrapper coverLeft={coverLeft} id={parseScrollContainerID(name)}>
      <Column tw="flex-1 self-center space-y-4">
        <SectionTitle>{name}</SectionTitle>
        {width < 475 && (
          <Column tw="flex-initial xl:ml-36 h-auto float-right">
            {srcSet && (
              <SectionCover
                src={cover_media.url}
                srcSet={srcSet}
                sizes={sizes}
              />
            )}
          </Column>
        )}
        <TextContent>{desc}</TextContent>
      </Column>
      {width > 475 && (
        <Column tw="flex-initial xl:ml-36 h-auto max-w-1/2">
          {srcSet && (
            <SectionCover src={cover_media.url} srcSet={srcSet} sizes={sizes} />
          )}
        </Column>
      )}
    </SectionWrapper>
  )
}

export default Section
