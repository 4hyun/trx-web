import React, { useEffect } from "react"
import styled from "styled-components"
import tw from "twin.macro"
import AvailableCategories from "./AvailableCategories"

export const LayoutContainer = styled.div`
  ${tw`flex flex-col justify-start space-y-7 col-span-full lg:(col-start-7 col-end-12)`}
  ${"" /* top position 24 to align CollectionSingleView with CollectionGallery */}
  ${tw`lg:(relative top-24)`}
`

const Container = styled.div`
  ${tw`rounded-3xl bg-tr-black bg-opacity-90 space-y-3 overflow-y-hidden px-5`}
  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 2.25rem;
    min-height: 500px;
  }
`

const Data = {
  title: "Tunaaaa Tiger",
  description:
    "This potent strain is our Tiger Cake Menthol crossed with Layer Cake and offers a creamy vanilla flavour profile. With hints of gas and menthol, this strain is known for its powerful psychedelic effects.",
  available_category: { name: "Category Name" },
}

const Title = styled.h2`
  ${tw`font-accent font-bold text-3xl lg:(text-5xl) text-tr-white whitespace-pre pt-3`}
  @media (min-width: 768px) {
    padding: 24px 0px 10px;
  }
`
const Description = styled.p`
  ${tw`font-sans text-tr-white text-base md:(text-lg) lg:(text-lg)`}
  line-height: 140%;
`
const CollectionSingleView = ({ selected, tempLoadCollection }) => {
  useEffect(() => {
    if (selected.isDefaultProps) tempLoadCollection()
  }, [])
  return (
    <>
      {!selected.isDefaultProps && (
        <Container>
          <Title>{`Tunaaaa\n${selected.name}`}</Title>
          <Description>{selected.description}</Description>
          <AvailableCategories categories={selected.available_categories} />
        </Container>
      )}
    </>
  )
}

CollectionSingleView.defaultProps = {
  selected: {
    title: Data.title,
    description: Data.description,
    available_categories: Array.from(new Array(4), () => Data.available_category),
    isDefaultProps: true,
  },
}

export default CollectionSingleView
