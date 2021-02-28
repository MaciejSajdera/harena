import React, { useEffect, useContext } from "react"
import { Link, graphql } from "gatsby"
import Menu from "../components/Menu/menu"
import Header from "../components/Header/header"

import myContext from "../../context"

const Thanks = props => {
  let {
    thanks,
    about,
    menuRightProject,
    menuLeftProject,
    houseProject,
    interiorProject,
    category,
    offer,
  } = props.data

  console.log(props.transitionStatus)
  console.log(props.data)

  const context = useContext(myContext)

  useEffect(() => {
    context.navToggled ? context.handleNavToggle() : console.log("nav open")
  }, [])

  return (
    <>
      <Header logoLight />
      <Menu
        dataMenu={menuRightProject}
        dataMenuLeft={menuLeftProject}
        about={about}
        houseProject={houseProject}
        interiorProject={interiorProject}
        category={category}
        offer={offer}
      />

      <div className={`subpage subpage-contact`}>
        <div className="subpage-content-wrapper">
          <h1
            className={`thank-you-title ${
              props.transitionStatus === `entered`
                ? `thank-you-title-entered`
                : ``
            }`}
          >
            {thanks.thankYouTitle}
          </h1>
          <p
            className={`text-content thank-you-title ${
              props.transitionStatus === `entered`
                ? `thank-you-content-entered`
                : ``
            }`}
          >
            {thanks.thankYouContent}
          </p>
        </div>
      </div>
    </>
  )
}

export default Thanks

export const query = graphql`
  query thanksData($locale: String!) {
    thanks: datoCmsThankYou(locale: { eq: $locale }) {
      thankYouTitle
      thankYouContent
      slug
      locale
    }

    about: datoCmsAbout(locale: { eq: $locale }) {
      aboutTitle
      aboutContent
      aboutBackground {
        fluid {
          src
        }
      }
      slug
      locale
    }

    menuRightProject: datoCmsMenuRight(locale: { eq: $locale }) {
      adressData1
      adressData2
      phoneNumber
      emailAdress
      behanceLink
      facebookLink
      elloCoLink
      instagramLink
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
    category: datoCmsCategory(locale: { eq: $locale }) {
      categoryFirstSlug
      categorySecondSlug
      locale
    }

    offer: datoCmsOffer(locale: { eq: $locale }) {
      locale
      slug
    }
  }
`
