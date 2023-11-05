'use client'

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

/* SERVICES */
import { getCurrencyVES, getCurrencyCOP, getCurrencyARS } from "../services/currency";


export default function Currency() {

    const changeMoneyCurency = (amountVal: any, selectedFirst: any, selectedSecond: any) => {
        console.log(selectedFirst, selectedSecond);
        if (selectedFirst == 'VES') {

            let exchangeRate = 1 / listCurrency[0].price;
            let totalExchangeRate;

            if (selectedSecond == 'VES') {
                totalExchangeRate = (amountVal / exchangeRate);
            } else {
                totalExchangeRate = (amountVal * exchangeRate);
            }

            if (selectedFirst == 'VES') {
                if (selectedFirst == 'VES' && selectedSecond == 'COP') {
                    totalExchangeRate = (amountVal * exchangeRate) * listCurrency[1].price;
                }

                if (selectedFirst == 'VES' && selectedSecond == 'ARS') {
                    totalExchangeRate = (amountVal * exchangeRate) * listCurrency[2].price;
                }

                console.log('VES: ', totalExchangeRate);

                setValueSecond(String(totalExchangeRate.toFixed(4)));

            }

            return totalExchangeRate;

        } else if (selectedFirst == 'COP') {

            let exchangeRate = 1 / listCurrency[1].price;
            let totalExchangeRate;

            if (selectedSecond == 'COP') {
                totalExchangeRate = (amountVal / exchangeRate);
            } else {
                totalExchangeRate = (amountVal * exchangeRate);
            }

            if (selectedFirst == 'COP') {
                if (selectedFirst == 'COP' && selectedSecond == 'VES') {
                    totalExchangeRate = (amountVal / exchangeRate) * listCurrency[0].price;
                }

                if (selectedFirst == 'COP' && selectedSecond == 'ARS') {
                    totalExchangeRate = (amountVal / exchangeRate) / listCurrency[2].price;
                }

                console.log('COP: ', totalExchangeRate);

                setValueSecond(String(totalExchangeRate.toFixed(4)));
            }

            return totalExchangeRate;

        } else if (selectedFirst == 'ARS') {
            let exchangeRate = 1 / listCurrency[2].price;
            let totalExchangeRate;

            if (selectedSecond == 'ARS') {
                totalExchangeRate = (amountVal / exchangeRate);
            } else {
                totalExchangeRate = (amountVal * exchangeRate);
            }

            if (selectedFirst == 'ARS') {
                if (selectedFirst == 'ARS' && selectedSecond == 'VES') {
                    totalExchangeRate = (amountVal / exchangeRate) * listCurrency[0].price;
                }

                if (selectedFirst == 'ARS' && selectedSecond == 'COP') {
                    totalExchangeRate = (amountVal / exchangeRate) / listCurrency[1].price;
                }

                console.log('ARS: ', totalExchangeRate);

                setValueSecond(String(totalExchangeRate.toFixed(4)));
            }

            return totalExchangeRate;
        }
    }

    /* ESTO ES CON RESPECTO A LA TASA ORIGINAL */
    const listCurrency = [
        {
            name: 'Bolivares',
            short: 'VES',
            price: 35.0919,
            country: 'VENEZUELA',
            img: 'https://firebasestorage.googleapis.com/v0/b/ecommerce-ccs-blockchain.appspot.com/o/Venezuela_FLAG.png?alt=media&token=bc669147-2bae-4325-9232-9a06e6052a14'
        },
        {
            name: 'Pesos Colombianos',
            short: 'COP',
            price: 0.00024,
            country: 'COLOMBIA',
            img: 'https://firebasestorage.googleapis.com/v0/b/ecommerce-ccs-blockchain.appspot.com/o/Flag_of_Colombia.svg?alt=media&token=3d44476b-765a-4438-8f15-86830f5d6c20'
        },
        {
            name: 'Pesos Argentinos',
            short: 'ARS',
            price: 0.0028584,
            country: 'ARGENTINA',
            img: 'https://firebasestorage.googleapis.com/v0/b/ecommerce-ccs-blockchain.appspot.com/o/Argentina_FLAG.png?alt=media&token=44b9d603-6808-4ed7-b672-0b82489e1e03'
        }
    ];

    /* PRIMER SELECTOR */
    const [selectedFirst, setSelectedFirst] = useState(listCurrency[0].short);
    const handleChangeFirst = (event: any) => {
        console.log(event.target.value);
        setSelectedFirst(event.target.value);
    };

    /* SEGUNDO SELECTOR */
    const [selectedSecond, setSelectedSecond] = useState(listCurrency[1].short);
    const handleChangeSecond = (event: any) => {
        console.log(event.target.value);
        setSelectedSecond(event.target.value);
    };

    const [valueFirst, setValueFirst] = useState('');
    const [valueSecond, setValueSecond] = useState('');

    // const dataVES = await getCurrencyVES();
    // console.log('VES: ', dataVES);

    // const dataCOP = await getCurrencyCOP();
    // console.log('COP: ', dataCOP);

    // const dataARS = await getCurrencyARS();
    // console.log('ARS: ', dataARS);

    return (
        <>
            <Header />
            <main className="w-full">
                <div className="md:container mx-auto">
                    <div className="flex overflow-y-auto overflow-x-hidden justify-center items-center w-full md:inset-0 h-modal md:h-full">
                        <div className="relative p-8 w-full h-full">
                            <h1 className="text-lg font-bold text-gray-700">Currency Cryptos</h1>
                            <div className="grid grid-cols-3 gap-3">
                                {listCurrency.map(element => (
                                    <div className="py-1 px-1">
                                        <div className="flex flex-col py-3 px-8 w-full max-w-sm bg-gray-200 border border-gray-200 rounded-lg shadow-md cursor-pointer">
                                            <div className="flex flex-row">
                                                <img src={element.img} alt={element.name} className="w-24 rounded-lg mr-3" />
                                                <div className="flex flex-col">
                                                    <span className="flex justify-center text-gray-700 font-bold text-sm">{element.name}</span>
                                                    <span className="flex justify-center text-gray-700 font-bold text-sm"> 1 USD = {element.price} {element.short}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-5 flex justify-center">
                                <form className="w-1/2 py-3 px-8 bg-gray-300 border border-gray-300 rounded-lg shadow-md">
                                    <div>
                                        <div className="bg-gray-100 border-gray-100 rounded-lg">
                                            <div className="p-4 flex flex-row">
                                                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={selectedFirst} onChange={handleChangeFirst}>
                                                    <option selected disabled>Selecciona una Tasa</option>
                                                    <option value="VES">Venezuela (VES)</option>
                                                    <option value="COP">Colombia (COP)</option>
                                                    <option value="ARS">Argentina (ARS)</option>
                                                </select>
                                                <input type="number" defaultValue={valueFirst} value={valueFirst} onChange={e => { setValueFirst(e.currentTarget.value); }} onKeyUp={(event) => { changeMoneyCurency(valueFirst, selectedFirst, selectedSecond) }} className="bg-gray-100 border-gray-100 text-end text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="0.0" />
                                            </div>
                                        </div>
                                    </div>
{/*                                     <div className="flex text-center justify-center">
                                        <div className="bg-gray-400 rounded-full p-2 cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-down-up" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M17 3l0 18"></path>
                                                <path d="M10 18l-3 3l-3 -3"></path>
                                                <path d="M7 21l0 -18"></path>
                                                <path d="M20 6l-3 -3l-3 3"></path>
                                            </svg>
                                        </div>
                                    </div> */}
                                    <div className="mt-5">
                                        <div className="bg-gray-100 border-gray-100 rounded-lg">
                                            <div className="p-4 flex flex-row">
                                                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={selectedSecond} onChange={handleChangeSecond}>
                                                    <option selected disabled>Selecciona una Tasa </option>
                                                    <option value="VES">Venezuela (VES)</option>
                                                    <option value="COP">Colombia (COP)</option>
                                                    <option value="ARS">Argentina (ARS)</option>
                                                </select>
                                                <input type="number" defaultValue={valueSecond} value={valueSecond} onChange={e => { setValueSecond(e.currentTarget.value); }} onKeyUp={(event) => { changeMoneyCurency(valueFirst, selectedFirst, selectedSecond) }} className="bg-gray-100 border-gray-100 text-end text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="0.0" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}