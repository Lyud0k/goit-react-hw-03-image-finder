
import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';


export class App extends React.Component{
  state = {
  answer: '',
  // data: '',
  number: 1,
  images: [],
  }

  saveValue = answer => {
    this.setState({ answer });
  };



  render() {
    return (
      <div>
        {/* <p>{this.state.data.total}</p> */}
        {/* {this.state.data && (<p>{this.state.data.total}</p>)} */}

        <Searchbar onSubmit={this.saveValue} />
        <ImageGallery />
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
