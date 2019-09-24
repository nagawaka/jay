import React from "react"

const Lastfm = ({data}) => {
  return (
    <div className="last-fm hero is-light">
      <section className="section" style={{ paddingTop: "0", paddingBottom: "0" }}>
        <div className="container">
          {/* <div className="hero-body"> */}
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                {data.allLastfmAlbum.edges.map((album, idx) => (
                  <div key={idx} className="tile is-child">
                    <img src={album.node.tracks[0].image[album.node.tracks[0].image.length - 1].text} alt={`${album.node.artist.name} - ${album.node.name}`} />
                  </div>
                ))}
              </div>
            {/* </div> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Lastfm
