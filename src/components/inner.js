import React from "react"
import styled from "styled-components"

function Inner({ children }) {
  return <InnerContainer>{children}</InnerContainer>
}

export const InnerContainer = styled.div`
  width: 90%;
  max-width: 1024px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 70%;
  }
`

export default Inner
