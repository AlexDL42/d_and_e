import React from "react";
import { AddToCal } from "./add-to-cal-button";
import { LocationButton } from "./location-button";
import {posts} from '../public/assets/events';
import {formatDateShort} from '../lib/utils';


export default function PlanningContent() {
    return (
        <div className="relative bg-opacity-0 px-6 pt-10 pb-20 lg:px-8 lg:pt-10 lg:pb-28">

        <div className="relative mx-auto max-w-7xl">

            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-1">
            {posts.map((post, i) => {
                return (
                    <div key={post.title} className="post-card">
                        <div className="flex-shrink-0 relative">
                            <img className="img-post-card" src={post.imageUrl} alt="" />
                            <div className="bg-white border-b-2 border-l-2 border-black border-opacity-50 p-2 absolute top-0 right-0 w-20 font-bold flex text-center">{formatDateShort(post.startDate)}</div>
                        </div>
                        <div className="flex flex-1 flex-col justify-between bg-white p-6">
                            <div className="flex-1">
                                <div className="flex flex-row justify-between items-center">
                                    <div className="flex-1">
                                        <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                                        <div className="flex space-x-1 text-sm text-gray-500">
                                            <time dateTime={post.startTime}>{post.startTime}</time>
                                        </div>
                                    </div>
                                    <LocationButton className='atcb' txt="Où Nous Trouver?" href={post.locationUrl}/>
                                    <AddToCal v={{'post': post, 'label': 'Ajouter au Calendrier'}}/>
                                </div>
                                <p className="mt-3 text-base text-gray-500">{post.description}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
        </div>
    )
}