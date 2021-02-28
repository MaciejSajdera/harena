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

  return (
    <myContext.Consumer>
      {({
        handleNavToggle,
        navToggled,
        set,
        isFormOpen,
        handleContactFormToggle,
      }) => (
        <>
          <div
            className={`contact-form-container ${
              isFormOpen ? "form-active" : ""
            }`}
          >
            {/* <div className="contact-form-wrapper"> */}
            {/* <h3>Napisz do nas</h3> */}
            {/* </div> */}

            <ContactForm handleContactFormToggle={handleContactFormToggle} />
          </div>

          <div
            className={`contact-form-title contact-form-title-desktop ${
              navToggled ? "title-visible" : ""
            }`}
            onClick={() => handleContactFormToggle()}
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
                  <div
                    className={`contact-form-title contact-form-title-mobile ${
                      navToggled ? "title-visible" : ""
                    }`}
                    onClick={() => handleContactFormToggle()}
                  >
                    <p>{dataMenuLeft.contactHeader}</p>
                  </div>

                  <div className="icons">
                    <a
                      className={`facebook`}
                      href={`${dataMenu.facebookLink}`}
                      target="_blank"
                    >
                      <svg
                        id="Bold"
                        enable-background="new 0 0 24 24"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="#c7c7c7"
                          d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z"
                        />
                      </svg>
                    </a>

                    <a
                      className={`instagram`}
                      href={`${dataMenu.instagramLink}`}
                      target="_blank"
                      // css={{
                      //   backgroundImage: `url(${dataMenu.instagramicon.fixed.src})`,
                      //   backgroundRepeat: `no-repeat`,
                      //   ":hover": {
                      //     backgroundImage: `url(${dataMenu.instagramIconHover.fixed.src})`,
                      //   },
                      // }}
                    >
                      <svg
                        height="511pt"
                        viewBox="0 0 511 511.9"
                        width="511pt"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="#c7c7c7"
                          d="m510.949219 150.5c-1.199219-27.199219-5.597657-45.898438-11.898438-62.101562-6.5-17.199219-16.5-32.597657-29.601562-45.398438-12.800781-13-28.300781-23.101562-45.300781-29.5-16.296876-6.300781-34.898438-10.699219-62.097657-11.898438-27.402343-1.300781-36.101562-1.601562-105.601562-1.601562s-78.199219.300781-105.5 1.5c-27.199219 1.199219-45.898438 5.601562-62.097657 11.898438-17.203124 6.5-32.601562 16.5-45.402343 29.601562-13 12.800781-23.097657 28.300781-29.5 45.300781-6.300781 16.300781-10.699219 34.898438-11.898438 62.097657-1.300781 27.402343-1.601562 36.101562-1.601562 105.601562s.300781 78.199219 1.5 105.5c1.199219 27.199219 5.601562 45.898438 11.902343 62.101562 6.5 17.199219 16.597657 32.597657 29.597657 45.398438 12.800781 13 28.300781 23.101562 45.300781 29.5 16.300781 6.300781 34.898438 10.699219 62.101562 11.898438 27.296876 1.203124 36 1.5 105.5 1.5s78.199219-.296876 105.5-1.5c27.199219-1.199219 45.898438-5.597657 62.097657-11.898438 34.402343-13.300781 61.601562-40.5 74.902343-74.898438 6.296876-16.300781 10.699219-34.902343 11.898438-62.101562 1.199219-27.300781 1.5-36 1.5-105.5s-.101562-78.199219-1.300781-105.5zm-46.097657 209c-1.101562 25-5.300781 38.5-8.800781 47.5-8.601562 22.300781-26.300781 40-48.601562 48.601562-9 3.5-22.597657 7.699219-47.5 8.796876-27 1.203124-35.097657 1.5-103.398438 1.5s-76.5-.296876-103.402343-1.5c-25-1.097657-38.5-5.296876-47.5-8.796876-11.097657-4.101562-21.199219-10.601562-29.398438-19.101562-8.5-8.300781-15-18.300781-19.101562-29.398438-3.5-9-7.699219-22.601562-8.796876-47.5-1.203124-27-1.5-35.101562-1.5-103.402343s.296876-76.5 1.5-103.398438c1.097657-25 5.296876-38.5 8.796876-47.5 4.101562-11.101562 10.601562-21.199219 19.203124-29.402343 8.296876-8.5 18.296876-15 29.398438-19.097657 9-3.5 22.601562-7.699219 47.5-8.800781 27-1.199219 35.101562-1.5 103.398438-1.5 68.402343 0 76.5.300781 103.402343 1.5 25 1.101562 38.5 5.300781 47.5 8.800781 11.097657 4.097657 21.199219 10.597657 29.398438 19.097657 8.5 8.300781 15 18.300781 19.101562 29.402343 3.5 9 7.699219 22.597657 8.800781 47.5 1.199219 27 1.5 35.097657 1.5 103.398438s-.300781 76.300781-1.5 103.300781zm0 0"
                        />
                        <path
                          fill="#c7c7c7"
                          d="m256.449219 124.5c-72.597657 0-131.5 58.898438-131.5 131.5s58.902343 131.5 131.5 131.5c72.601562 0 131.5-58.898438 131.5-131.5s-58.898438-131.5-131.5-131.5zm0 216.800781c-47.097657 0-85.300781-38.199219-85.300781-85.300781s38.203124-85.300781 85.300781-85.300781c47.101562 0 85.300781 38.199219 85.300781 85.300781s-38.199219 85.300781-85.300781 85.300781zm0 0"
                        />
                        <path
                          fill="#c7c7c7"
                          d="m423.851562 119.300781c0 16.953125-13.746093 30.699219-30.703124 30.699219-16.953126 0-30.699219-13.746094-30.699219-30.699219 0-16.957031 13.746093-30.699219 30.699219-30.699219 16.957031 0 30.703124 13.742188 30.703124 30.699219zm0 0"
                        />
                      </svg>
                    </a>

                    <a
                      className={`behance`}
                      href={`${dataMenu.behanceLink}`}
                      target="_blank"
                      // css={{
                      //   backgroundImage: `url(${dataMenu.behanceIcon.fixed.src})`,
                      //   backgroundRepeat: `no-repeat`,
                      //   ":hover": {
                      //     backgroundImage: `url(${dataMenu.behanceIconHover.fixed.src})`,
                      //   },
                      // }}
                    >
                      <svg
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="31.47px"
                        height="31.47px"
                        viewBox="0 0 31.47 31.47"
                      >
                        <g>
                          <path
                            fill="#c7c7c7"
                            id="Behance"
                            d="M28.311,8.465h-8.166V6.436h8.166V8.465L28.311,8.465z M15.829,16.781c0.526,0.817,0.79,1.81,0.79,2.971
		c0,1.205-0.297,2.283-0.901,3.236c-0.384,0.631-0.862,1.164-1.435,1.592c-0.646,0.496-1.41,0.838-2.288,1.021
		c-0.882,0.183-1.835,0.272-2.862,0.272H0V5.597h9.792c2.468,0.039,4.218,0.754,5.251,2.16c0.62,0.861,0.927,1.894,0.927,3.095
		c0,1.241-0.312,2.232-0.937,2.985c-0.348,0.423-0.862,0.808-1.544,1.154C14.522,15.37,15.305,15.963,15.829,16.781z M4.676,13.591
		h4.291c0.882,0,1.595-0.169,2.143-0.503c0.549-0.335,0.823-0.93,0.823-1.784c0-0.942-0.362-1.568-1.089-1.869
		c-0.625-0.21-1.424-0.318-2.393-0.318H4.676V13.591z M12.346,19.462c0-1.053-0.431-1.78-1.29-2.172
		c-0.48-0.221-1.158-0.336-2.027-0.344H4.676v5.403H8.96c0.881,0,1.562-0.114,2.054-0.356
		C11.901,21.553,12.346,20.712,12.346,19.462z M31.34,16.164c0.1,0.664,0.145,1.626,0.125,2.884H20.891
		c0.059,1.46,0.562,2.48,1.519,3.064c0.575,0.366,1.274,0.545,2.093,0.545c0.863,0,1.566-0.218,2.107-0.666
		c0.295-0.238,0.555-0.574,0.779-0.996h3.877c-0.103,0.861-0.568,1.734-1.408,2.625c-1.299,1.41-3.121,2.121-5.461,2.121
		c-1.935,0-3.638-0.6-5.117-1.789c-1.475-1.192-2.215-3.131-2.215-5.817c0-2.519,0.666-4.449,2-5.79
		c1.338-1.345,3.065-2.014,5.195-2.014c1.262,0,2.4,0.225,3.416,0.678c1.012,0.455,1.848,1.169,2.506,2.151
		C30.777,14.025,31.161,15.025,31.34,16.164z M27.523,16.543c-0.069-1.009-0.407-1.773-1.015-2.295
		c-0.603-0.525-1.354-0.787-2.25-0.787c-0.978,0-1.729,0.28-2.267,0.832c-0.539,0.553-0.874,1.301-1.012,2.25H27.523z"
                          />
                        </g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                      </svg>
                    </a>

                    <a
                      className={`elloco`}
                      href={`${dataMenu.elloCoLink}`}
                      target="_blank"
                      // css={{
                      //   backgroundImage: `url(${dataMenu.elloCoIcon.fixed.src})`,
                      //   backgroundRepeat: `no-repeat`,
                      //   ":hover": {
                      //     backgroundImage: `url(${dataMenu.elloIconHover.fixed.src})`,
                      //   },
                      // }}
                    >
                      <svg
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                      >
                        <g>
                          <g>
                            <path
                              fill="#c7c7c7"
                              d="M256,0C114.6,0,0,114.6,0,256s114.6,256,256,256s256-114.6,256-256S397.4,0,256,0z M434.7,325.8
			C405.8,400,335.6,448,256,448S106.2,400,77.2,325.8c-3.2-8.2,0.9-17.5,9.1-20.7c8.1-3.2,17.5,0.9,20.7,9.1
			C131.2,376,189.7,416,256,416s124.8-40,148.9-101.8c3.2-8.2,12.5-12.4,20.7-9.1C433.9,308.3,438,317.6,434.7,325.8z"
                            />
                          </g>
                        </g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                      </svg>
                    </a>
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
  )
}

export default Menu
