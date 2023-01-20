
import Link from "next/link";
import React from "react";
import {posts} from '../public/assets/home'
import {caseIsEven} from "../lib/utils";


export default function HomeContent() {

    const handleSubmit = async (event) => {
        event.preventDefault()

        const song = event.target[0].value
        const out = {
            'mailType': 'music',
            song,
        }
        const res = await fetch(`api/mailer`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(out),
        })

    }

    return (
        <div key='home-content' className="relative bg-opacity-0 px-6 pt-10 pb-20 lg:px-8 lg:pt-10 lg:pb-28">
            <div className="relative mx-20 max-w-7xl">
                <div className="mx-auto mt-12 grid max-w-lg gap-12 lg:max-w-none lg:grid-cols-1">
                    {posts.map((post, i) => {
                        const clName = caseIsEven({'num': i, 'returnEven': "post-card", 'returnOdd': "post-card-reverse"})
                        return (
                            <>{post.title=='Musique' ? 

                                <div key={post.title} className={clName}>
                                    <div className="flex-shrink-0 relative">
                                        <img className="img-post-card" src={post.imageUrl} alt="" />
                                    </div>
                                    <div className="relative flex flex-1 flex-col items-between bg-white p-6">
                                        <div className="flex-1 flex-col justify-between">
                                            <div className="flex flex-row justify-between items-center">
                                                <div className="flex-1">
                                                <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                                                </div>
                                            </div>
                                            <div className="my-3 flex-1 grow text-base text-gray-500">
                                                {post.description}
                                            </div>
                                            <form key='music-form' onSubmit={handleSubmit}>
                                                <div className="">
                                                    <div className="w-full mb-4 text-gray-900">
                                                        Une suggestion?
                                                    </div>
                                                    <input type="text" id="word" className=" w-full bg-gray-50 border border-gray-300 text-gray-900
                                                        text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                                                        block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                                                        dark:placeholder-gray-400 dark:text-white 
                                                        dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                                        placeholder="Titre, Interprète, Genre Musical, ... Ce qui vous passe par la tête!"
                                                        required/>
                                                </div>
                                                <div className="w-full flex">
                                                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm w-full px-5 my-4 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Envoyer</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                :
                                <Link href={post.ref}>
                                    <div key={post.title} className={clName}>
                                        <div className="flex-shrink-0 relative">
                                            <img className="img-post-card" src={post.imageUrl} alt="" />
                                        </div>
                                        <div className="relative flex flex-1 flex-col items-between bg-white p-6">
                                            <div className="flex-1 flex-col justify-between">
                                                <div className="flex flex-row justify-between items-center">
                                                    <div className="flex-1">
                                                        <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                                                    </div>
                                                </div>
                                                <div className="my-3 flex-1 grow text-base text-gray-500">{post.description}</div>

                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            }</>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
