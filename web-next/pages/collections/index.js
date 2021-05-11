import tw, { styled } from "twin.macro"
import Collections from "containers/PageCollections"
import { fetchAPI } from "lib/api"

const CollectionsPage = ({ collections, collectionCategories }) => {
  return <Collections collections={collections} collectionCategories={collectionCategories}></Collections>
}

export default CollectionsPage

export const getStaticProps = async ({ preview = null }) => {
  const data = await fetchAPI(
    `
    query {
      flavors(publicationState:LIVE) {
        id,
        name,
        description,
        main_img { 
          formats,
          url
        }
      }
      productCategories {
        id,
        name
      }
    }
    `,
    {
      variables: {},
    }
  )
  const { flavors, productCategories } = data
  return {
    props: { collections: flavors, collectionCategories: productCategories, preview },
  }
}
