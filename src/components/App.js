
import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
// import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';


export class App extends React.Component{
  state = {
  query: '',
  // data: '',
  page: 1,
  images: [],
  }

  saveValue = query => {
    this.setState({ page: 1, query: query, images: [] });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

    addImg = images => {
    this.setState(prevState => ({
      images: [...prevState.images, ...images],
    }));
    };
  


  render() {
    return (
      <div
      style={{display: 'grid',
               gridTemplateColumns: '1fr',
               gridGap: '16px',
               paddingBottom: '24px',
            }} 
 >
        <Searchbar onSubmit={this.saveValue} />
        <ImageGallery
          name={this.state.query}
          page={this.state.page}
          images={this.state.images}
          />
        <Button more={this.loadMore} />
        {/* <ImageGalleryItem  /> */}
       
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
// <p>begin</p>
//       </header>
//     </div>
//   );
// }

// export default App;
