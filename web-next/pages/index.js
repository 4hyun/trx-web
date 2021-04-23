import { useEffect, useState, useContext } from "react";
import Head from "next/head";
import { AgeGateContext } from "components/AgeGate/context";
import HomeContentContainer from "components/HomePage/HomeContentContainer";
import Collection from "components/Collection";
import CollectionSingleView, {
  LayoutContainer as CollectionViewColumn,
} from "components/CollectionSingleView";
import styled from "styled-components";
import tw from "twin.macro";
import { fetchAPI } from "lib/api";

const FlavorsGallery = styled.ul``;

const FlavorWrapper = styled.li``;

const Flavor = ({ flavor }) => {
  return (
    <div>
      {typeof flavor === "object" ? JSON.stringify(flavor) : "Flavor Data"}
    </div>
  );
};

const HomeContentGrid = styled.div`
  ${tw`h-full grid grid-cols-12 auto-rows-max xs:(auto-rows-fr) gap-y-4 lg:(grid-rows-none)`};
  /* grid-auto-columns: minmax(1fr, 1fr); */
`;

export default function Home({ flavors, preview }) {
  const [selectedCollection, setSelectedCollection] = useState();
  const { ageCheckedValue } = useContext(AgeGateContext);
  const handleCollectionClick = (collection) => {
    // console.log("handleCollectionClick", collection);
    setSelectedCollection(collection);
  };
  useEffect(() => {
    console.log("Home rendered");
    // console.log("selectedCollection : ", selectedCollection);
  });
  //TODO: Schema.org Markup (SEO)
  return (
    <>
      <Head>
        <title>Tunaaaa Room Xtracts</title>
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content="Tunaaaa Room Xtracts" />
        <meta property="og:site_name" content="Tunaaaa Room Xtracts" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Explore Tunaaaa Room's exclusive cannabis extracts collections."
        />
        <meta
          property="og:url"
          content="https://www.xtracts.tunaaaaroom.ca"
        ></meta>
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:image"
          content="https://storage.googleapis.com/trx-web-static-media/trx-ogimage-1200x627.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {ageCheckedValue && (
        <HomeContentContainer>
          <HomeContentGrid>
            <Collection
              collection={flavors}
              onItemClick={handleCollectionClick}
            />
            <CollectionViewColumn>
              <CollectionSingleView
                selected={selectedCollection}
                tempLoadCollection={() => handleCollectionClick(flavors[0])}
              />
            </CollectionViewColumn>
          </HomeContentGrid>
        </HomeContentContainer>
      )}
    </>
  );
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
  );
  const allFlavorsData = data?.flavors;

  return {
    props: { flavors: allFlavorsData, preview },
  };
};
