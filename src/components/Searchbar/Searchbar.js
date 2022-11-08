
import React  from 'react';



export class Searchbar extends React.Component{
  state = {
  inName: '',
  }
  
  outValue = (evt) => {
    this.setState({
      inName: evt.currentTarget.value
  })
  }

    render() {
        return (

<header class="searchbar">
  <form class="form">
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
                placeholder="Search images and photos"
                onChange={this.outValue}
                value ={this.state.inName}
    />
  </form>
            </header>
              )
    }
}