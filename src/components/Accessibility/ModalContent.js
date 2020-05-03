import React, { useContext } from 'react';
import StandardModal from './StandardModal';
import { ModalContext } from '../ModalContextProvider';

const ModalContent = () => {
    const { isOpen, toggleModal } = useContext(ModalContext);
    if (!isOpen) {
        return null;
    }

    const handleChange = (e) => {

    }

    return (
        <StandardModal wrapperProps={{ id: 'modal', classNames: 'container-modal-content' }}>
            <div className="modal-header d-flex">
                <h1>Modal Content</h1>
            </div>
            <div className="modal-body d-flex">
                <div className="row">
                    <div className="col">
                        <fieldset>
                            <label htmlFor="name">
                                Name
                                    <abbr title="required" aria-label="required">*</abbr>
                            </label>
                            <input onChange={handleChange} autoFocus className="form-control" type="text" id="name" name="name" value="" required placeholder="Input your name." aria-label="Input your name." />
                        </fieldset>
                        <fieldset>
                            <legend>
                                Gender
                                <abbr title="required" aria-label="required">*</abbr>
                            </legend>
                            <p>
                                <input onChange={handleChange} className="form-control" type="radio" name="gender" id="female" value="" aria-checked="false" required aria-label="Female" />
                                <label htmlFor="female">Male</label>
                            </p>
                            <p>
                                <input onChange={handleChange} className="form-control" type="radio" id="male" name="gender" value="" aria-checked="false" required aria-label="Male" />
                                <label htmlFor="male">Male</label>
                            </p>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="location">
                                Location
                                    <abbr title="required" aria-label="required">*</abbr>
                            </label>
                            <select onChange={handleChange} className="form-control" name="location" id="location" role="combobox">
                                <option value="lko">Lucknow</option>
                                <option value="blr">Bangalore</option>
                                <option value="dls">Delhi</option>
                            </select>
                        </fieldset>
                    </div>
                </div>
            </div>
            <div className="modal-footer d-flex">
                <fieldset>
                    <button type="button" className="btn-neu">Submit</button>
                    <button type="button" className="mlr10 btn-neu" onClick={toggleModal}>Close</button>
                </fieldset>
            </div>
        </StandardModal>
    )
}

export default ModalContent;
