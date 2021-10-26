import Flavors from 'containers/PageFlavors'
import SEO from 'components/SEO'
import { fetchAPI } from 'lib/api'
import queries from 'api/graphql/queries'

const FlavorsPage = ({ flavors, seoValues }) => (
  <>
    <SEO seoValues={seoValues} />
    <Flavors flavors={flavors} />
  </>
)

export default FlavorsPage

export const getStaticProps = async ({ preview = null }) => {
  const data = await fetchAPI(queries.pages.flavorsPage)
  const {
    flavors,
    flavorsPage: { SEO: seoValues },
  } = data

  return {
    props: { flavors, seoValues, preview },
  }
}
