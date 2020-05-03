import React, { Component, createRef } from 'react';
import { ModalContext } from '../../ModalContextProvider';

class StandardModal extends Component {

    allFocusableElementsSelectors = [
        'a[href]',
        'button',
        'textarea',
        'input[type="text"]',
        'input[type="password"]',
        'input[type="radio"]',
        'input[type="checkbox"]',
        'input[type="reset"]',
        'input[type="button"]',
        'input[type="submit"]',
        'select'
    ];

    static contextType = ModalContext;

    constructor(props) {
        super(props);

        this.dialogRef = createRef();
        this.state = {
            isModalOpen: false
        }
    }

    render() {
        const {
            id, classNames, ...wraperProps
        } = this.props.wrapperProps;

        return (
            <section
                id={id}
                className={classNames}
                aria-modal="true" role="dialog"
                {...wraperProps}
            >
                <div className="modal-content" ref={this.dialogRef}>
                    {this.props.children}
                </div>
            </section>
        )
    }

    handleFocus = (e) => {
        const focusableModalElements = this.dialogRef.current.querySelectorAll(
            this.allFocusableElementsSelectors.join(',')
        );

        const firstElement = focusableModalElements[0];
        const lastElement =
            focusableModalElements[focusableModalElements.length - 1];

        /**
         * If the first focusable element is focused, then pressing the `shift+tab` key would
         * move the focus to last focusable element in the dialog.
         */
        if (document.activeElement === firstElement && e.shiftKey) {
            lastElement.focus();
            e.preventDefault();
        }

        /**
         * If last focusable element in the dialog is focused currently then pressing `tab` key 
         * would move the focus to first focusable element in the dialog.
         */
        if (document.activeElement === lastElement && !e.shiftKey) {
            firstElement.focus();
            e.preventDefault();
        }
    }

    keyListener = (e) => {
        const keysMaps = {
            27: this.context.toggleModal,
            9: this.handleFocus
        };
        const handler = keysMaps[e.keyCode];

        if (handler) {
            handler(e)
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.keyListener)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.keyListener)
    }
}

export default StandardModal;
