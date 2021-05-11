import { useState } from "react"
import tw, { styled } from "twin.macro"
import { FlavorPortfolio, FlavorSingleView } from "@/components/Flavors"
import Footer from "components/Layout/Footer"

const GridContainer = styled.div`
  ${tw`h-auto px-6 xs:px-10 mt-12 pb-8 space-y-16 pb-10`};
  ${tw`md:(space-y-10)`};
  ${tw`lg:(px-20 mt-16 pb-16 space-y-4)`}
`

const Column = styled.div`
  ${tw`flex flex-col justify-start space-y-7 col-span-full lg:(col-start-7 col-end-12)`}
`

const Flavors = ({ flavors }) => {
  const [selectedCollection, setSelectedCollection] = useState()
  const handleCollectionClick = (collection) => {
    setSelectedCollection(collection)
  }

  return (
    <>
      <GridContainer>
        <FlavorPortfolio collection={flavors} onItemClick={handleCollectionClick} />
        <Column>
          <FlavorSingleView selected={selectedCollection} tempLoadCollection={() => handleCollectionClick(flavors[0])} />
        </Column>
      </GridContainer>
      <Footer />
    </>
  )
}

export default Flavors
