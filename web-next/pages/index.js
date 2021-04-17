import { useEffect } from "react";
import Head from "next/head";
import { GridLayout } from "pages/age-gate";
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

export default function Home({ flavors, preview }) {
  useEffect(() => {
    console.log("Home rendered");
  });

  return (
    <div className="HomePage">
      <Head>
        <title>Tunaaaa Room Xtracts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContent>
        <GridLayout>
          <Collection collection={flavors} />
          <CollectionViewColumn>
            <CollectionSingleView />
          </CollectionViewColumn>
        </GridLayout>
      </HomeContent>
    </div>
  );
}

export const getStaticProps = async ({ preview = null }) => {
  const data = await fetchAPI(
    `
    query Flavors {
      flavors(publicationState:PREVIEW) {
        id,
        name,
        main_img {
          id,
          formats
        },
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
