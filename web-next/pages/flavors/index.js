import Flavors from "containers/PageFlavors"
import { fetchAPI } from "lib/api"

const FlavorsPage = ({ flavors }) => {
  return <Flavors flavors={flavors}></Flavors>
}

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
        available_categories {
          ... on ProductCategory {
            id,
            name
          }
        }
        collection_card_footer_content {
            ... on ComponentCollectionCardFooterContentFooterContent {
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
