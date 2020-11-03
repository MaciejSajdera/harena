import React, { useEffect, useContext } from "react"
import { Link, graphql } from "gatsby"
import Header from "../components/Header/header"
import Menu from "../components/Menu/menu"
import myContext from "../../context"
import { LazyLoadImage } from "react-lazy-load-image-component"

const Offer = props => {
  let {
    about,
    menuRightProject,
    menuLeftProject,
    houseProject,
    interiorProject,
    designProject,
    category,
    offer,
  } = props.data

  const context = useContext(myContext)

  useEffect(() => {
    context.navToggled ? context.handleNavToggle() : console.log("nav open")
  }, [])

  return (
    <>
      <Header />
      <Menu
        dataMenu={menuRightProject}
        dataMenuLeft={menuLeftProject}
        about={about}
        houseProject={houseProject}
        interiorProject={interiorProject}
        category={category}
        offer={offer}
      />

      <div
        className={`subpage contact ${
          props.transitionStatus === `entered` ? `about-entered` : ``
        }`}
        css={{
          backgroundImage: `url(${offer.contactPageBackground.fluid.src})!important`,
        }}
      >
        <div
          className={`subpage-content-wrapper ${
            props.transitionStatus === `entered`
              ? `subpage-content-entered`
              : ``
          }`}
        >
          <h2>{menuRightProject.contactSlogan}</h2>
          <p className={`contact-text-area`}>
            {menuRightProject.contactTextarea}
          </p>

          <div className={`menu-right`}>
            <div className="menu-grouped-items">
              <p>{menuRightProject.adressData1}</p>
              <p>{menuRightProject.adressData2}</p>
            </div>

            <div className="menu-grouped-items">
              <a href={`tel:${menuRightProject.phoneNumber}`}>
                {menuRightProject.phoneNumber}
              </a>
              <p>{menuRightProject.emailAdress}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Offer

export const query = graphql`
  query offerData($locale: String!) {
    about: datoCmsAbout(locale: { eq: $locale }) {
      aboutTitle
      aboutContent
      slug
      locale
    }

    menuRightProject: datoCmsMenuRight(locale: { eq: $locale }) {
      contactSlogan
      contactTextarea
      adressData1
      adressData2
      phoneNumber
      emailAdress
      instagramicon {
        fixed(height: 35) {
          src
          base64
        }
      }
      instagramIconHover {
        fixed(height: 35) {
          src
          base64
        }
      }
      instagramLink
      facebookicon {
        fixed(height: 35) {
          src
          base64
        }
      }
      facebookIconHover {
        fixed(height: 35) {
          src
          base64
        }
      }
      facebookLink
      behanceIcon {
        fixed(height: 35) {
          src
          base64
        }
      }
      behanceIconHover {
        fixed(height: 35) {
          src
          base64
        }
      }
      behanceLink
      elloCoIcon {
        fixed(height: 35) {
          src
          base64
        }
      }
      elloIconHover {
        fixed(height: 35) {
          src
          base64
        }
      }
      elloCoLink
    }

    menuLeftProject: datoCmsMenuLeft(locale: { eq: $locale }) {
      projectsHeader
      offerHeader

      aboutHeader

      contactHeader
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

    designProject: datoCmsDesignProjectForClient(locale: { eq: $locale }) {
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
      categorySecondSlug
      locale
    }

    offer: datoCmsOffer(locale: { eq: $locale }) {
      contactPageBackground {
        fluid {
          src
        }
      }
      locale
      slug
    }
  }
`
