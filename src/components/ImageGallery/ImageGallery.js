import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem"
import React from 'react';


export class ImageGallery extends React.Component {
  state = {
    data: [],
    visible: false,
    alt:[],
}

  componentDidUpdate(prevProps, prevState) {
    const { name, number } = this.props;
    if(prevProps.name !== name || prevProps.number !== number) {
    fetch('https://pixabay.com/api/?q=${name}&page=${number}&key=29818615-eeef91044a0285c2bbb309d67&image_type=photo&orientation=horizontal&per_page=12')
      .then(res => res.json())
      .then(data => this.setState({ data: data.hits }));
 }
  }



  render() {
    const { data } = this.state;
    return (
      <ul>
        {data.map(({ id, webformatURL, tags, largeImageURL }) => {
          return(
            <li key={id}>
             
              <ImageGalleryItem
                
                img={webformatURL}
                alt={tags}
                largeImg={largeImageURL}
              />
              
              </li>
            )
        })}
      </ul>
    )
  }
}