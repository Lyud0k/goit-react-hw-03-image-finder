
import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';


export class App extends React.Component{
  state = {
  query: '',
  // data: '',
  number: 1,
  images: [],
  }

  saveValue = query => {
    this.setState({ number: 1, query: query, images: [] });
  };



  render() {
    return (
      <div>
        <Searchbar onSubmit={this.saveValue} />
        <ImageGallery name={this.state.query}
          number={this.state.number}
          images={this.state.images} />
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
