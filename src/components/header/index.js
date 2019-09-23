import PropTypes from "prop-types"
import React from "react"

import './header.scss';

const Header = ({ siteTitle }) => (
  <header>
    <div className="container">
      <h1>
        { siteTitle }
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
