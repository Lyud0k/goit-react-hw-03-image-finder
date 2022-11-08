
import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';
// import { ImageGallery } from './ImageGallery/ImageGallery';
// import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';


export class App extends React.Component{
state = {
  data: '',
  number: 1,
  images: [],
}

  componentDidMount() {
    fetch('https://pixabay.com/api/?q={name}&page={number}&key=29818615-eeef91044a0285c2bbb309d67&image_type=photo&orientation=horizontal&per_page=12')
      .then(res => res.json())
      .then(console.log);
  }


  render() {
    return (
      <div>
        <p>{this.state.data.total}</p>
        {/* {this.state.data && (<p>{this.state.data.total}</p>)} */}

        <Searchbar />
        {/* <ImageGallery /> */}
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
