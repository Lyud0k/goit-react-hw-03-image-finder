import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem"
import React from 'react';
import { Modal } from "../Modal/Modal";

export class ImageGallery extends React.Component {
  state = {
    data: [],
    visible: false,
}

  componentDidMount() {
    fetch('https://pixabay.com/api/?q={name}&page={number}&key=29818615-eeef91044a0285c2bbb309d67&image_type=photo&orientation=horizontal&per_page=12')
      .then(res => res.json())
        .then(data => this.setState({ data: data.hits }));
  }

    visibleChange = () => {
    this.setState(state => ({
      visible: !state.visible,
      
    }));
     
  };

  render() {
    const { data } = this.state;
    console.log(data[0]);
    console.log(data[1]);
    console.log(data[2]);
    console.log(data[3]);
    return (
      <ul>
        {data.map(({ webformatURL, tags, largeImageURL }) => {
          return(
            <li>
              <ImageGalleryItem
                img={webformatURL}
                alt={tags}
                click={this.visibleChange} />
              <Modal
                largeImg={largeImageURL}
                alt={tags}
                hide={this.state.visible}
              />
              
              </li>
            )
        })}
      </ul>
    )
  }
}