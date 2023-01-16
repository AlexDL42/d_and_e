import React from "react";
import 'add-to-calendar-button/assets/css/atcb.css';
import { LocationButton } from "./location-button";
import {posts} from '../public/assets/about-your-stay';
import { caseIsEven } from "../lib/utils";


export default function AboutYourStayContent() {
    return (
        <div className="relative bg-opacity-0 px-6 pt-10 pb-20 lg:px-8 lg:pt-10 lg:pb-28">

        <div className="relative mx-20 max-w-7xl">

            <div className="mx-auto mt-12 grid max-w-lg gap-12 lg:max-w-none lg:grid-cols-1">
            {posts.map((post, i) => {
                const clName = caseIsEven({'num': i, 'returnEven': "post-card", 'returnOdd': "post-card-reverse"})
                return (
                  <div key={post.title} className={clName}>
                  <div className="flex-shrink-0 relative">
                      <img className="img-post-card" src={post.imageUrl} alt="" />
                  </div>
                  <div className="flex flex-1 flex-col items-between bg-white p-6">
                      <div className="relative flex-1 flex-col justify-between">
                          <div className="flex flex-row justify-between items-center">
                              <div className="flex-1">
                                  <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                              </div>
                              <LocationButton className='atcb' href={post.locationUrl} txt="Comment S'y Rendre"/>
                          </div>
                          <div className="my-3 flex-1 grow text-base text-gray-500">{post.description}</div>
                          
                          <div className="py-4 flex-0 text-base text-gray-500 absolute bottom-0">
                            <a href={post.ref} className="hover:underline">En Savoir Plus...</a>
                          </div>
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
