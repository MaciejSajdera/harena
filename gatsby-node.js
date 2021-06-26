const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const locales = ["pl", "en"]

  const componentTemplate = path.resolve(`src/templates/home.js`)

  locales.forEach(locale => {
    const prefix = locale === "pl" ? "" : `${locale}`
    createPage({
      path: `/${prefix}`,
      component: componentTemplate,
      context: { locale },
    })
  })

  locales.forEach(locale => {
    const prefix = locale === "pl" ? `lookbook` : `${locale}/lookbook`
    createPage({
      path: `/${prefix}`,
      component: path.resolve(`src/templates/allCategories.js`),
      context: { locale },
    })
  })

  const aboutPageQuery = await graphql(`
    query aboutPageQuery {
      pl: allDatoCmsAbout(filter: { locale: { eq: "pl" } }) {
        nodes {
          aboutTitle
          aboutContent
          slug
          locale
        }
      }
      en: allDatoCmsAbout(filter: { locale: { eq: "en" } }) {
        nodes {
          aboutTitle
          aboutContent
          slug
          locale
        }
      }
    }
  `)

  aboutPageQuery.data.pl.nodes.forEach(item => {
    const prefix =
      item.locale === "pl" ? `${item.slug}` : `${item.locale}/${item.slug}`
    createPage({
      path: `/${prefix}`,
      component: path.resolve(`src/templates/about.js`),
      context: {
        aboutData: item.aboutTitle,
        locale: item.locale,
      },
    })
  })

  aboutPageQuery.data.en.nodes.forEach(item => {
    const prefix = `${item.locale}/${item.slug}`
    createPage({
      path: `/${prefix}`,
      component: path.resolve(`src/templates/about.js`),
      context: {
        aboutData: item,
        aboutTitle: item.aboutTitle,
        locale: item.locale,
      },
    })
  })

  const thankYouPageQuery = await graphql(`
    query thankYouPageQuery {
      pl: allDatoCmsThankYou(filter: { locale: { eq: "pl" } }) {
        nodes {
          thankYouTitle
          thankYouContent
          slug
          locale
        }
      }
      en: allDatoCmsThankYou(filter: { locale: { eq: "en" } }) {
        nodes {
          thankYouTitle
          thankYouContent
          slug
          locale
        }
      }
    }
  `)

  thankYouPageQuery.data.pl.nodes.forEach(item => {
    let url = `/${item.slug}`
    createPage({
      path: url,
      component: path.resolve(`src/templates/thanks.js`),
      context: {
        thankYouData: item.thankYouTitle,
        locale: item.locale,
      },
    })
  })

  thankYouPageQuery.data.en.nodes.forEach(item => {
    let url = `/${item.slug}`
    createPage({
      path: url,
      component: path.resolve(`src/templates/thanks.js`),
      context: {
        thankYouData: item,
        thankYouTitle: item.thankYouTitle,
        locale: item.locale,
      },
    })
  })

  const contactPageQuery = await graphql(`
    query contactPageQuery {
      pl: allDatoCmsOffer(filter: { locale: { eq: "pl" } }) {
        nodes {
          slug
          locale
        }
      }
      en: allDatoCmsOffer(filter: { locale: { eq: "en" } }) {
        nodes {
          slug
          locale
        }
      }
    }
  `)

  contactPageQuery.data.pl.nodes.forEach(item => {
    let url = `/${item.slug}`
    createPage({
      path: url,
      component: path.resolve(`src/templates/offer.js`),
      context: {
        locale: item.locale,
      },
    })
  })

  contactPageQuery.data.en.nodes.forEach(item => {
    let url = `${item.locale}/${item.slug}`
    createPage({
      path: url,
      component: path.resolve(`src/templates/offer.js`),
      context: {
        locale: item.locale,
      },
    })
  })

  const projectsQuery = await graphql(`
    query myData {
      pl: allDatoCmsProject(filter: { locale: { eq: "pl" } }) {
        nodes {
          slug
          locale
          id
          position
          projectCategory
          titlePart1
          readMore
          fullScreenPhoto {
            fluid {
              src
              base64
              srcSet
            }
          }
          projectDescription
          priceText
          areaValue

          productPhotos {
            url
            alt
          }
        }
      }

      en: allDatoCmsProject(filter: { locale: { eq: "en" } }) {
        nodes {
          slug
          locale
          id
          position
          projectCategory
          titlePart1

          readMore
          fullScreenPhoto {
            fluid {
              src
              base64
              srcSet
            }
          }

          projectDescription
          priceText
          areaValue

          productPhotos {
            url
            alt
          }
        }
      }
    }
  `)

  projectsQuery.data.pl.nodes.forEach(item => {
    let url = `${item.projectCategory}/${item.slug}`
    createPage({
      path: url,
      component: path.resolve(`src/templates/ProjectPage.js`),
      context: {
        myProjectData: item,
        locale: item.locale,
        fullScreenPhoto: item.fullScreenPhoto,
      },
    })
  })

  projectsQuery.data.en.nodes.forEach(item => {
    let url = `/${item.locale}/${item.projectCategory}/${item.slug}`
    createPage({
      path: url,
      component: path.resolve(`src/templates/ProjectPage.js`),
      context: {
        myProjectData: item,
        locale: item.locale,
        fullScreenPhoto: item.fullScreenPhoto,
      },
    })
  })

  //category pages

  const categoriesFirstQuery = await graphql(`
    query interiorProject {

      pl: allDatoCmsCategory(filter: { locale: { eq: "pl" } }) {
        nodes {
          categoryFirstSlug
          locale
        }
      }

      en: allDatoCmsCategory(filter: { locale: { eq: "en" } }) {
        nodes {
          categoryFirstSlug
          locale
        }
      }
      
    }
  `)

  const categoriesSecondQuery = await graphql(`
    query interiorProject {

      pl: allDatoCmsCategory(filter: { locale: { eq: "pl" } }) {
        nodes {
          categorySecondSlug
          locale
        }
      }

      en: allDatoCmsCategory(filter: { locale: { eq: "en" } }) {
        nodes {
          categorySecondSlug
          locale
        }
      }

    }
  `)

  categoriesFirstQuery.data.pl.nodes.forEach(item => {
    let url = `/${item.categoryFirstSlug}`

    createPage({
      path: url,
      component: path.resolve(`src/templates/allProjectsHouse.js`),
      context: {
        // myProjectData: item,
        locale: item.locale,
        // fullScreenPhoto: item.fullScreenPhoto
      },
    })
  })

  categoriesFirstQuery.data.en.nodes.forEach(item => {
    let url = `/${item.locale}/${item.categoryFirstSlug}`

    createPage({
      path: url,
      component: path.resolve(`src/templates/allProjectsHouse.js`),
      context: {
        // myProjectData: item,
        locale: item.locale,
        // fullScreenPhoto: item.fullScreenPhoto
      },
    })
  })

  categoriesSecondQuery.data.pl.nodes.forEach(item => {
    let url = `/${item.categorySecondSlug}`

    createPage({
      path: url,
      component: path.resolve(`src/templates/allProjectsInterior.js`),
      context: {
        // myProjectData: item,
        locale: item.locale,
        // fullScreenPhoto: item.fullScreenPhoto
      },
    })
  })

  categoriesSecondQuery.data.en.nodes.forEach(item => {
    let url = `/${item.locale}/${item.categorySecondSlug}`

    createPage({
      path: url,
      component: path.resolve(`src/templates/allProjectsInterior.js`),
      context: {
        // myProjectData: item,
        locale: item.locale,
        // fullScreenPhoto: item.fullScreenPhoto
      },
    })
  })



  const allCategoryTypesQuery = await graphql(`
    query allCategoryTypes {
      pl: allDatoCmsCategoryType(filter: { locale: { eq: "pl" } }) {
        nodes {
          categoryName
          categorySlug
          categoryThumbnail {
            fluid {
              src
            }
          }
          locale
        }
      }
      en: allDatoCmsCategoryType(filter: { locale: { eq: "en" } }) {
        nodes {
          categoryName
          categorySlug
          categoryThumbnail {
            fluid {
              src
            }
          }
          locale
        }
      }
    }
  `)

  allCategoryTypesQuery.data.pl.nodes.forEach(item => {
    let url = `/${item.categorySlug}`

    console.log(item)

    createPage({
      path: url,
      component: path.resolve(`src/templates/allProjectsInCategory.js`),
      context: {
        // myProjectData: item,
        locale: item.locale,
        categorySlug: item.categorySlug,
        // fullScreenPhoto: item.fullScreenPhoto
      },
    })
  })



}
