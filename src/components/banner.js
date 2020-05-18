import React from "react"
import styled from "styled-components"
import { InnerContainer } from "./inner"

const Banner = ({ children }) => (
  <BannerContainer>
    <BannerLeft>
      <BannerInner>{children}</BannerInner>
      <OverlayTop />
      <OverlayBottom />
    </BannerLeft>

    <BannerRight>
      <OverlayTop />
      <OverlayBottom />
    </BannerRight>
  </BannerContainer>
)

const BannerContainer = styled.div`
  width: 100vw;
  height: 250px;
  margin-top: 50px;
  margin-bottom: 2rem;
  position: relative;
  background: none;

  @media (min-width: 768px) {
    height: 300px;
  }
  @media (min-width: 1500px) {
    height: 400px;
    margin-top: 150px;
  }
`

const BannerLeft = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgb(223, 226, 232);
  background: linear-gradient(
    180deg,
    rgba(223, 226, 232, 1) 0%,
    rgba(233, 236, 242, 1) 100%
  );

  @media (min-width: 1024px) {
    width: 85%;
  }
`

const BannerRight = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 0;
  height: 100%;
  background: rgb(223, 226, 232);
  background: linear-gradient(
    180deg,
    rgba(223, 226, 232, 1) 0%,
    rgba(233, 236, 242, 1) 100%
  );

  @media (min-width: 1024px) {
    width: 7.5%;
  }
`

const BannerInner = styled(InnerContainer)`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: 0;
  z-index: 2;

  @media (min-width: 768px) {
    padding-left: 15vw;
  }

  @media (min-width: 1500px) {
    padding-left: calc(50vw - 512px);
  }

  picture {
    height: 100%;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;

    @media (min-width: 768px) {
      width: auto;
      object-fit: contain;
    }
  }
`

const OverlayBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30px;
  z-index: 99;
  background: linear-gradient(
    0deg,
    rgba(160, 165, 175, 0.1) 0%,
    rgba(160, 165, 175, 0) 50%
  );
`

const OverlayTop = styled(OverlayBottom)`
  top: 0;
  background: linear-gradient(
    180deg,
    rgba(160, 165, 175, 0.1) 0%,
    rgba(160, 165, 175, 0) 50%
  );
`

export default Banner
