import React, { useState } from "react"

import LazyLoad from "react-lazyload"
import posed from "react-pose"

import TransitionLink from "gatsby-plugin-transition-link"
import scrollTo from "gatsby-plugin-smoothscroll"

import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, {
  Navigation,
  A11y,
  Lazy,
  Keyboard,
  Mousewheel,
  Autoplay,
} from "swiper"
SwiperCore.use([Navigation, Mousewheel, Keyboard, A11y, Lazy, Autoplay])

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mouseWheelActive: false,
      transitionLinkTarget: 0,
    }

    // this.handleTransitionLinkType = this.handleTransitionLinkType.bind(this);
  }

  handleWheel = e => {
    const delta = Math.sign(e.deltaY)
    delta < 0
      ? this.setState({ mouseWheelActive: false })
      : this.setState({ mouseWheelActive: true })
  }

  componentDidMount() {
    const swiperButtonLeft = document.querySelector(".swiper-button-prev")
    const swiperButtonRight = document.querySelector(".swiper-button-next")

    setTimeout(() => {
      swiperButtonLeft.classList.add("arrow-entered")
      swiperButtonRight.classList.add("arrow-entered")
    }, 300)
  }

  //https://dev.to/mattrothenberg/recreating-pentagram-com-a-deep-dive-with-gatsby-js-h75

  //https://www.gatsbyjs.com/blog/2018-12-04-per-link-gatsby-page-transitions-with-transitionlink/

  render() {
    let data = this.props.data

    let exitTransition

    const TRANSITION_LENGTH = 1.1

    const myExitTransition = () => {
      return (exitTransition = {
        length: TRANSITION_LENGTH,
        trigger: () => {
          console.log(`we are exiting home`)
        },
      })
    }

    const entryTransition = {
      delay: TRANSITION_LENGTH, // Wait 1.5 seconds before entering
      trigger: () => {
        console.log("We are entering")
        if (document && window) {
          // Ensuring we're at the top of the page when the page loads
          // prevents any additional JANK when the transition ends.
          window.scrollTo(0, 0)
          document.body.style.overflow = "visible"
        }
      },
    }

    return (
      <main>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          mousewheel={{
            sensitivity: 4,
          }}
          navigation
          keyboard
          a11y
          autoplay={{
            delay: 6000,
            stopOnLastSlide: true,
          }}
          lazy={{ loadPrevNext: true, loadPrevNextAmount: 3 }}
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
                  onMouseLeave={this.handleOnMouseLeave}
                  // onClick={e => scrollTo(`#slide-id-${index}`)}
                >
                  <div className={`single-project-container`}>
                    <LazyLoad>
                      <div
                        onWheel={this.handleWheel}
                        className={`slide-bg-fullscreen
                          ${
                            this.state.mouseWheelActive
                              ? `move-right`
                              : `move-left`
                          }
                          `}
                        css={{
                          backgroundImage: `url(
                              ${element.homeSlide.fluid.src}
                            )`,
                        }}
                      ></div>
                    </LazyLoad>

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
