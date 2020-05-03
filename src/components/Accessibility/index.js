import React from 'react';
import DescriptiveList from './DescriptiveList';
import Accordian from './Accordian';
import './Accessibility.scss';
import Modal from './Modal';

const Accessibility = () => {
    return (
        <>
            <Modal />
            <DescriptiveList />
            <Accordian />
        </>
    )
}

export default Accessibility;
