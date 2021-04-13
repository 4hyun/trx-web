import { useEffect } from "react";
import Head from "next/head";
import HomeContent from "./HomeContent";
import styled from "styled-components";
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
        {flavors && (
          <FlavorsGallery>
            {flavors.map((flavor) => (
              <FlavorWrapper key={flavor.id}>
                <Flavor flavor={flavor}></Flavor>
              </FlavorWrapper>
            ))}
          </FlavorsGallery>
        )}
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
        name
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
