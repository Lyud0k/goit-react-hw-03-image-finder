import React from "react";
import { Modal } from "../Modal/Modal";

export class ImageGalleryItem extends React.Component{
    state = {
        visible: false,
    }

      visibleChange = () => {
    this.setState(state => ({
      visible: !state.visible,
      
    }));

    };
    
    render() {
        const { img, alt, largeImg } = this.props;
        return (
  
    <>
                {!this.state.visible && <img className={css.itemImage} src={img} alt={alt} onClick={this.visibleChange} />}
                    
            {this.state.visible && <Modal
              
                    img={img}
                    alt={alt}
                    largeImg={largeImg}
                    hide={this.visibleChange} />}
    </>
)
    
}

}