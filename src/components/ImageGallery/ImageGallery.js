import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem"
import React from 'react';


export class ImageGallery extends React.Component {
  state = {
    data: [],
    visible: false,
    loadMore: false,
}

  componentDidUpdate(prevProps, prevState) {
    const { name, page } = this.props;
    if(prevProps.name !== name || prevProps.page !== page) {
    fetch (`https://pixabay.com/api/?q=${name}&page=${page}&key=29818615-eeef91044a0285c2bbb309d67&image_type=photo&orientation=horizontal&per_page=12`)
      .then(res => res.json())
        .then(data => this.setState({ data: data.hits }));
              // const images = res.data.hits;
              addImg(data);
              data.length === 12
            ? this.setState({ loadMore: true })
            : this.setState({ loadMore: false });
        
 }
  }



  render() {
    const { data } = this.state;
    return (
      <ul className={css.gallery}>
        {data.map(({ id, webformatURL, tags, largeImageURL }) => {
          return(
            <li className={css.galleryItem} key={id}>
             
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