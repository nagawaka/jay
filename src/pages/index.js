import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Lastfm from './../components/lastfm';

export const query = graphql`
query {
  allLastfmAlbum {
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
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />

      <section className="section">
        <div className="container">
          <h1>Hello world!</h1>
          <p>Welcome to my little playpen. Here are some songs I've been listening to</p>
        </div>
      </section>

      <Lastfm data={data} />
    </Layout>
  )
}

export default IndexPage
