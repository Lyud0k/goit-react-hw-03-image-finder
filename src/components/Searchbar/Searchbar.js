import css from '../Searchbar/Searchbar.module.css';
import React  from 'react';



export class Searchbar extends React.Component{
  state = {
  query: '',
  }
  
  outValue = (evt) => {
    this.setState({
      query: evt.currentTarget.value.toLowerCase()
    });
  }


    formSubmit = evt => {
      evt.preventDefault();
      if (this.state.query.trim() === '') {
        alert('write text');
        return;
}
    this.props.onSubmit(this.state.query);
      this.setState({ query: '' });
  };

    render() {
        return (

<header className={css.searchbar}>
  <form className={css.form} onSubmit={this.formSubmit}>
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
      value ={this.state.query}
    />
  </form>
            </header>
              )
    }
}