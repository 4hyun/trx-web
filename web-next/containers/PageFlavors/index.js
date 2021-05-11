import { useState } from "react"
import tw, { styled } from "twin.macro"
import { default as FlavorsPortfolio, FlavorSingleView } from "@/components/Flavors"

const GridContainer = styled.div`
  ${tw`h-auto px-6 mt-6 pb-8 lg:(px-12 mt-16 )`};
`

const Column = styled.div`
  ${tw`flex flex-col justify-start space-y-7 col-span-full lg:(col-start-7 col-end-12)`}
  ${tw`lg:(relative top-24)`}
`

const Flavors = ({ flavors }) => {
  const [selectedCollection, setSelectedCollection] = useState()
  const handleCollectionClick = (collection) => {
    setSelectedCollection(collection)
  }

  return (
    <GridContainer>
      <FlavorsPortfolio collection={flavors} onItemClick={handleCollectionClick} />
      <Column>
        <FlavorSingleView selected={selectedCollection} tempLoadCollection={() => handleCollectionClick(flavors[0])} />
      </Column>
    </GridContainer>
  )
}

export default Flavors
