


import React, { useState, useEffect } from 'react'
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

const evtTest = ['a', 'v', 'g']
export function Example() {

    const [finished, setFinished] = useState(false)


    const handleSubmit = (event) => {
        event.preventDefault()

        const firstName = event.target[0].value
        const lastName = event.target[1].value
        const phone = event.target[2].value
        const email = event.target[3].value

        const confirmDinerSP = event.target[4].checked
        const nbPlusDinerSP = event.target[5].value

        const confirmBrunch = event.target[6].checked
        const nbPlusBrunch = event.target[7].value

        const confirmCerem = event.target[8].checked
        const nbPlusCerem = event.target[9].value

        const confirmTeuf = event.target[10].checked
        const nbPlusTeuf = event.target[11].value

        console.log(firstName, lastName, phone, email)

        console.log(confirmDinerSP, nbPlusDinerSP)
        console.log(confirmBrunch, nbPlusBrunch)
        console.log(confirmCerem, nbPlusCerem)
        console.log(confirmDinerSP, nbPlusDinerSP)
        console.log(confirmTeuf, nbPlusTeuf)
        // setFinished(true)
    }

    return (
        <>{finished ? 
            <div className="banner-btn text-center banner-btn-pink-no-h">
                Thank you for your response!
            </div>
        :
        <div className="bg-white bg-opacity-75 border-black rounded-lg border-2 border-opacity-50 p-20">
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
                        <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+33 6 12 34 56 78"/>
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Adresse Email</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
                    </div>
                </div>
                
                
                <div className="w-full mb-4">
                    Votre participation aux festivités:
                </div>

                <div className="grid grid-cols-2">
                    <div className="flex flex-row justify-center items-center py-4 border-b-2 border-black border-opacity-50">
                        <label className="mx-4 text-sm font-bold text-gray-900 dark:text-white">Diner à Sa Platgeta</label>
                        <input type="checkBox" id="confirmA" className="mx-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>
                    <div className="flex flex-row justify-center items-center py-4 border-b-2 border-black border-opacity-50">
                        <label className="min-w-auto mx-4 text-sm font-bold text-gray-900 dark:text-white">+ ?</label>
                        <input type="number" id="nbPlusA" className="mx-2 w-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={0} required/>
                    </div>
                    <div className="flex flex-row justify-center items-center py-4 border-b-2 border-black border-opacity-50">
                        <label className="mx-4 text-sm font-bold text-gray-900 dark:text-white">Brunch à Es Calo</label>
                        <input type="checkBox" id="confirmB" className="mx-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>
                    <div className="flex flex-row justify-center items-center py-4 border-b-2 border-black border-opacity-50">
                        <label className="min-w-auto mx-4 text-sm font-bold text-gray-900 dark:text-white">+ ?</label>
                        <input type="number" id="nbPlusB" className="mx-2 w-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={0} required/>
                    </div>
                    <div className="flex flex-row justify-center items-center py-4 border-b-2 border-black border-opacity-50">
                        <label className="mx-4 text-sm font-bold text-gray-900 dark:text-white">Cérémonie</label>
                        <input type="checkBox" id="confirmC" className="mx-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>
                    <div className="flex flex-row justify-center items-center py-4 border-b-2 border-black border-opacity-50">
                        <label className="min-w-auto mx-4 text-sm font-bold text-gray-900 dark:text-white">+ ?</label>
                        <input type="number" id="nbPlusC" className="mx-2 w-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={0} required/>
                    </div>
                    <div className="flex flex-row justify-center items-center py-4">

                        <label className="mx-4 text-sm font-bold text-gray-900 dark:text-white">Diner & Teuf</label>
                        <input type="checkBox" id="confirmD" className="mx-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>
                    <div className="flex flex-row justify-center items-center py-4">
                        <label className="min-w-auto mx-4 text-sm font-bold text-gray-900 dark:text-white">+ ?</label>
                        <input type="number" id="nbPlusD" className="mx-2 w-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={0} required/>
                    </div>
                </div>
                <div className="w-full flex">
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm w-full px-5 my-4 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Envoyer</button>
                </div>
            </form>
        </div>
        }</>
    
    )
  }


export default function RsvpForm () {

    return (
        <Example/>
    )
  }