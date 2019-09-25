import React from "react"
// import { Link } from "gatsby";

// import slugify from "slugify";

import { shuffle } from './../utils/shuffle';
import { pick } from './../utils/pick';

import './lastfm.scss';

class Lastfm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.setState({
      data: pick(shuffle(this.props.data), 36),
    })
  }

  render() {
    const { data } = this.state;

    return (
      <div className="last-fm hero is-light">
        <section className="section" style={{ paddingTop: "0", paddingBottom: "0" }}>
          <div className="container">
            {/* <div className="hero-body"> */}
            <div className="columns is-multiline is-mobile">
              {data.map((album) => (
                <div key={album.node.id} className="column is-3-desktop is-3-tablet is-6-mobile">
                  <img src={album.node.tracks[0].image[album.node.tracks[0].image.length - 1].text} alt={`${album.node.artist.name} - ${album.node.name}`} title={`${album.node.artist.name} - ${album.node.name}`} />
                </div>
              ))}
            </div>
            {/* </div> */}
          </div>
        </section>
      </div>
    )
  }
}

export default Lastfm
