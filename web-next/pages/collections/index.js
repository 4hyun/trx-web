import { fetchAPI } from 'lib/api'
/* components */
import Collections from 'containers/PageCollections'

const CollectionsPage = ({ collections }) => (
  <Collections collections={collections} />
)

export default CollectionsPage

export const getStaticProps = async () => {
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
    `
  )
  const { collections } = data
  return {
    props: { collections },
  }
}
