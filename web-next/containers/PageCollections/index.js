import tw, { styled } from "twin.macro"
/* components */
import { Section, FilterBar } from "@/components/Collections"

const Container = styled.div`
  ${tw`w-full h-auto mx-auto px-10 space-y-6 xs:space-y-10 md:(px-24 space-y-8 max-w-screen-xl)`}
`
const Collections = ({ collections, collectionCategories }) => {
  return (
    <Container>
      <FilterBar filters={collectionCategories} />
      {collections.map((collection) => (
        <Section collection={collection} />
      ))}
    </Container>
  )
}

export default Collections
