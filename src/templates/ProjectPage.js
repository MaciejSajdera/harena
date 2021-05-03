import React, { Component, createRef } from "react"
import { Link, graphql, navigate, Img } from "gatsby"
import { LazyLoadImage } from "react-lazy-load-image-component"
import LazyLoad from "react-lazyload"
import "react-lazy-load-image-component/src/effects/blur.css"
import Consumer from "../../context"
import { Helmet } from "react-helmet"
import {
  HiArrowNarrowUp,
  HiArrowNarrowDown,
  HiArrowNarrowLeft,
  HiArrowNarrowRight,
} from "react-icons/hi"
import { IconContext } from "react-icons"

import Header from "../components/Header/header"
import Menu from "../components/Menu/menu"
import myContext from "../../context"

import * as basicLightbox from "basiclightbox"

import { Swiper, SwiperSlide } from "swiper/react"

import SwiperCore, {
  Navigation,
  A11y,
  Lazy,
  Keyboard,
  Mousewheel,
  Autoplay,
  Pagination,
} from "swiper"
SwiperCore.use([
  Navigation,
  Mousewheel,
  Keyboard,
  A11y,
  Lazy,
  Autoplay,
  Pagination,
])

class ProjectPage extends Component {
  componentDidMount() {
    // console.log()
    // const arrowButtonLeft = document.querySelector(".box-bt-left")
    // const arrowButtonRight = document.querySelector(".box-bt-right")
    // setTimeout(() => {
    // arrowButtonLeft.classList.add("arrow-entered")
    // arrowButtonRight.classList.add("arrow-entered")
    // }, 250)

    document.querySelectorAll(".swiper-slide").forEach(image => {
      image.onclick = function () {
        const markup = this.closest(".swiper-container-holder").cloneNode(true)
        console.log(markup)
        markup
          .querySelector(".swiper-container")
          .classList.add("swiper-lightbox")

        markup.querySelector(".swiper-wrapper").style = ""

        markup
          .querySelector(".swiper-pagination")
          .classList.add("swiper-pagination-lightbox")

        markup
          .querySelector(".swiper-button-next")
          .classList.add("swiper-button-next-lightbox")

        markup
          .querySelector(".swiper-button-prev")
          .classList.add("swiper-button-prev-lightbox")

        const thisSlideNumber = this.dataset.number

        const closeButton = document.createElement("A")
        closeButton.classList.add("close-lightbox")

        markup.appendChild(closeButton)

        // this.closest(".swiper-wrapper").childNodes.forEach(node => {
        // 	return `<div></div>`;
        // });

        const instance = basicLightbox.create(markup, {
          onShow: instance => {
            instance.element().querySelector("a").onclick = instance.close
          },
        })

        instance.show()

        // onShow: instance => {
        //   instance.element().querySelector("a").onclick = instance.close
        // }

        const Swiper = require("swiper").default

        var productGallery_lightbox = new Swiper(".swiper-lightbox", {
          direction: "horizontal",
          loop: false,
          // parallax: true,
          centeredSlides: true,
          slidesPerView: 1,
          speed: 1000,
          grabCursor: true,
          initialSlide: thisSlideNumber,

          pagination: {
            el: ".swiper-pagination-lightbox",
          },

          navigation: {
            nextEl: ".swiper-button-next-lightbox",
            prevEl: ".swiper-button-prev-lightbox",
          },
        })
      }
    })
  }

  render() {
    let {
      projects,
      menuRightProject,
      menuLeftProject,
      about,
      logoData,
      houseProject,
      interiorProject,
      category,
      offer,
    } = this.props.data

    const { myProjectData } = this.props.pageContext

    const menuStyle = `menuStyleFixed`

    this.topRef = createRef()
    this.nextSectionRef = createRef()

    // const { locale } = this.props.pageContext.locale;

    // const { fullScreenPhoto } = this.props.pageContext.fullScreenPhoto;

    const handleArrowPrev = e => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }

    // const handleArrowNext = () =>
    // this.nextSectionRef.current.scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'start',
    // });

