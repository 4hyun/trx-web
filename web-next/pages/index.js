import React, { useContext } from 'react'
/* containers */
import { ScrollContainer } from 'containers/Common'
/* contexts */
import { AgeGateContext } from 'components/AgeGate/context'
import SEO from 'components/SEO'
/* components */
import HomeHero from 'components/Blocks/HomeHero'
import Footer from 'components/Layout/Footer'
/* queries */
import { fetchAPI } from 'lib/api'
import queries from 'api/graphql/queries'

export default function HomePage({ seoValues }) {
  const { ageCheckedValue } = useContext(AgeGateContext)

  return (
    <>
      <SEO seoValues={seoValues} />
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

export const getStaticProps = async ({ preview = null }) => {
  const data = await fetchAPI(queries.pages.homePage)
  const { SEO: seoValues } = data.homePage
  return {
    props: { seoValues: seoValues[0] },
  }
}
