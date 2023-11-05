import React, { useState } from 'react';

const ModalComponent = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <button onClick={openModal}>Abrir Modal</button>
            {showModal && (
                <>
                    <div className="modal overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                        <div className="flex items-end justify-center min- px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                            <div className="transition-opacity bg-gray-500 bg-opacity-75" aria-hidden="true"></div>
                            <span className="hidden sm:inline-block sm:align-middle sm:" aria-hidden="true">​</span>
                            <div className="inline-block p-5 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-2xl lg:p-16 sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
                                <div>
                                    <div className="mt-3 text-left sm:mt-5">
                                        <div className="py-6 text-center">
                                            <p className="mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600">Gracias por tu compra</p>
                                            <button className="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Mintear NFT</button>
                                        </div>
                                        <button className="underline" onClick={closeModal}>Close Modal</button>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </>
            )}
            <style jsx>{`
        /* Styles for the modal */
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .modal-content {
          background-color: white;
          padding: 20px;
          border-radius: 5px;
        }
      `}</style>
    </div>
    );
};

export default ModalComponent;