import tw, { styled } from "twin.macro"
import { fetchAPI } from "lib/api"
/* components */
import Collections from "containers/PageCollections"

const CollectionsPage = ({ collections, collectionCategories }) => {
  return <Collections collections={collections} collectionCategories={collectionCategories}></Collections>
}

export default CollectionsPage

export const getStaticProps = async ({ preview = null }) => {
  const data = await fetchAPI(
    `
    query {
      collections(publicationState:LIVE) {
        id,
        name,
        desc,
        cover_media { 
          formats,
          url
        }
      }
    }
    `,
    {
      variables: {},
    }
  )
  const { collections } = data
  return {
    props: { collections, collectionCategories: collections.map(({name})=>name), preview },
  }
}
