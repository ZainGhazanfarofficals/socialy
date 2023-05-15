import React from 'react';
import ReactDOM from 'react-dom';
import './modal.scss';

function Modal({children, onClose}) {
  const handleModalContentClick = (e)=>{
    e.stopPropagation();
  }
  const content = (
    <div className='modal' onClick={onClose}>
        <div className="modal__content" onClick={handleModalContentClick}>
            {children}
        </div>
    </div>
  )
  return (
    ReactDOM.createPortal(content, document.getElementById('modal-root'))
  )
}

export default Modal
