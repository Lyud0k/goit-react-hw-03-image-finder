import css from '../Modal/Modal.module.css';
import React from 'react';


export class Modal extends React.Component {
   changeSizeOnlyOne = evt => {
    if (evt.target === evt.currentTarget) {
      this.props.hide();
    }
  };

     
render(){
    const { img, alt, largeImg, hide } = this.props;
    return (
        
            <div className={css.overlay}>
  <div className={css.modal}>
                {hide && <img src={largeImg} alt={alt}  onClick = {this.changeSizeOnlyOne}/>}
  </div>
        </div>

    )
            
     }
  

        
}