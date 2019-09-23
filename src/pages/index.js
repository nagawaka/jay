import { useStaticQuery, graphql } from "gatsby"

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Lastfm from '../components/lastfm';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  {
    allLastfmPlayback {
      edges {
        node {
          id
          track {
            id
            name
            url
            image {
              text
              size
            }
            artist {
              id
              name
            }
            album {
              id
              name
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

      <h1>Hello world!</h1>
      <p>Welcome to my little playpen. Here are some songs I've been listening to</p>

      <Lastfm data={data.allLastfmPlayback.edges} />
    </Layout>
  )
}

export default IndexPage
