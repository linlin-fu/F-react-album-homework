import React, { Component } from 'react';
import './Photos.scss';
import Grid from '@material-ui/core/Grid';
import { fetchPhotos } from '../apiUtil';

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    };
  }

  componentDidMount() {
    fetchPhotos(this.props.id).then((photos) => {
      this.setState({
        photos,
      });
    });
  }

  render() {
    const { photos } = this.state;
    return (
      <section className="photos primaryScrollbar">
        <Grid container spacing={2}>
          {photos.map((photo) => (
            <Grid item sm={4} className="photo" key={photo.id}>
              <img src={photo.url} alt={photo.title} />
              <p className="photoTitle">{photo.title}</p>
            </Grid>
          ))}
        </Grid>
      </section>
    );
  }
}

export default Photos;
