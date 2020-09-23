import React from 'react'
import { Link, graphql } from "gatsby"
import Menu from "../components/Menu/menu"


const About = (props) => {

    let { about, menuRightProject, menuLeftProject, houseProject } = props.data;

    return (
      <>
      <Menu dataMenu={menuRightProject} dataMenuLeft={ menuLeftProject } about={about} houseProject={houseProject}/>

        <div className={`subpage about`}>

          <div className="subpage-content-wrapper">
            <h1>{about.aboutTitle}</h1>
            <p className={`text-content`}>{about.aboutContent}</p>
          </div>

        </div>
      </>
    )
}

export default About

export const query = graphql`
query aboutData($locale: String!) {
  about: datoCmsAbout(locale: {eq: $locale}) {
        aboutTitle
        aboutContent
        slug
        locale
  }
  menuRightProject: datoCmsMenuRight(locale: {eq: $locale}) {
    adressData1
    adressData2
    phoneNumber
    emailAdress
    instagramicon {
      fixed(height: 35) {
        src
        tracedSVG
        base64
      }
    }
    facebookicon {
      fixed(height: 35) {
        src
        tracedSVG
        base64
      }
    }
  }
  menuLeftProject: datoCmsMenuLeft(locale: {eq: $locale}) {
    projectsHeader
    projectsSubfield1
    projectsSubfield2
    offerHeader
    aboutHeader
    individualCustomer
    individualSubfield1
    individualSubfield2
    contactHeader
  }

  houseProject: datoCmsHouseProjectForClient(locale: {eq: $locale}) {
    pageName
    slug
    modularContent {
      slideNumber
      slideHeader
      slideMainText
    }
  }
}
`;

