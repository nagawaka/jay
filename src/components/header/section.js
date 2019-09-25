import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const HeaderSection = ({ children }) => {
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
        <div class="box">
          <div class="media-content">
            <div class="content">
              <h1>Hello world!</h1>
              {children}

              <p><i>Data created from <strong>{data.allLastfmTrack.totalCount} tracks</strong> by <strong>{data.allLastfmArtist.totalCount} artists</strong>, totalling <strong>{data.allLastfmPlayback.totalCount} playbacks</strong></i></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeaderSection