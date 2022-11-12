import css from '../Searchbar/Searchbar.module.css';
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

    formSubmit = evt => {
      evt.preventDefault();
      if (this.state.inName.trim() === '') {
        alert('write text');
        return;
}
    this.props.onSubmit(this.state.inName);
  
  };

    render() {
        return (

<header className={css.searchbar}>
  <form onSubmit={this.formSubmit}>
    <button type="submit" className={css.button}>
      <span className={css.buttonLabel}>Search</span>
    </button>

    <input
      className={css.input}
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