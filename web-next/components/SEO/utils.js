import sharedSEODefaults from './constants'

const valuesOrDefaults = (SEOValues, defaults = sharedSEODefaults) => {
  const { metaTitle, metaDisc, author, type, urlpath, image } = SEOValues
  return {
    title: metaTitle || defaults.title,
    locale: defaults.locale,
    siteName: defaults.siteName,
    author: author || defaults.author,
    type: type || defaults.type,
    url: `${defaults.siteurl}${urlpath || ''}`,
    description: metaDisc || '',
    image: image?.url,
    imageWidth: image?.width,
    imageHeight: image?.height,
  }
}

// const validateSEO = () => {
//   return
// }

export { valuesOrDefaults }
