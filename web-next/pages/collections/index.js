import tw, { styled } from "twin.macro"
import V2Collections from "containers/V2Collections"
import { fetchAPI } from "lib/api"

const CollectionsPage = ({ collections, collectionCategories }) => {
  return <V2Collections collections={collections} collectionCategories={collectionCategories}></V2Collections>
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
  // console.log(("flavors", flavors))
  console.log(("productCategories", productCategories))
  return {
    props: { collections: flavors, collectionCategories: productCategories, preview },
  }
}
