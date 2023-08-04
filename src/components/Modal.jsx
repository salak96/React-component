/* eslint-disable react/prop-types */
import { useState } from 'react';
import Button from './Button';

const Modal = (props) => {
    // State untuk mengelola status tampilan modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <button onClick={handleOpenModal}>{props.text}</button>

            {/* Modal */}
            {isModalOpen && (
                <div className='modal'>
                    <div className='modal-content'>
                        <h2>Ini adalah Modal</h2>
                        <p>Isi dari modal ini...</p>
                        <Button onClick={handleCloseModal}>Tutup Modal</Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
