import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import "../styles/style.scss"

const Layout = ({ children }) => <Page>{children}</Page>

const Page = styled.div`
  margin: 0;
  width: 100vw;
  background: #fafafa;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
