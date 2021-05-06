import { useEffect, useState, useContext } from "react"
import Head from "next/head"
import styled from "styled-components"
import tw from "twin.macro"
import { fetchAPI } from "lib/api"
/* components */
import { AgeGateContext } from "components/AgeGate/context"
import Collection from "components/Collection"
import CollectionSingleView, { LayoutContainer as CollectionViewColumn } from "components/CollectionSingleView"
import Footer from "components/Layout/Footer"

// const FlavorsGallery = styled.ul``;

// const FlavorWrapper = styled.li``;

const Flavor = ({ flavor }) => {
  return <div>{typeof flavor === "object" ? JSON.stringify(flavor) : "Flavor Data"}</div>
}

const HomeContentGrid = styled.div`
  ${tw`h-auto px-6 lg:px-0`};
  ${tw`grid grid-cols-12 auto-rows-max gap-y-4 lg:(grid-rows-none h-screen pt-14)`}/* grid-auto-columns: minmax(1fr, 1fr); */
`

const ScrollContainer = styled.main`
  ${tw`pt-10 fixed inset-0 overflow-y-scroll space-y-10`}
  top: var(--MobileNavbarHeight);
  @media (min-width: 1024px) {
    ${tw`top-0 px-0 pt-0`}
    left: var(--DesktopNavbarWidth);
  }
`

export default function HomePage({ flavors, preview }) {
  const [selectedCollection, setSelectedCollection] = useState()
  const { ageCheckedValue } = useContext(AgeGateContext)
  const handleCollectionClick = (collection) => {
    setSelectedCollection(collection)
  }

  return (
    <>
      <Head>
        <title>Tunaaaa Room Xtracts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {ageCheckedValue && (
        <ScrollContainer>
          <HomeContentGrid>
            <Collection collection={flavors} onItemClick={handleCollectionClick} />
            <CollectionViewColumn>
              <CollectionSingleView selected={selectedCollection} tempLoadCollection={() => handleCollectionClick(flavors[0])} />
            </CollectionViewColumn>
          </HomeContentGrid>
          <Footer />
        </ScrollContainer>
      )}
    </>
  )
}

export const getStaticProps = async ({ preview = null }) => {
  const data = await fetchAPI(
    `
    query {
      flavors(publicationState:PREVIEW) {
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
  const allFlavorsData = data?.flavors

  return {
    props: { flavors: allFlavorsData, preview },
  }
}
