import React from "react"

const Lastfm = ({ data }) => {

  return (
    <div className="last-fm hero is-light">
      <div className="hero-body">
        <div className="container">
          <ul>
            {data.map((play, idx) => (
              <li key={idx}>
                {play.node.track.artist.name} - {play.node.track.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Lastfm