    const handleArrowNext = e => {
      let pageHeight = window.innerHeight
      window.scrollBy({
        top: pageHeight,
        behavior: "smooth",
      })
    }

    console.log(this.props.transitionStatus)

    // handleScroll = (e) => {
    //   const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    //   if (bottom) {

    //    }
    // }

    const SwiperConfigs = {
      spaceBetween: 0,
      watchSlidesProgress: true,
      navigation: true,
      lazy: false,
      parallax: true,
      speed: 1500,
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: true,
      // },

      touchRatio: 0.2,
      slidesPerView: 1,
      mousewheel: {
        sensitivity: 1,
      },
      pagination: { clickable: true, dynamicBullets: true },
      observer: "true",
    }

    return (
      <>
        <Helmet
          meta={[
            {
              name: `description`,
              content: myProjectData.projectDescription,
            },
            {
              property: `og:title`,
              content: `${myProjectData.titlePart1} - Harena`,
            },
            {
              property: `og:description`,
              content: myProjectData.projectDescription,
            },
            {
              property: `og:image`,
              content: myProjectData.productPhotos[0].url,
            },
            {
              name: `twitter:title`,
              content: `${myProjectData.titlePart1} - Harena`,
            },
            {
              name: `twitter:description`,
              content: myProjectData.projectDescription,
            },
          ]}
        />
        <div>
          <Header />
          <Menu
            dataMenu={menuRightProject}
            dataMenuLeft={menuLeftProject}
            dataProjects={projects}
            menuStyle={menuStyle}
            about={about}
            logoData={logoData}
            houseProject={houseProject}
            interiorProject={interiorProject}
            category={category}
            offer={offer}
          />

          <div className="project-content-middle" ref={this.nextSectionRef}>
            <div className="content section-left">
              <div className="content-wrapper">
                {/* <div className="scroll-marker">

              </div> */}

                <div className="text-container">
                  <h2>{myProjectData.titlePart1}</h2>
                  {/* <h2>{myProjectData. }</h2> */}
                  <div className="project-description">
                    <p>{myProjectData.projectDescription}</p>
                  </div>
                </div>
              </div>
              <div className={`price-container`}>
                <p className={`price-container__price`}>
                  {myProjectData.priceText}:{" "}
                  <strong>{myProjectData.areaValue}</strong>
                </p>
                <myContext.Consumer>
                  {({ isFormOpen, handleContactFormToggle }) => (
                    <div
                      className="order-button"
                      onClick={() =>
                        handleContactFormToggle(myProjectData.titlePart1)
                      }
                    >
                      <p>Zamów</p>
                    </div>
                  )}
                </myContext.Consumer>
              </div>
            </div>

            <div className="content section-right">
              <div className="secondary-project-image">
                <span className="swiper-container-holder">
                  <Swiper {...SwiperConfigs}>
                    {myProjectData.productPhotos.map((photo, index) => {
                      return (
                        <SwiperSlide
                          key={index}
                          id={`slide-id-${index}`}
                          onClick={this.handleTransitionLinkType}
                          onMouseLeave={this.handleOnMouseLeave}
                          style={{
                            backgroundImage: `url(${photo.url})`,
                            backgroundRepeat: `no-repeat`,
                            backgroundSize: `cover`,
                            backgroundPosition: `center`,
                          }}
                        ></SwiperSlide>
                      )
                    })}
                  </Swiper>
                </span>
                {/* <img src={`${myProjectData.fullScreenPhoto.fluid.src}`} /> */}
                {/* <LazyLoadImage
                // alt={image.alt}
                // height={image.height}
                effect="blur"
                src={myProjectData.secondaryPhoto.fluid.src} // use normal <img> attributes as props
                // width={image.width}
              /> */}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ProjectPage

export const query = graphql`
  query myProjectData($locale: String!) {
    projects: allDatoCmsProject(filter: { locale: { eq: $locale } }) {
      nodes {
        slug
        locale
        id
        position
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
      categorySecondSlug
      locale
    }

    offer: datoCmsOffer(locale: { eq: $locale }) {
      locale
      slug
    }
  }
`
