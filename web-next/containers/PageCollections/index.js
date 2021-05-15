import React from "react"
import tw, { styled } from "twin.macro"
/* components */
import { Section, FilterBar } from "@/components/Collections"
import Footer from "components/Layout/Footer"

const Container = styled.div`
  ${tw`w-full h-auto mx-auto px-10 space-y-6 mt-12 space-y-16 xs:space-y-16 pb-10`};
  ${tw`md:(space-y-8 max-w-screen-xl)`};
  ${tw`lg:(px-20 mt-16 pb-16)`}
`
const Collections = ({ collections, collectionCategories }) => (
  <React.Fragment>
    <Container>
      <FilterBar filters={collectionCategories} />
      {collections.map((collection) => (
        <Section key={collection.id} collection={collection} />
      ))}
    </Container>
    <Footer />
  </React.Fragment>
)
export default Collections
