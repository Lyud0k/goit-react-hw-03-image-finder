import css from '../Modal/Modal.module.css';

export const Modal = ({ largeImg, alt, hide }) => (
  
<div className={css.overlay}>
  <div className={css.modal}>
    <img src={largeImg} alt={alt} />
  </div>
        </div>
        
)