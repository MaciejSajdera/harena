import React from "react"
import { Link, graphql, Img } from "gatsby"
import { LazyLoadImage } from "react-lazy-load-image-component"
import Menu from "../components/Menu/menu"
import Header from "../components/Header/header"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import bgLogo from "../images/harena-page-transition.png"
import myContext from "../../context"

class allCategories extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      locale: this.props.data.menuRightIndex.locale,
      bgcolor: "",
    }
  }

  componentDidMount() {
    this.context.navToggled
      ? this.context.handleNavToggle()
      : console.log("nav open")
  }

  render() {
    let {
      projects,
      menuRightIndex,
      menuLeftIndex,
      about,
      logoData,
      houseProject,
      interiorProject,
      category,
      offer,
      categories,
    } = this.props.data

    const menuStyle = `menuStyleAbsolute`

    return (
      <>
        <main className={`all-grid`}>
          <div className="all-grid-bg">
            {categories.nodes
              .sort((a, b) => {
                const positionA = a.position
                const positionB = b.position
                let comparision = 0
                if (positionA > positionB) {
                  comparision = 1
                } else if (positionA < positionB) {
                  comparision = -1
                }
                return comparision
              })
              .map((element, index) => (
                <AniLink
                  cover
                  direction="right"
                  duration={2.2}
                  bg={`
                 url(${bgLogo})
                 center / cover   /* position / size */
                 no-repeat        /* repeat */
                 fixed            /* attachment */
                 padding-box      /* origin */
                 content-box      /* clip */
                 black            /* color */
               `}
                  to={
                    element.locale === "pl"
                      ? `/${element.categorySlug}`
                      : `/${element.locale}/${element.categorySlug}`
                  }
                  className={`single-category-tile`}
                  key={index}
                  css={{
                    background: `url(${element.categoryThumbnail.fluid.src})`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`,
                    backgroundRepeat: `no-repeat`,
                  }}
                >
                
                  <div className={`title-container`}>
                    <h2 className={`project-title-1`}>{element.categoryName}</h2>
                  </div>
                </AniLink>
              ))}
          </div>
        </main>
        <Header />
        <Menu
          dataMenu={menuRightIndex}
          dataMenuLeft={menuLeftIndex}
          dataProjects={projects}
          menuStyle={menuStyle}
          about={about}
          logoData={logoData}
          houseProject={houseProject}
          interiorProject={interiorProject}
          category={category}
          offer={offer}
        />
      </>
    )
  }
}

allCategories.contextType = myContext

export default allCategories

export const query = graphql`
  query allCategoriesData($locale: String!) {

    categories: allDatoCmsCategoryType(filter: { locale: { eq: $locale } }) {
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

    projects: allDatoCmsProject(filter: { locale: { eq: $locale } }) {
      nodes {
        slug
        locale
        id
        position
        projectCategory
        titlePart1

        readMore
        projectSlogan
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
      }
    }
    menuRightIndex: datoCmsMenuRight(locale: { eq: $locale }) {
      adressData1
      adressData2
      phoneNumber
      emailAdress
      behanceLink
      facebookLink
      elloCoLink
      instagramLink
    }

    menuLeftIndex: datoCmsMenuLeft(locale: { eq: $locale }) {
      projectsHeader
      offerHeader

      aboutHeader

      contactHeader
      locale
    }

    about: datoCmsAbout(locale: { eq: $locale }) {
      aboutTitle
      aboutContent
      slug
      locale
    }

    logoData: datoCmsHeaderLogoLight {
      logoImage {
        fixed {
          base64
          src
        }
      }
    }

    houseProject: datoCmsHouseProjectForClient(locale: { eq: $locale }) {
      pageName
      slug
      locale
      modularContent {
        slideNumber
        slideHeader
        slideMainText
      }
    }
    interiorProject: datoCmsInteriorProjectForClient(locale: { eq: $locale }) {
      pageName
      slug
      locale
      modularContent {
        slideNumber
        slideHeader
        slideMainText
      }
    }
    category: datoCmsCategory(locale: { eq: $locale }) {
      categoryFirstSlug
      categoryFirstName
      categorySecondSlug
      categorySecondName
      locale
    }

    offer: datoCmsOffer(locale: { eq: $locale }) {
      locale
      slug
    }
  }
`
