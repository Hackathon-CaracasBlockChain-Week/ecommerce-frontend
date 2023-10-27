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
                <div className="flex items-center justify-between mx-48 pt-24 px-48 py-14 lg:px-0">
                    <div className="w-full h-1/2 max-w-sm p-4 bg-[#D2E0FB] rounded-lg shadow">
                        <h3 className="mb-3 text-base font-semibold text-[#473e6b] md:text-xl text-violet-[#473E6B]">
                            ¿Cómo quieres pagar?
                        </h3>
                        <ul className="my-3 space-y-3">
                            <li>
                                <a href="#" className="flex items-center p-3 text-base font-bold text-[#82A0D8] rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">
                                    <img className="w-8 h-8" src="https://raw.githubusercontent.com/WalletConnect/walletconnect-assets/86f13aa694139bdb1266d2d965dee10885186cd2/Logo/Blue%20(Default)/Logo.svg" alt="" />
                                    WalletConnect
                                </a>
                            </li>
                        </ul>
                        <ul className="my-3 space-y-3">
                            <li>
                                <a href="#" className="flex items-center p-3 text-base font-bold text-[#82A0D8]  rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">
                                <img className="p-1 w-9 h-9" src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.22/mercadolibre/favicon.svg" alt="" />
                                    Mercado Pago
                                </a>
                            </li>
                        </ul>
                        <ul className="my-3 space-y-3">
                            <li>
                                <a href="#" className="flex items-center p-3 text-base font-bold text-[#82A0D8]  rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">
                                <svg className="p-1 h-8 w-8" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z"/></svg>
                                    Pago Móvil
                                </a>
                            </li>
                        </ul>
                        <ul className="my-3 space-y-3">
                            <li>
                                <a href="#" className="flex items-center p-3 text-base font-bold text-[#82A0D8]  rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">
                                <svg aria-hidden="true" className="px-1 h-8 w-8" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39.0728 0L21.9092 12.6999L25.1009 5.21543L39.0728 0Z" fill="#E17726"/><path d="M0.966797 0.0151367L14.9013 5.21656L17.932 12.7992L0.966797 0.0151367Z" fill="#E27625"/><path d="M32.1656 27.0093L39.7516 27.1537L37.1004 36.1603L27.8438 33.6116L32.1656 27.0093Z" fill="#E27625"/><path d="M7.83409 27.0093L12.1399 33.6116L2.89876 36.1604L0.263672 27.1537L7.83409 27.0093Z" fill="#E27625"/><path d="M17.5203 10.8677L17.8304 20.8807L8.55371 20.4587L11.1924 16.4778L11.2258 16.4394L17.5203 10.8677Z" fill="#E27625"/><path d="M22.3831 10.7559L28.7737 16.4397L28.8067 16.4778L31.4455 20.4586L22.1709 20.8806L22.3831 10.7559Z" fill="#E27625"/><path d="M12.4115 27.0381L17.4768 30.9848L11.5928 33.8257L12.4115 27.0381Z" fill="#E27625"/><path d="M27.5893 27.0376L28.391 33.8258L22.5234 30.9847L27.5893 27.0376Z" fill="#E27625"/><path d="M22.6523 30.6128L28.6066 33.4959L23.0679 36.1282L23.1255 34.3884L22.6523 30.6128Z" fill="#D5BFB2"/><path d="M17.3458 30.6143L16.8913 34.3601L16.9286 36.1263L11.377 33.4961L17.3458 30.6143Z" fill="#D5BFB2"/><path d="M15.6263 22.1875L17.1822 25.4575L11.8848 23.9057L15.6263 22.1875Z" fill="#233447"/><path d="M24.3739 22.1875L28.133 23.9053L22.8184 25.4567L24.3739 22.1875Z" fill="#233447"/><path d="M12.8169 27.0049L11.9606 34.0423L7.37109 27.1587L12.8169 27.0049Z" fill="#CC6228"/><path d="M27.1836 27.0049L32.6296 27.1587L28.0228 34.0425L27.1836 27.0049Z" fill="#CC6228"/><path d="M31.5799 20.0605L27.6165 24.0998L24.5608 22.7034L23.0978 25.779L22.1387 20.4901L31.5799 20.0605Z" fill="#CC6228"/><path d="M8.41797 20.0605L17.8608 20.4902L16.9017 25.779L15.4384 22.7038L12.3988 24.0999L8.41797 20.0605Z" fill="#CC6228"/><path d="M8.15039 19.2314L12.6345 23.7816L12.7899 28.2736L8.15039 19.2314Z" fill="#E27525"/><path d="M31.8538 19.2236L27.2061 28.2819L27.381 23.7819L31.8538 19.2236Z" fill="#E27525"/><path d="M17.6412 19.5088L17.8217 20.6447L18.2676 23.4745L17.9809 32.166L16.6254 25.1841L16.625 25.1119L17.6412 19.5088Z" fill="#E27525"/><path d="M22.3562 19.4932L23.3751 25.1119L23.3747 25.1841L22.0158 32.1835L21.962 30.4328L21.75 23.4231L22.3562 19.4932Z" fill="#E27525"/><path d="M27.7797 23.6011L27.628 27.5039L22.8977 31.1894L21.9414 30.5138L23.0133 24.9926L27.7797 23.6011Z" fill="#F5841F"/><path d="M12.2373 23.6011L16.9873 24.9926L18.0591 30.5137L17.1029 31.1893L12.3723 27.5035L12.2373 23.6011Z" fill="#F5841F"/><path d="M10.4717 32.6338L16.5236 35.5013L16.4979 34.2768L17.0043 33.8323H22.994L23.5187 34.2753L23.48 35.4989L29.4935 32.641L26.5673 35.0591L23.0289 37.4894H16.9558L13.4197 35.0492L10.4717 32.6338Z" fill="#C0AC9D"/><path d="M22.2191 30.231L23.0748 30.8354L23.5763 34.8361L22.8506 34.2234H17.1513L16.4395 34.8485L16.9244 30.8357L17.7804 30.231H22.2191Z" fill="#161616"/><path d="M37.9395 0.351562L39.9998 6.53242L38.7131 12.7819L39.6293 13.4887L38.3895 14.4346L39.3213 15.1542L38.0875 16.2779L38.8449 16.8264L36.8347 19.1742L28.5894 16.7735L28.5179 16.7352L22.5762 11.723L37.9395 0.351562Z" fill="#763E1A"/><path d="M2.06031 0.351562L17.4237 11.723L11.4819 16.7352L11.4105 16.7735L3.16512 19.1742L1.15488 16.8264L1.91176 16.2783L0.678517 15.1542L1.60852 14.4354L0.350209 13.4868L1.30098 12.7795L0 6.53265L2.06031 0.351562Z" fill="#763E1A"/><path d="M28.1861 16.2485L36.9226 18.7921L39.7609 27.5398L32.2728 27.5398L27.1133 27.6049L30.8655 20.2912L28.1861 16.2485Z" fill="#F5841F"/><path d="M11.8139 16.2485L9.13399 20.2912L12.8867 27.6049L7.72971 27.5398H0.254883L3.07728 18.7922L11.8139 16.2485Z" fill="#F5841F"/><path d="M25.5283 5.17383L23.0847 11.7736L22.5661 20.6894L22.3677 23.4839L22.352 30.6225H17.6471L17.6318 23.4973L17.4327 20.6869L16.9139 11.7736L14.4707 5.17383H25.5283Z" fill="#F5841F"/></svg>
                                    Metamask
                                </a>
                            </li>
                        </ul>
                        <ul className="my-3 space-y-3">
                            <li>
                                <a href="#" className="flex items-center p-3 text-base font-bold text-[#82A0D8] rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">
                                    <img className="w-8 h-8" src="https://pbs.twimg.com/profile_images/1529475462283632641/IPDhy1vE_400x400.jpg" alt="" />
                                    El Dorado
                                </a>
                            </li>
                        </ul>
                        <ul className="my-3 space-y-3">
                            <li>
                                <a href="#" className="flex items-center p-3 text-base font-bold text-[#82A0D8] rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">
                                <img className="p-1 w-8 h-8" src="https://bin.bnbstatic.com/static/images/common/favicon.ico" alt="" />
                                    Binance
                                </a>
                            </li>
                        </ul>
                        <ul className="my-3 space-y-3">
                            <li>
                                <a href="#" className="flex items-center p-3 text-base font-bold text-[#82A0D8] rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">
                                    <img className="w-8 h-8" src="https://www.paypalobjects.com/webstatic/icon/pp32.png" alt="" />
                                    Paypal
                                </a>
                            </li>
                        </ul>
                        <div className="flex flex-wrap justify-between">
                            <h4 className="flex items-baseline">
                                <div className="flex flex-wrap w-full justify-between text-xl">
                                    <p className="font-black text-blue-600 uppercase mr-12 font-2xl leading-7 tracking-widest">
                                        Total a pagar:
                                    </p>
                                    <span className="font-black text-gray-500 uppercase">$29.99</span>
                                    <span className="font-medium text-gray-500">/mo</span>
                                </div>
                            </h4>
                        </div>
                    </div>
                    <aside className="max-w-md w-[35rem] bg-[#D2E0FB] p-4 border border-gray-200 rounded-lg shadow">
                        <a href="#">
                            <img className="rounded-t-lg" src="https://firebasestorage.googleapis.com/v0/b/ecommerce-ccs-blockchain.appspot.com/o/product-review.png?alt=media&token=e97ba839-fcbe-4b82-8d99-9ef441adff4a" alt="product" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#473e6b]">Compra Necesaria</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">(1)Acepto expresamente todos los Términos y Condiciones de Membresías Premium y Pay As You Go. Del mismo, modo acepto las Políticas y Avisos de Protección y Tratamiento de Datos Personales de Pharos Market</p>
                            <div className="flex flex-wrap justify-between">
                            <h4 classNamef="flex items-baseline">
                                <div className="flex flex-wrap w-full justify-between text-xl">
                                    <p className="font-black text-blue-600 uppercase mr-12 font-2xl leading-7 tracking-widest">
                                        Total a pagar:
                                    </p>
                                    <span className="font-black text-gray-500 uppercase">$29.99</span>
                                    <span className="font-medium text-gray-500">/mo</span>
                                </div>
                            </h4>
                        </div>
                        </div>

                        <button type="submit" onClick={openModal} className="inline-flex items-center justify-center w-full text-white bg-[#3B99FC] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Comprar
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
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
                                                        <button className="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-[#3B99FC] lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Mintear NFT</button>
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