import React from "react"
import styled from "styled-components"

import highlight from "../images/HeadingBackground_w600.png"

const Intro = () => (
  <div>
    <P>Hi, my name is</P>
    <Name>Alice Campkin</Name>
    <P>I like to make things for the web.</P>
  </div>
)

const Name = styled.h1`
  margin: 1rem 0;
  padding-left: 1rem;
  padding-right: 3rem;
  background-image: url(${highlight});
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: left center;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1500px) {
    font-size: 4rem;
  }
`

const P = styled.p`
  font-size: 1.2rem;
  padding-left: 1rem;

  @media (min-width: 1500px) {
    font-size: 1.7rem;
  }
`

export default Intro
