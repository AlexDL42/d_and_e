import React from 'react'
import {useState} from 'react';

export default function WeddingListContent() {

    const [finished, setFinished] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()

        const msg = event.target[0].value
        console.log(msg)
        const out = {
            'mailType': 'livredor',
            msg
        }        


        const res = await fetch('api/mailer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(out),
        })
        
        setFinished(true)
    }


    return (
        <>
            <div className="wlc-container-0">
                <div className="wlc-container-1">
                    Participer Au Voyage de Noces
                </div>

                <div className="wlc-container-2">
                    <div>
                        Notre plus beau cadeau sera bien évidemment votre présence.
                    </div>
                    <div>
                        Toutefois, si vous souhaitez contribuer à réaliser nos rêves d’évasion, vous pouvez participer à la cagnotte de notre Voyage de Noces via le RIB ci-dessous pour nous aider à partir au bout du monde... 😊
                    </div>
                </div>

                <div className="flex flex-row my-6 justify-between">
                    <div className="mx-2 text-center">
                        <div className="mb-4 text-sm font-bold text-gray-900">
                            Titulaire du Compte
                        </div>
                        <div className="mb-2 text-sm font-bold text-gray-900">
                            Madame HILLARD DELPHINE ou Monsieur PECNARD ETIENNE
                        </div>
                    </div>
                    <div className="mx-2 text-center">
                        <div className="mb-4 text-sm font-bold text-gray-900">
                            IBAN
                        </div>
                        <div className="mb-2 text-sm font-bold text-gray-900">
                            FR76 1820 6002 9465 0901 6547 478
                        </div>
                    </div>
                    <div className="mx-2 text-center">
                        <div className="mb-4 text-sm font-bold text-gray-900">
                            BIC / SWIFT
                        </div>
                        <div className="mb-2 text-sm font-bold text-gray-900">
                            AGRIFRPP882
                        </div>
                    </div>
                </div>

                <div className="wlc-container-2">
                    {finished? 
                        <div className="flex justify-center">
                            <div className="banner-btn text-center banner-btn-pink-no-h my-5 align-center">
                                Merci pour votre contribution au Livre d'Or!
                            </div>
                        </div>
                    :
                        <form onSubmit={handleSubmit} >
                            <div className="my-8">
                                <div className="w-full my-4 font-bold text-gray-900">
                                    Vous pouvez également contribuer au Livre d'Or ci-dessous
                                </div>
                                <textarea
                                    id="word"
                                    className=" w-full h-[15vh] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 drk:bg-gray-700 drk:border-gray-600 drk:placeholder-gray-400 drk:text-white drk:focus:ring-blue-500 drk:focus:border-blue-500"
                                    placeholder="..."
                                >
                                </textarea>

                            </div>
                            <div className="w-full flex mt-5">
                                <button
                                    type="submit"
                                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 my-4 py-4 text-center drk:bg-blue-600 drk:hover:bg-blue-700 drk:focus:ring-blue-800"
                                >
                                    Envoyer
                                </button>
                            </div>
                        </form>
                    }
                </div>
            </div>
        </>
    )
}