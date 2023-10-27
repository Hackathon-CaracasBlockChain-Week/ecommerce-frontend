"use client"

import Header from "../components/Header"
import ModalComponent from "../components/ModalThanks"

import React, { useState } from 'react';

export default function PaymentLandingPage() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };
    return (
        <>
            <Header />
            <main className="h-screen w-full bg-gray-lighter p-5">
                <div className="flex items-start justify-around mx-auto pt-24 px-48 lg:px-0">
                    <div className="w-full h-1/2 max-w-sm p-4 bg-[#D2E0FB] rounded-lg shadow">
                        <h3 className="mb-3 text-base font-semibold text-violet-[#473e6b] md:text-xl text-violet-[#473E6B]">
                            ¿Cómo quieres pagar?
                        </h3>
                        <ul className="my-3 space-y-3">
                            <li className="">
                                <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                    Metamask
                                </a>
                            </li>
                        </ul>
                        <ul className="my-3 space-y-3">
                            <li className="">
                                <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                    El Dorado
                                </a>
                            </li>
                        </ul>
                        <ul className="my-3 space-y-3">
                            <li className="">
                                <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                    Paypal
                                </a>
                            </li>
                        </ul>
                        <ul className="my-3 space-y-3">
                            <li className="">
                                <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                    WalletConnect
                                </a>
                            </li>
                        </ul>
                        <ul className="my-3 space-y-3">
                            <li className="">
                                <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                    Pago Móvil
                                </a>
                            </li>
                        </ul>
                        <ul className="my-3 space-y-3">
                            <li className="">
                                <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                    Binance
                                </a>
                            </li>
                        </ul>
                        <div className="flex flex-wrap justify-between">
                            <h4 class="flex items-baseline">
                                <div class="flex flex-wrap w-full justify-between ">
                                    <p class="mr-12 font-xl leading-7 tracking-widest">
                                        Total a pagar:
                                    </p>
                                    <p class="flex items-center">
                                        <span class="line-through text-secondary-dark font-discount-s mr-8">
                                            US$13
                                        </span>
                                        <span class="texts-3xl text-red-[#e6215d] sm:hidden">
                                            <span data-testid="line-through text-sm text-rose-500 product-price-currency">
                                                US$
                                            </span>
                                            <span data-testid="product-price">
                                                10
                                            </span>
                                        </span>
                                        <span class="hidden sm:block font-price-s-md text-red-main">
                                            <span data-testid="product-price-currency">US$</span>
                                            <span data-testid="product-price">10</span>
                                        </span>
                                    </p>
                                </div>
                            </h4>
                        </div>
                    </div>
                    <aside className="max-w-md w-96 bg-[#D2E0FB] p-4 border border-gray-200 rounded-lg shadow">
                        <a href="#">
                            <img class="rounded-t-lg" src="https://firebasestorage.googleapis.com/v0/b/ecommerce-ccs-blockchain.appspot.com/o/product-review.png?alt=media&token=e97ba839-fcbe-4b82-8d99-9ef441adff4a" alt="product" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-blue-[473e6b]">Compra Necesaria</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem earum, tempora nam similique amet cumque, consequatur ex aspernatur nesciunt veritatis obcaecati adipisci animi omnis porro nulla quae ea corporis delectus!</p>
                        </div>

                        <button type="submit" onClick={openModal} className="inline-flex items-center justify-center w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Comprar
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button>
                        {showModal && (
                            <>
                                <div className="modal overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                                    <div className="flex items-end justify-center min- px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                                        <div className="transition-opacity bg-gray-500 bg-opacity-75" aria-hidden="true"></div>
                                        <span className="hidden sm:inline-block sm:align-middle sm:" aria-hidden="true">​</span>
                                        <div className="inline-block p-5 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-2xl lg:p-16 sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
                                            <div>
                                                <div className="mt-3 text-center sm:mt-5">
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
                        <style jsx>
                            {`
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
                            `}
                        </style>
                    </aside>
                </div>
            </main>
        </>
    )
}