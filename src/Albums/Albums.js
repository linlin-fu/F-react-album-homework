import React, { Component } from 'react';
import './Albums.scss';
import { fetchAlbums } from '../apiUtil';
import Photos from '../Photos/Photos';

class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      selectedAlbumId: 1,
    };
  }

  componentDidMount() {
    fetchAlbums().then((albums) => {
      this.setState({
        albums,
        selectedAlbumId: 1,
      });
    });
  }

  render() {
    const { albums, selectedAlbumId } = this.state;
    return (
      <section className="Albums">
        {albums.map((album) => (
          <div
            key={album.id}
            className="album"
            onClick={() =>
              this.setState({
                selectedAlbumId: album.id,
              })
            }
          >
            <p className="title">{album.title}</p>
            {selectedAlbumId === album.id ? <Photos id={album.id} /> : ''}
          </div>
        ))}
      </section>
    );
  }
}

export default Albums;
