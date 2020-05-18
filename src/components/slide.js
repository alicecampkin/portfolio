import React from "react"
import styled from "styled-components"
import Banner from "./banner"

import { InnerContainer } from "./inner"

const Slide = ({ website }) => (
  <div className="swiper-slide">
    <Banner>
      {website && (
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={website.imageDesktop}
            alt={website.title}
          />
          <source
            media="(min-width: 465px)"
            srcSet={website.imageTablet}
            alt={website.title}
          />
          <img src={website.image.mobile} alt={website.title} />
        </picture>
      )}
    </Banner>

    <SlideInner>
      <Words>
        {website && (
          <h1>
            <a href={website.url} target="_blank" rel="noopener noreferrer">
              {website.title}
            </a>
          </h1>
        )}
        {website && <h3>{website.subtitle}</h3>}
        {website && <p>{website.description}</p>}
      </Words>

      <Mockup>
        {website && <img src={website.mockup} alt={website.title} />}
      </Mockup>
    </SlideInner>
  </div>
)

const SlideInner = styled(InnerContainer)`
  display: block;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
`

const Words = styled.div`
  width: 100%;
  max-width: 500px;
  margin-right: 2rem;
  overflow-y: scroll;

  h1 {
    margin: 0;
  }
  h3 {
    margin: 0.5rem 0;
  }
`

const Mockup = styled.div`
  img {
    display: block;
    width: 100%;
    height: 100%;
    max-width: 250px;
    height: auto;
    object-fit: contain;
    margin: 2rem auto 3rem auto;
  }

  @media (min-width: 1500px) {
    img {
      max-width: 300px;
      margin: 2rem auto 0 auto;
    }
  }
`

export default Slide
