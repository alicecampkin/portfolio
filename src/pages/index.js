import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Slide from "../components/slide"
import Slider from "../components/slider"
import LandingSlide from "../components/landing"

import { jamesRidgway } from "../content/websites"
import { sophistiCakes } from "../content/websites"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Slider>
      <LandingSlide />
      <Slide website={sophistiCakes} />
      <Slide website={jamesRidgway} />
    </Slider>
  </Layout>
)

export default IndexPage
