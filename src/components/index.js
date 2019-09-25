import React from "react"
import { useStaticQuery, graphql } from "gatsby";

import Layout from "./layout"
import SEO from "./seo"

import Lastfm from './lastfm';
import HeaderSection from './header/section';


const IndexPage = () => {
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

      <HeaderSection text="Welcome to my little playpen. Here are some albums I've been listening to."></HeaderSection>

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
