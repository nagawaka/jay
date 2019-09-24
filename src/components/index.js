import React from "react"

import Layout from "./layout"
import SEO from "./seo"

import Lastfm from './lastfm';

import { useStaticQuery, graphql } from "gatsby";

const IndexPage = ({ pageContext }) => {
  // const { data } = pageContext;
  const data = useStaticQuery(graphql`
    query {
      allLastfmAlbum(filter: {tracks: {elemMatch: {image: {elemMatch: {text: {}}}, fields: {show: {ne: false}}}}}) {
        edges {
          node {
            id
            name
            mbid
            artist {
              id
              name
            }
            tracks {
              image {
                text
                size
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />

      <section className="section">
        <div className="container">
          <h1>Hello world!</h1>
          <p>Welcome to my little playpen. Here are some albums I've been listening to.</p>
        </div>
      </section>

      <Lastfm data={data.allLastfmAlbum.edges} />

      <section className="section">
        <div className="container">
          <p>Powered by <a href="https://www.last.fm/" target="_blank" rel="noopener noreferrer">last.fm</a></p>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
