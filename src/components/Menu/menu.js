import React, { useState } from "react"
import { Link, useStaticQuery } from "gatsby"

import myContext from "../../../context"
import ContactForm from "../ContactForm/ContactForm"

const Menu = ({
  dataMenu,
  dataMenuLeft,
  dataProjects,
  menuStyle,
  about,
  location,
  houseProject,
  interiorProject,
  category,
  offer,
}) => {
  const data = useStaticQuery(graphql`
    query MyMenuLogoQuery {
      light: datoCmsHeaderLogoLight {
        logoImage {
          fixed {
            base64
            src
          }
        }
      }
      dark: datoCmsHeaderLogo {
        logoImage {
          fixed {
            src
            base64
          }
        }
      }
    }
  `)

  let darkLogo = data.dark.logoImage.fixed.src
  let lightLogo = data.light.logoImage.fixed.src

  const [isOpen, setIsOpen] = useState(false)

  const handleContactFormToggle = () => setIsOpen(!isOpen)

  return (
    <>
      <div className={`contact-form-container ${isOpen ? "form-active" : ""}`}>
        {/* <div className="contact-form-wrapper"> */}
        {/* <h3>Napisz do nas</h3> */}
        {/* </div> */}

        <ContactForm handleContactFormToggle={handleContactFormToggle} />
      </div>

      <myContext.Consumer>
        {({ handleNavToggle, navToggled, set }) => (
          <>
            <div
              className={`contact-form-title ${
                navToggled ? "title-visible" : ""
              }`}
              onClick={() => {
                handleContactFormToggle()
              }}
            >
              <p>{dataMenuLeft.contactHeader}</p>
            </div>
            <div className={`menu ${navToggled ? `active` : ""}`}>
              <div className={`menu-container`}>
                <div
                  className="menu-box"
                  onClick={() => handleNavToggle()}
                  tabIndex="0"
                  role="button"
                  aria-label="Open Menu"
                >
                  {/* <span id={`menu-pop-up`} className={`menu-box`}></span> */}
                  <div
                    className={`menu-trigger ${navToggled ? "active" : ""}`}
                    id={`menu10`}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>

                <div className={`menu-inner`}>
                  <div className="additional-menu">
                    <div className="icons">
                      <a
                        href={`${dataMenu.facebookLink}`}
                        target="_blank"
                        css={{
                          backgroundImage: `url(${dataMenu.facebookicon.fixed.src})`,
                          backgroundRepeat: `no-repeat`,
                          ":hover": {
                            backgroundImage: `url(${dataMenu.facebookIconHover.fixed.src})`,
                          },
                        }}
                      ></a>

                      <a
                        href={`${dataMenu.instagramLink}`}
                        target="_blank"
                        css={{
                          backgroundImage: `url(${dataMenu.instagramicon.fixed.src})`,
                          backgroundRepeat: `no-repeat`,
                          ":hover": {
                            backgroundImage: `url(${dataMenu.instagramIconHover.fixed.src})`,
                          },
                        }}
                      ></a>

                      <a
                        href={`${dataMenu.behanceLink}`}
                        target="_blank"
                        css={{
                          backgroundImage: `url(${dataMenu.behanceIcon.fixed.src})`,
                          backgroundRepeat: `no-repeat`,
                          ":hover": {
                            backgroundImage: `url(${dataMenu.behanceIconHover.fixed.src})`,
                          },
                        }}
                      ></a>

                      <a
                        href={`${dataMenu.elloCoLink}`}
                        target="_blank"
                        css={{
                          backgroundImage: `url(${dataMenu.elloCoIcon.fixed.src})`,
                          backgroundRepeat: `no-repeat`,
                          ":hover": {
                            backgroundImage: `url(${dataMenu.elloIconHover.fixed.src})`,
                          },
                        }}
                      ></a>
                    </div>

                    <div className={`lang-switch`}>
                      <Link
                        to="/"
                        onClick={() => {
                          // set(data.menuRightEN)
                          // langToggle()
                          // langSwitch(true)
                        }}
                      >
                        PL
                      </Link>
                      |
                      <Link
                        to="/en"
                        onClick={() => {
                          // set(data.menuRightEN)
                          // langToggle()
                          // langSwitch(true)
                        }}
                      >
                        EN
                      </Link>
                    </div>
                  </div>

                  <div className="menu-wrapper">
                    <Link to={`/`} className={`link-bottom-logo`}>
                      <img
                        className={`bottom-menu-logo`}
                        src={darkLogo}
                        alt=""
                      ></img>
                    </Link>
                    <div
                      className={`menu-left ${
                        navToggled ? "menu-left-part-active" : ""
                      }`}
                    >
                      <div className="menu-grouped-items">
                        <Link
                          to={
                            about.locale === "pl"
                              ? `/all`
                              : `/${about.locale}/all`
                          }
                        >
                          <h3>{dataMenuLeft.projectsHeader}</h3>
                        </Link>

                        {/* <Link
                        to={
                          category.locale === "pl"
                            ? `/${category.categoryFirstSlug}`
                            : `/${about.locale}/${category.categoryFirstSlug}`
                        }
                      >
                        <p className={`project-subfield`}>
                          {dataMenuLeft.projectsSubfield1}
                        </p>
                      </Link> */}

                        {/* <Link
                        to={
                          category.locale === "pl"
                            ? `/${category.categorySecondSlug}`
                            : `/${about.locale}/${category.categorySecondSlug}`
                        }
                      >
                        <p className={`project-subfield`}>
                          {dataMenuLeft.projectsSubfield2}
                        </p>
                      </Link> */}
                      </div>

                      <Link to={`/${offer.slug}`}>
                        <h3>
                          {dataMenuLeft.offerHeader}
                          {/* <p className="offer-subfield">
                          {dataMenuLeft.}
                        </p> */}
                        </h3>
                      </Link>

                      <Link
                        to={
                          about.locale === "pl"
                            ? `/${about.slug}`
                            : `/${about.locale}/${about.slug}`
                        }
                      >
                        <h3>{dataMenuLeft.aboutHeader}</h3>
                      </Link>

                      {/* <div className="menu-grouped-items">
                          <h3>{dataMenuLeft. }</h3>

                          <Link to={ about.locale === "pl" ? `/${houseProject.slug}` : `/${houseProject.locale}/${houseProject.slug}`}>
                          <p>{dataMenuLeft. }</p>
                          </Link>

                          <Link to={ about.locale === "pl" ? `/${interiorProject.slug}` : `/${interiorProject.locale}/${interiorProject.slug}`}>
                          <p className={`${isOpen ? "title-hidden" : ""}`}>{dataMenuLeft. }</p>
                          </Link>

                        </div> */}

                      {/* <div
                      className={`contact-form-container ${
                        isOpen ? "form-active" : ""
                      }`}
                    >
                      <div className="contact-form-wrapper">
                      <h3>Napisz do nas</h3>
                      </div>

                      <ContactForm
                        handleContactFormToggle={handleContactFormToggle}
                      />
                    </div>

                    <h3
                      className={`contact-form-title ${
                        isOpen ? "title-hidden" : ""
                      }`}
                      onClick={() => {
                        handleContactFormToggle()
                      }}
                    >
                      {dataMenuLeft.contactHeader}
                    </h3> */}
                    </div>

                    {/* <div
                    className={`menu-right ${
                      isOpen ? "menu-right-contact-active" : ""
                    } ${navToggled ? "menu-right-part-active" : ""}`}
                  >
                    <Link to={`/`}>
                      <img className={`menu-logo`} src={lightLogo} alt=""></img>
                    </Link>

                    <div className="menu-grouped-items">
                      <p>{dataMenu.adressData1}</p>
                      <p>{dataMenu.adressData2}</p>
                    </div>

                    <div className="menu-grouped-items">
                      <a href={`tel:${dataMenu.phoneNumber}`}>
                        {dataMenu.phoneNumber}
                      </a>
                      <p>{dataMenu.emailAdress}</p>
                    </div>

                    <div className="icons">
                      <a href={`${dataMenu.instagramLink}`} target="_blank">
                        <img src={dataMenu.instagramicon.fixed.src} alt="" />
                      </a>

                      <a href={`${dataMenu.instagramLink}`} target="_blank">
                        <img src={dataMenu.facebookicon.fixed.src} alt="" />
                      </a>
                    </div>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </myContext.Consumer>
    </>
  )
}

export default Menu
