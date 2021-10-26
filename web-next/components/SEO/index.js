import Head from 'next/head'
import { valuesOrDefaults } from 'components/SEO/utils'

const SEO = ({ seoValues }) => {
  const seo = valuesOrDefaults(seoValues)
  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="author" content={seo.author} />
      <meta property="og:locale" content={seo.locale} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="twitter:title" content={seo.title} />
      <meta property="og:site_name" content={seo.siteName} />
      <meta property="twitter:site" content={seo.siteName} />
      <meta property="og:type" content={seo.type} />
      <meta property="og:description" content={seo.description} />
      <meta property="twitter:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      {seo.image && (
        <>
          <meta property="og:image" content={seo.image} />
          <meta property="og:image:height" content={seo.imageHeight} />
          <meta property="og:image:width" content={seo.imageWidth} />
        </>
      )}
      {/* <meta
        property="og:image"
        content="https://storage.googleapis.com/trx-web-static-media/trx-ogimage-1200x627.png"
      /> */}
    </Head>
  )
}

export default SEO
