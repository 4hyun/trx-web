import Flavors from 'containers/PageFlavors'
import { fetchAPI } from 'lib/api'

const FlavorsPage = ({ flavors }) => <Flavors flavors={flavors} />

export default FlavorsPage

export const getStaticProps = async ({ preview = null }) => {
  const data = await fetchAPI(
    `
    query {
      flavors {
        id,
        name,
        main_img {
          id,
          formats
        },
        description,
        available_as {
          ... on ProductCategories {
            id,
            name
          }
        }
        indica_sativa {
            ... on ComponentFlavorFooterContent {
                indica,
                sativa
            }
        }
      }
    }
    `,
    {
      variables: {},
    }
  )
  const flavors = data?.flavors

  return {
    props: { flavors, preview },
  }
}
