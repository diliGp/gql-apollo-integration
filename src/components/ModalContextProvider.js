import React, { createContext, useState, useRef } from 'react';

export const ModalContext = createContext(true);

const ModalContextProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const openerElement = useRef();
    
    const toggleModal = () => {
        if(isOpen) {
            /**
             * Focus on the opener element after popup is closed.
             */
            openerElement.current.focus();
        }

        setIsOpen(!isOpen);
    }

    return (
        <ModalContext.Provider value={{ isOpen, toggleModal, openerElement }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContextProvider;
