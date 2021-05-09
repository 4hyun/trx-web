import { useEffect, useState, useContext } from "react"
import Head from "next/head"
import styled from "styled-components"
import tw from "twin.macro"
import { fetchAPI } from "lib/api"
/* components */
import { AgeGateContext } from "components/AgeGate/context"
import HomeHero from "components/Blocks/HomeHero"
import Collection from "@/components/Collections/Collection"
import CollectionSingleView, { LayoutContainer as CollectionViewColumn } from "@/components/Collections/CollectionSingleView"
import Footer from "components/Layout/Footer"

const Flavor = ({ flavor }) => {
  return <div>{typeof flavor === "object" ? JSON.stringify(flavor) : "Flavor Data"}</div>
}

const HomeContentGrid = styled.div`
  ${tw`h-auto px-6 lg:px-0`};
  ${tw`grid grid-cols-12 auto-rows-max gap-y-4 lg:(grid-rows-none min-h-screen pt-14)`}/* grid-auto-columns: minmax(1fr, 1fr); */
`

const ScrollContainer = styled.main`
  ${tw`absolute top-0 space-y-10`}
  top: var(--MobileNavbarHeight);
  @media (min-width: 1024px) {
    ${tw`top-0 px-0 pt-0`}
    left: var(--DesktopNavbarWidth);
    /* width */
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
        <meta property="og:url" content="https://xtracts.tunaaaaroom.ca" />
        <meta property="og:title" content="Tunaaaa Room Xtracts" />
        <meta property="og:site_name" content="Tunaaaa Room Xtracts" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Explore Tunaaaa Room's exclusive cannabis extracts collections." />
        <meta property="og:url" content="https://www.xtracts.tunaaaaroom.ca"></meta>
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image" content="https://storage.googleapis.com/trx-web-static-media/trx-ogimage-1200x627.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {ageCheckedValue && (
        <ScrollContainer>
          <HomeHero></HomeHero>
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
