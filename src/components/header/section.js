import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const HeaderSection = ({ text }) => {
  const data = useStaticQuery(graphql`
    query {
      allLastfmArtist {
        totalCount
      }
      allLastfmPlayback {
        totalCount
      }
      allLastfmTrack {
        totalCount
      }
    }
  `)

  return (
    <section className="section">
      <div className="container">
        <h1>Hello world!</h1>
        <p>{text}</p>

        <p>Data created from {data.allLastfmTrack.totalCount} tracks by {data.allLastfmArtist.totalCount} artists, totalling {data.allLastfmPlayback.totalCount} playbacks</p>
      </div>
    </section>
  )
}

export default HeaderSection