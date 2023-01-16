import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {posts} from '../public/assets/events';

export function Example() {

    const [finished, setFinished] = useState(false)
    const [tel, setTel] = useState("")
    const [events, setEvents] = useState({...posts})

    const handleChangeEvent = (e, props) => {
        e.preventDefault()
        setEvents(() => {
            let out = {
                ...events,
                [props.id]:{
                    [props.changeP]: props.status,
                    ...events[props.id]
                }
            }
            return out
        }
        )
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const firstName = event.target[0].value
        const lastName = event.target[1].value
        const phone = tel.replaceAll(' ','')
        const email = event.target[3].value

        const confirmDinerSP = event.target[4].checked
        const nbPlusDinerSP = event.target[5].value

        const confirmBrunch = event.target[6].checked
        const nbPlusBrunch = event.target[7].value

        const confirmCerem = event.target[8].checked
        const nbPlusCerem = event.target[9].value

        const confirmTeuf = event.target[10].checked
        const nbPlusTeuf = event.target[11].value
        
        const word = event.target[12].value

        const out = {
            firstName,
            lastName,
            phone,
            email,
            events,
            word,
        }        


        const res = await fetch(`api/rsvp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(out),
        })

        // setFinished(true)
    }

    return (
        <>
        <div className="bg-white bg-opacity-100 border-black rounded-lg border-2 border-opacity-50 p-20">
            {finished ? 
                <div className="banner-btn text-center banner-btn-pink-no-h">
                    Thank you for your response!
                </div>
            : <>
            
            <div className="banner-btn text-center banner-btn-pink-no-h">
                RSVP
            </div>
            <form onSubmit={handleSubmit}>

                <div className="grid gap-6 my-6 md:grid-cols-2">
                    <div>
                        <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Prénom</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Nom</label>
                        <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Numéro de téléphone</label>
                        <div className="text-gray-900 text-sm p-2.5">
                            <PhoneInput
                                country={'fr'}
                                value={tel}
                                onChange={newPhone => setTel(newPhone)}
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Adresse Email</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
                    </div>
                </div>
                
                
                <div className="w-full mb-4 text-gray-900">
                    Votre participation aux festivités:
                </div>

                <div className="grid grid-cols-2 pb-10">
                    {posts.map((post, i) => {

                        return (
                            <>
                                <div className="flex flex-row justify-center items-center py-4 border-b-2 border-black border-opacity-50">
                                    <label className="mx-4 text-sm font-bold text-gray-900 dark:text-white">{post.title}</label>
                                    <input type="checkBox"
                                        className="mx-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        onChange={(e) => {return handleChangeEvent(e, {'id': post.id, 'changeP': 'confirmed', 'status': e.target.checked})}}
                                    />
                                </div>
                                <div className="flex flex-row justify-center items-center py-4 border-b-2 border-black border-opacity-50">
                                    <label className="min-w-auto mx-4 text-sm font-bold text-gray-900 dark:text-white">+ ?</label>
                                    <input type="number" 
                                        className="mx-2 w-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        defaultValue={0}
                                        onChange={(e) => {return handleChangeEvent(e, {'id': post.id, 'changeP': 'nbPlus', 'status': e.target.value})}}
                                        required/>
                                </div>
                            </>

                        )
                    })}
                </div>

                <div className="my-8">
                    <div className="w-full my-4 text-gray-900">
                        Un petit mot?
                    </div>
                    <input type="text" id="word" className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="..." required/>

                </div>
                <div className="w-full flex mt-20">
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm w-full px-5 my-4 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Envoyer</button>
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