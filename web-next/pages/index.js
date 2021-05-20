import React, { useContext } from 'react'
import Head from 'next/head'
/* containers */
import { ScrollContainer } from 'containers/Common'
/* components */
import { AgeGateContext } from 'components/AgeGate/context'
import HomeHero from 'components/Blocks/HomeHero'
import Footer from 'components/Layout/Footer'

export default function HomePage(props) {
  const { ageCheckedValue } = useContext(AgeGateContext)

  return (
    <>
      <Head>
        <title>Tunaaaa Room Xtracts</title>
        <meta property="og:url" content="https://xtracts.tunaaaaroom.ca" />
        <meta property="og:title" content="Tunaaaa Room Xtracts" />
        <meta property="og:site_name" content="Tunaaaa Room Xtracts" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Explore Tunaaaa Room's exclusive cannabis extracts collections."
        />
        <meta property="og:url" content="https://www.xtracts.tunaaaaroom.ca" />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:image"
          content="https://storage.googleapis.com/trx-web-static-media/trx-ogimage-1200x627.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {ageCheckedValue && (
        <ScrollContainer tw="w-full right-0">
          <HomeHero />
          {/* <HomeContentGrid></HomeContentGrid> */}
          <Footer />
        </ScrollContainer>
      )}
    </>
  )
}

// export const getStaticProps = async ({ preview = null }) => {
//   const data = await fetchAPI(
//     `
//     query {
//       flavors(publicationState:PREVIEW) {
//         id,
//         name,
//         main_img {
//           id,
//           formats
//         },
//         description,
//         available_categories {
//           ... on ProductCategory {
//             id,
//             name
//           }
//         }
//         collection_card_footer_content {
//             ... on ComponentCollectionCardFooterContentFooterContent {
//                 indica,
//                 sativa
//             }
//         }
//       }
//     }
//     `,
//     {
//       variables: {},
//     }
//   )
//   const allFlavorsData = data?.flavors

//   return {
//     props: { flavors: allFlavorsData, preview },
//   }
// }
