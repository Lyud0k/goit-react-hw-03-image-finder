
import React  from 'react';


export class App extends React.Component{
state = {
name: null,
}

  componentDidMount() {
    fetch('https://pixabay.com/api/?q=name&page=1&key=29818615-eeef91044a0285c2bbb309d67&q=yellow+flowers&image_type=photo&orientation=horizontal&per_page=12')
      .then(res => res.json())
      .then(name => this.setState({name}));
}

  render() {
    return (
      <div>
        {this.state.name && (<p>{this.state.name.total}</p>)}
        <p>begin</p>
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
