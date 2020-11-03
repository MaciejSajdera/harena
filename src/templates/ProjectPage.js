import React, { Component, createRef } from "react"
import { Link, graphql, navigate, Img } from "gatsby"
import { LazyLoadImage } from "react-lazy-load-image-component"
import LazyLoad from "react-lazyload"
import "react-lazy-load-image-component/src/effects/blur.css"
import Consumer from "../../context"
import {
  HiArrowNarrowUp,
  HiArrowNarrowDown,
  HiArrowNarrowLeft,
  HiArrowNarrowRight,
} from "react-icons/hi"
import { IconContext } from "react-icons"

import Header from "../components/Header/header"
import Menu from "../components/Menu/menu"

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

    return (
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

        {/* {this.props.data.menuRight.phoneNumber} */}
        {/* <div> */}

        {/* strona projektu: {myProjectData.slug} */}
        {/* testmenudata: {menuRight.phoneNumber} */}
        {/* </div> */}

        {/* <div className={`arrow-box box-bt-left`} onClick={handleArrowPrev}>
          <div className={`menu-trigger`}>
            <IconContext.Provider
              value={{ color: "white", size: "4em", height: "100" }}
            >
              <HiArrowNarrowUp />
            </IconContext.Provider>
          </div>
        </div> */}
        {/* 
        <div className={`arrow-box box-bt-right`} onClick={handleArrowNext}>
          <div className={`menu-trigger`}>
            <IconContext.Provider
              value={{ color: "white", size: "4em", height: "100" }}
            >
              <HiArrowNarrowDown />
            </IconContext.Provider>
          </div>
        </div> */}

        {/* <div className="fullscreen-project-image" ref={this.topRef}> */}
        {/* <img src={`${myProjectData.fullScreenPhoto.fluid.src}`} /> */}
        {/* <LazyLoadImage
            // alt={image.alt}
            // height={image.height}
            effect="blur"
            placeholderSrc={myProjectData.fullScreenPhoto.fluid.src}
            // visibleByDefault
            src={myProjectData.fullScreenPhoto.fluid.src} // use normal <img> attributes as props
            // width={image.width}
          /> */}
        {/* <LazyLoad ref={this.topRef}>
          <div
            className={`slide-bg-fullscreen`}
            css={{
              backgroundImage: `url(
                              ${myProjectData.fullScreenPhoto.fluid.src}
                            )`,
            }}
          ></div>
        </LazyLoad> */}
        {/* </div> */}

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
              <p>
                {myProjectData.priceText}:{" "}
                <strong>{myProjectData.areaValue}</strong>
              </p>
            </div>
          </div>

          <div className="content section-right">
            <div className="secondary-project-image">
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                mousewheel={{
                  sensitivity: 4,
                }}
                navigation
                keyboard
                pagination={{ clickable: true }}
                a11y
                autoplay={{
                  delay: 6000,
                  stopOnLastSlide: true,
                }}
                lazy={{ loadPrevNext: true, loadPrevNextAmount: 3 }}
              >
                {myProjectData.productPhotos.map((photo, index) => {
                  return (
                    <SwiperSlide
                      key={index}
                      id={`slide-id-${index}`}
                      onClick={this.handleTransitionLinkType}
                      onMouseLeave={this.handleOnMouseLeave}
                      // onClick={e => scrollTo(`#slide-id-${index}`)}
                    >
                      {/* <LazyLoad>
                        <div
                          className={`slide-bg-fullscreen`}
                          css={{
                            backgroundImage: `url(
                              ${photo.url}
                            )`,
                          }}
                        ></div>
                      </LazyLoad> */}
                      <LazyLoadImage
                        // alt={image.alt}
                        // height={image.height}
                        effect="blur"
                        src={photo.url} // use normal <img> attributes as props
                        // width={image.width}
                      />
                    </SwiperSlide>
                  )
                })}
              </Swiper>
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
