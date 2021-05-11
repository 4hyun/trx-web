import { useMemo, useState } from "react"
import tw, { styled } from "twin.macro"
import { Element } from "react-scroll"
/* components */
import SectionCover from "./SectionCover"
/* hooks */
import { useWindowSize } from "lib/hooks"

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
  const { description, name, main_img } = collection
  const srcSet = useMemo(
    () =>
      Object.keys(main_img.formats)
        .map((formatKey) => srcSetMapFn(formatKey, main_img.formats))
        .join(),
    [collection]
  )
  return (
    <Element name={collection.id}>
      <SectionWrapper coverLeft={coverLeft}>
        <Column tw="flex-1 self-center space-y-4">
          <SectionTitle>{name}</SectionTitle>
          {width < 475 && (
            <Column tw="flex-initial xl:ml-36 h-auto float-right">
              {srcSet && <SectionCover src={main_img.url} srcSet={srcSet} sizes={sizes} />}
            </Column>
          )}
          <TextContent>{description}</TextContent>
        </Column>
        {width > 475 && (
          <Column tw="flex-initial xl:ml-36 h-auto max-w-1/2">{srcSet && <SectionCover src={main_img.url} srcSet={srcSet} sizes={sizes} />}</Column>
        )}
      </SectionWrapper>
    </Element>
  )
}

export default Section
