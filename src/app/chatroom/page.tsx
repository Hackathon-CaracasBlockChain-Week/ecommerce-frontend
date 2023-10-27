'use client';

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { postCommentary } from "../services/chatgpt";


export default function chatRoom() {

    const [message, setValueMessage] = useState('');

    const [answer, setValueAnswer] = useState('');

    const handleSend = async (e: any) => {
        console.log(message);
        const data = await postCommentary({ message : String(message + ' Responde maximo en 20 palabras')});
        if(data.status == 200){
            setValueAnswer(data.response.respuesta);
        }
        
    }


    return (
        <>
            <Header />
            <main>
                <div className="md:container mx-auto">
                    <form>
                        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50">
                            <div className="px-4 py-2">
                                <p>Respuesta: {answer}</p>
                            </div>
                            <div className="px-4 py-2 bg-white rounded-t-lg ">
                                <label htmlFor="comment" className="sr-only">Su consulta</label>
                                <textarea id="comment" onChange={e => { setValueMessage(e.currentTarget.value); }} rows={4} className="w-full px-0 text-sm text-gray-900 bg-white border-0 " placeholder="Escribe su consulta" required></textarea>
                            </div>
                            <div className="flex items-center justify-between px-3 py-2 border-t ">
                                <button onClick={handleSend} type="button" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800">
                                    Escribir consulta
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    )
}