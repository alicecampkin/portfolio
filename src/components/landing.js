import React from "react"
import styled from "styled-components"
import Banner from "./banner"
import Intro from "./intro"
import { InnerContainer } from "./inner"

const LandingSlide = () => (
  <div className="swiper-slide">
    <Banner>
      <Intro />
    </Banner>

    <SlideInner>
      <Words>
        <h3>Welcome</h3>
        <p>
          Hi, I'm Alice. I'm an engineer and developer from Sheffield, UK. I've
          made this website using React and Styled Components to showcase my
          small but growing portfolio of projects.
        </p>
        <p>
          You can find more projects on my{" "}
          <a
            href="https://github.com/alicecampkin"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub page
          </a>
          . To drop me a message, email alice.campkin@gmail.com
        </p>
      </Words>
    </SlideInner>
  </div>
)

const SlideInner = styled(InnerContainer)`
  display: block;
  padding-bottom: 2rem;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
`

const Words = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  margin-right: 2rem;
  margin-bottom: 2rem;
  overflow-y: scroll;

  h1 {
    margin: 0;
  }
  h3 {
    margin: 0.5rem 0;
  }

  @media (min-width: 1024px) {
    max-height: 300px;
    overflow-y: scroll;
  }
`

export default LandingSlide
