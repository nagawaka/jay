import { useStaticQuery, graphql } from "gatsby"

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

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

  console.log(data);

  return (
    <Layout>
      <SEO title="Home" />

      <h1>Hello world!</h1>
      <p>Welcome to my little playpen.</p>
    </Layout>
  )
}

export default IndexPage
