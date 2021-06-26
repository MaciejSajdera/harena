import React, { useState } from "react"

import AniLink from "gatsby-plugin-transition-link/AniLink"

import LazyLoad from "react-lazyload"
import posed from "react-pose"
import bgLogo from "../../images/harena-page-transition.png"
import TransitionLink from "gatsby-plugin-transition-link"
import scrollTo from "gatsby-plugin-smoothscroll"
import "swiper/swiper.scss"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, {
  Navigation,
  A11y,
  Lazy,
  Keyboard,
  Mousewheel,
  Autoplay,
  Parallax,
} from "swiper"

SwiperCore.use([
  Navigation,
  Mousewheel,
  Keyboard,
  A11y,
  Lazy,
  Autoplay,
  Parallax,
])

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mouseWheelActive: false,
      transitionLinkTarget: 0,
    }

    // this.handleTransitionLinkType = this.handleTransitionLinkType.bind(this);
  }

  componentDidMount() {
    const swiperButtonLeft = document.querySelector(".swiper-button-prev")
    const swiperButtonRight = document.querySelector(".swiper-button-next")


    setTimeout(() => {
      swiperButtonLeft.classList.add("arrow-entered")
      swiperButtonRight.classList.add("arrow-entered")

      document.querySelector("h2") && document.querySelector("h2").classList.add("text-reveal__bottom");
      document.querySelector("h2") && document.querySelector("h1").classList.add("text-reveal__bottom");
    }, 1000)
  }

  //https://dev.to/mattrothenberg/recreating-pentagram-com-a-deep-dive-with-gatsby-js-h75

  //https://www.gatsbyjs.com/blog/2018-12-04-per-link-gatsby-page-transitions-with-transitionlink/

  render() {
    let data = this.props.data
    let offer = this.props.offer

    return (
      <main className={`home`}>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          mousewheel={{
            sensitivity: 1,
          }}
          navigation
          keyboard
          a11y
          parallax={true}
          speed={1500}
          autoplay={{
            delay: 6000,
            stopOnLastSlide: true,
          }}

          onSlideChange={function() {
            
          console.log(this)
          let count = this.activeIndex;

          let allSlides = document.querySelectorAll(
            ".swiper-container .swiper-slide"
          );

          let currentSlide = allSlides[count];

          allSlides.forEach(slide => {
            slide.querySelector("h2") && slide.querySelector("h2").classList.remove("text-reveal__bottom");
            slide.querySelector("h1") && slide.querySelector("h1").classList.remove("text-reveal__bottom");
          })

          currentSlide.querySelector("h1") && currentSlide.querySelector("h1").classList.add("text-reveal__bottom");
          currentSlide.querySelector("h1") && currentSlide.querySelector("h2").classList.add("text-reveal__bottom");

          
          
          console.log(currentSlide)
          
          }}
        >
          {data.nodes
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
            .map((element, index) => {
              return (
                <SwiperSlide
                  key={index}
                  id={`slide-id-${index}`}
                  onClick={this.handleTransitionLinkType}
                  // onClick={e => scrollTo(`#slide-id-${index}`)}
                >
                  <div
                    className={`single-project-container`}
                    style={{
                      backgroundImage: `url(${element.homeSlide.fluid.src})`,
                      backgroundRepeat: `no-repeat`,
                      backgroundSize: `cover`,
                      backgroundPosition: `center`,
                    }}
                  >
                    <div className="slogans-wrapper">

                      <span>
                      <h1 /* data-swiper-parallax="-300" */>
                        {element.homeTextSlide1}
                      </h1>
                      </span>

                      <span>
                      <h2 /* data-swiper-parallax="-500" */>
                        {element.homeTextSlide2}
                      </h2>
                      </span>


                      <div
                        className="cta-button__holder"
                        /* data-swiper-parallax="-700" */
                      >
                        {/* <AniLink
                          className="cta-button"
                          cover
                          direction="right"
                          duration={2.2}
                          bg={`
                            url(${bgLogo})
                            center / cover
                            no-repeat
                            fixed
                            padding-box
                            content-box
                            black
                          `}
                          to={
                            offer.locale === "pl"
                              ? `/lookbook`
                              : `/${offer.locale}/lookbook`
                          }
                        >
                          Lookbook
                        </AniLink> */}
                      </div>
                    </div>

                    {/* <div className={`title-container`}>
                      <h2 className={`project-title-1`}>
                        {element.titlePart1}
                      </h2>
                      <h2 className={`project-title-2`}>
                        {element. }
                      </h2>

                      <div className="text-on-hover">
                        <p className="project-slogan">
                          {element.projectSlogan}
                        </p>
                        <p className="read-more">{element.readMore}</p>
                      </div>
                    </div> */}
                    {/* </Link> */}
                  </div>
                </SwiperSlide>
              )
            })}
        </Swiper>
      </main>
    )
  }
}

export default Main
