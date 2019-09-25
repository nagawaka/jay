import React from "react"
// import { useStaticQuery, graphql } from "gatsby";

import Layout from "./../components/layout"
import SEO from "./../components/seo"

const ArtistsPage = ({ data }) => {
  // const query = useStaticQuery(graphql`
  //   query {
  //     allLastfmArtist {
  //       totalCount
  //       edges {
  //         node {
  //           id
  //           name
  //           mbid
  //           image {
  //             text
  //             size
  //           }
  //           playbacks {
  //             track {
  //               id
  //               name
  //             }
  //           }
  //           tracks {
  //             image {
  //               text
  //               size
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <Layout>
      <SEO title="Artists" />

      <section className="section">
        <div className="container">
          <h1>List by artists</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p>Powered by <a href="https://www.last.fm/" target="_blank" rel="noopener noreferrer">last.fm</a></p>
        </div>
      </section>
    </Layout>
  )
}

export default ArtistsPage
