import { useEffect, useState } from "react";
import Head from "next/head";
import HomeContent from "./HomeContent";
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

const GridLayout = styled.div`
  ${tw`w-full h-full grid grid-cols-12 grid-rows-6 lg:(grid-rows-none)`}
`;

export default function Home({ flavors, preview }) {
  const [selectedCollection, setSelectedCollection] = useState();
  const handleCollectionClick = (collection) => {
    console.log("handleCollectionClick", collection);
    setSelectedCollection(collection);
  };
  useEffect(() => {
    console.log("Home rendered");
    console.log("selectedCollection : ", selectedCollection);
  });

  return (
    <div className="HomePage">
      <Head>
        <title>Tunaaaa Room Xtracts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContent>
        <GridLayout>
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
        </GridLayout>
      </HomeContent>
    </div>
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
