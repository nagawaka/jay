import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import simpleIcons from 'simple-icons';

import './../styles/main.scss';

import Header from "./header/index"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <section>
        <main>
          {children}
        </main>
      </section>
      <footer className="section">
        <div className="container">
          <div className="columns is-mobile">
            <div className="column">
              © {new Date().getFullYear()} nagawaka
            </div>
            <div className="column has-text-right">
              <div className="is-inline-block">
                <a href="https://twitter.com/mnagawaka" target="_blank" rel="noopener noreferer">
                  <span className="my-icon" dangerouslySetInnerHTML={{ __html: simpleIcons.get("Twitter").svg }}></span>
                </a>
              </div>
              <div className="is-inline-block">
                <a href="https://github.com/nagawaka" target="_blank" rel="noopener noreferer">
                  <span className="my-icon" dangerouslySetInnerHTML={{ __html: simpleIcons.get("GitHub").svg }}></span>
                </a>
              </div>
              <div className="is-inline-block">
                <a href="https://www.linkedin.com/in/nagawaka" target="_blank" rel="noopener noreferer">
                  <span className="my-icon" dangerouslySetInnerHTML={{ __html: simpleIcons.get("Linkedin").svg }}></span>
                </a>
              </div>
              <div className="is-inline-block">
                <a href="mailto://nakagawa@gmail.com">
                  <span className="my-icon" dangerouslySetInnerHTML={{ __html: simpleIcons.get("Gmail").svg }}></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
