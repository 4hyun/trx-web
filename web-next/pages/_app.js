import React from 'react'
import Head from 'next/head'
import GlobalStyles from 'components/Common/GlobalStyles'
import Layout from 'components/Layout/index'
import { useDevSettings } from 'lib/hooks'

function MyApp({ Component, pageProps }) {
  useDevSettings()
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Oswald:wght@400;600;700&family=ABeeZee&family=Bungee&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
