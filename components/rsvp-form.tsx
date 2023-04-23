import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {posts} from '../public/assets/events';

function Example() {
    const [finished, setFinished] = useState(false)
    const [tel, setTel] = useState("")
    const [events, setEvents] = useState(() => {
        let obj = {}
        posts.map((post, i) => {
            obj[post.id] = {
                ...post,
                'confirmed': false,
                'nbPlus': 0,
            }
        })
        return obj 
    })

    const handleChangeEvent = (e, props) => {
        e.persist()
        setEvents(() => {
            let out = {...events}            
            out[props.id][props.changeP] = props.status
            return out
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const firstName = event.target[0].value
        const lastName = event.target[1].value
        const phone = tel.replaceAll(' ','')
        const email = event.target[3].value
        const addressF = event.target[4].value
        const addressP = event.target[5].value
        const dStart = event.target[6].value

        const word = event.target[15].value

        const out = {
            'mailType': 'rsvp',
            firstName,
            lastName,
            phone,
            email,
            addressF,
            addressP,
            dStart,
            events,
            word,
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
        <div className="bg-white bg-opacity-100 border-black rounded-lg border-2 border-opacity-50 p-2 md:p-20">
            {finished ? 
                <div className="banner-btn text-center banner-btn-pink-no-h">
                    Merci pour votre réponse!
                </div>
            : <>
            
            <div className="banner-btn text-center banner-btn-pink-no-h">
                RSVP
            </div>
            <form onSubmit={handleSubmit}>

                <div className="grid gap-6 my-6 md:grid-cols-2">
                    <div>
                        <label className="block mb-2 text-sm font-bold text-gray-900">Prénom</label>
                        <input
                            type="text"
                            id="first_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 drk:bg-gray-700 drk:border-gray-600 drk:placeholder-gray-400 drk:text-white drk:focus:ring-blue-500 drk:focus:border-blue-500"
                            placeholder="John"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-bold text-gray-900 drk:text-white">Nom</label>
                        <input
                            type="text"
                            id="last_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 drk:bg-gray-700 drk:border-gray-600 drk:placeholder-gray-400 drk:text-white drk:focus:ring-blue-500 drk:focus:border-blue-500"
                            placeholder="Doe"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-bold text-gray-900 drk:text-white">Numéro de téléphone</label>
                        <div className="text-gray-900 text-sm p-2.5 ">
                            <PhoneInput
                                inputStyle={{'width': '100%'}}
                                placeholder={"33612345678"}

                                country={'fr'}
                                // value={tel ? tel : undefined}
                                onChange={newPhone => setTel(newPhone)}
                                enableSearch={true}
                                inputProps={{
                                    name: 'phone',
                                    required: true
                                }}
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-bold text-gray-900 drk:text-white">Adresse Email</label>
                        <input
                            type="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 drk:bg-gray-700 drk:border-gray-600 drk:placeholder-gray-400 drk:text-white drk:focus:ring-blue-500 drk:focus:border-blue-500"
                            placeholder="john.doe@gmail.com"
                            required
                        />
                    </div>
                </div>
                
                <div className="">
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-bold text-gray-900 drk:text-white">Adresse à Formentera</label>
                        <input
                            type="text"
                            id="adresse-formen"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 drk:bg-gray-700 drk:border-gray-600 drk:placeholder-gray-400 drk:text-white drk:focus:ring-blue-500 drk:focus:border-blue-500"
                            placeholder="Pour l'organisation des navettes"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-bold text-gray-900 drk:text-white">Adresse Postale</label>
                        <input
                            type="text"
                            id="adresse-postale"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 drk:bg-gray-700 drk:border-gray-600 drk:placeholder-gray-400 drk:text-white drk:focus:ring-blue-500 drk:focus:border-blue-500"
                            placeholder="Pour recevoir le Faire Part"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-bold text-gray-900 drk:text-white">Date d'Arrivée à Formentera</label>
                        <input
                            type="date"
                            id="jour-arrivee"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 drk:bg-gray-700 drk:border-gray-600 drk:placeholder-gray-400 drk:text-white drk:focus:ring-blue-500 drk:focus:border-blue-500"
                            // min="2023-09-01"
                            // max="2023-09-09"
                            required
                        />
                    </div>
                </div>
                
                <div className="w-full mb-4 text-sm font-bold text-gray-900">
                    Votre participation aux festivités:
                </div>

                <div className="grid grid-cols-2 pb-10">
                    {Object.keys(events).map((k) => {
                        const event = events[k]

                        return (
                            <>
                                <div className="flex flex-row justify-center items-center py-4 border-b-2 border-black border-opacity-50">
                                    <label className="mx-4 text-sm font-bold text-gray-900 drk:text-white">{event.title}</label>
                                    <input type="checkBox"
                                        className="mx-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 drk:bg-gray-700 drk:border-gray-600 drk:focus:ring-blue-500 drk:focus:border-blue-500"
                                        onChange={(e) => {return handleChangeEvent(e, {'id': k, 'changeP': 'confirmed', 'status': e.target.checked})}}
                                        defaultChecked={event['confirmed']}
                                    />
                                </div>
                                <div className="flex flex-row justify-center items-center py-4 border-b-2 border-black border-opacity-50">
                                    <label className="min-w-auto mx-4 text-sm font-bold text-gray-900 drk:text-white">+ ?</label>
                                    <input type="number" min="0" max="2"
                                        className="mx-2 w-14 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 drk:bg-gray-700 drk:border-gray-600 drk:focus:ring-blue-500 drk:focus:border-blue-500"
                                        onChange={(e) => {return handleChangeEvent(e, {'id': k, 'changeP': 'nbPlus', 'status': e.target.value})}}
                                        value={event['nbPlus']}
                                        disabled={!event['confirmed']}
                                        required
                                    />
                                </div>
                            </>

                        )
                    })}
                </div>

                <div className="my-8">
                    <div className="w-full my-4 text-sm font-bold text-gray-900">
                        Un petit mot?
                    </div>
                    <input
                        type="text"
                        id="word"
                        className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 drk:bg-gray-700 drk:border-gray-600 drk:placeholder-gray-400 drk:text-white drk:focus:ring-blue-500 drk:focus:border-blue-500"
                        placeholder="..."
                    />

                </div>
                <div className="w-full flex mt-20">
                    <button
                        type="submit"
                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 my-4 py-4 text-center drk:bg-blue-600 drk:hover:bg-blue-700 drk:focus:ring-blue-800"
                    >
                        Envoyer
                    </button>
                </div>
            </form></>}
        </div>
        </>
    
    )
}


export default function RsvpForm () {

    return (
        <Example/>
    )
  }