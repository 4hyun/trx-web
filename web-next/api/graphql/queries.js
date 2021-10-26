// TODO: test using ComponentSharedSeo in string template of queries
const fragments = {
  ComponentSharedSeo: `... on ComponentSharedSeo {
    metaTitle,
    metaDesc,
    keywords,
    preventIndexing,
    urlpath,
    type,
    image {
      ... on ComponentSharedSeoImage {
        media {
          ... on UploadFile {
            url,
            width,
            height,
            mime,
            formats
          }
        }
      }
    }
  }`,
}
export default {
  pages: {
    homePage: `
      query {
        homePage(publicationState:LIVE) {
            SEO {
              ${fragments.ComponentSharedSeo}
            }
        }
    }`,
    flavorsPage: `
      query {
        flavors {
          id,
          name,
          main_img {
            id,
            formats
          },
          description,
          available_as {
            ... on ProductCategories {
              id,
              name
            }
          }
          indica_sativa {
              ... on ComponentFlavorFooterContent {
                  indica,
                  sativa
              }
          }
        }
        flavorsPage {
          SEO {
            ${fragments.ComponentSharedSeo}
          } 
        }
      }
    `,
    ageGatePage:`
      query {
        ageGatePage {
          SEO {
            ${fragments.ComponentSharedSeo}
          }
        }
      }
    `,
    collectionsPage:`
      query {
        collections(publicationState:LIVE) {
          id,
          name,
          desc,
          cover_media { 
            formats,
            url
          }
        }
        collectionsPage {
          id,
          SEO {
            ${fragments.ComponentSharedSeo}
          }
        }
      }
    `,
    findStoresPage:`
      query {
        stores(where:{retailer:true}) {
          id,
          retailer,
          lng,
          lat,
          name,
          address,
          place_id,
          phone
        }
        findStoresPage {
          id,
          SEO {
            ${fragments.ComponentSharedSeo}
          }
        }
      }
    `
  },
}
