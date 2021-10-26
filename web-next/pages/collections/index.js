import { fetchAPI } from 'lib/api'
import queries from 'api/graphql/queries'
/* components */
import Collections from 'containers/PageCollections'
import SEO from 'components/SEO'

const CollectionsPage = ({ collections, seoValues }) => (
  <>
    <SEO seoValues={seoValues} />
    <Collections collections={collections} />
  </>
)

export default CollectionsPage

export const getStaticProps = async () => {
  const data = await fetchAPI(queries.pages.collectionsPage)
  const {
    collections,
    collectionsPage: { SEO: seoValues },
  } = data
  return {
    props: { collections, seoValues: seoValues[0] },
  }
}
