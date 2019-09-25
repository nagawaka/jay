import React from "react"

import Layout from "./layout"
import SEO from "./seo"

import HeaderSection from './header/section';

import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'

const AlbumPage = ({ pageContext }) => {
  const { album } = pageContext;

  return (
    <ModalRoutingContext>
      {({ modal, closeTo }) => (
        <div>
          {modal ? (
            <h1>{album.name} by <small>{album.artist.name}</small></h1>
          ) : (
          <Layout>
            <SEO title="Album" />
          
            <HeaderSection text="Welcome to my little playpen. Here are some albums I've been listening to."></HeaderSection>

            <h1>{album.name} by <small>{album.artist.name}</small></h1>

            <section className="section">
              <div className="container">
                <p>Powered by <a href="https://www.last.fm/" target="_blank" rel="noopener noreferrer">last.fm</a></p>
              </div>
            </section>
          </Layout>
          )}
        </div>
      )}
    </ModalRoutingContext>
  )
}

export default AlbumPage
