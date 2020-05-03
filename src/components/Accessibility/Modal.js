import React, { useContext, useRef, useState } from 'react';
import ModalContent from './ModalContent';
import { ModalContext } from '../ModalContextProvider';

const Modal = () => {
    const { toggleModal, openerElement } = useContext(ModalContext);

    return (
        <section className="modal-container">
            <h1>Modal Section</h1>
            <div className="row">
                <button 
                    ref={openerElement}
                    onClick={toggleModal} 
                    id="modal-opener" 
                    className="btn btn-neu"
                >Open Modal</button>
            </div>
            <ModalContent />
        </section>
    )
}

export default Modal;
