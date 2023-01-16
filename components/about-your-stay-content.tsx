

import React from "react";
import 'add-to-calendar-button/assets/css/atcb.css';
import { LocationButton } from "./location-button";

const posts = [
    {
      title: 'Restaurant Sa Platgeta',
      href: '#',
      description:
        'Super resto, plage intimiste',
      ref: "",
      locationUrl: 'https://goo.gl/maps/p6bDZo3kooWmioo29',
      imageUrl:
        "https://www.formenterafoodlovers.com/_misc/restaurantes/saplatgeta/21.jpg",
    },
    {
      title: 'Restaurant Can Rafalet à Es Calo',
      href: '#',
      description:
        'Super resto, vue incroyable!',
      ref: "",
      locationUrl: 'https://goo.gl/maps/EmjESPEHGY8pdPK36',
      imageUrl:
        'https://dimeunrestaurante.com/wordpress/wp-content/uploads/2014/09/CAN-RAFALET.-Portada.png',
    },
    {
      title: 'El Pilar de la Mola',
      href: '#',
      description:
        "El Pilar de la Mola est un village de Formentera, Îles Baléares, Espagne. Il se trouve sur la péninsule de La Mola, le point culminant de l'île, et offre une belle vue sur Formentera.",
      ref: "https://www.formentera.es/fr/explorer/villages/el-pilar-de-la-mola/",
      locationUrl: 'https://goo.gl/maps/f6HVLXKbxeWeaRG28',
      imageUrl:
        "https://www.affittoformentera.com/wp-content/uploads/2019/10/la-mola-lighthouse.jpg",
    },
    {
        title: 'Es Arenals',
        href: '#',
        description:
          "C'est l’une des plages les plus fréquentées par les touristes, étant d’une grande beauté et facile d’accès. Deux couleurs résument le caractère de cette plage: le bleu turquoise des eaux cristallines et la blancheur du sable, à laquelle elle doit son nom.  De plus, les eaux étant peu profondes, il s’agit d’un endroit idéal pour passer une journée à la plage en famille.",
        ref: 'https://www.formentera.es/fr/explorer/activites/routes-vertes/es-carnatge-es-arenals/',
        location: 'El Sueño, Calle de Porto Saler, 804, 07680 San Francisco, Illes Balears, Spain',
        locationUrl: 'https://goo.gl/maps/AeRK6X5YQPnoLusz6',
        imageUrl:
          'https://www.hotelmaysiformentera.com/background.jpg',
      },
  ]
  

const clFuncI = (i) => {
  if(i % 2==0){
      return "post-card"
    }
    else {
      return "post-card-reverse"
    }
      
}


export default function AboutYourStayContent() {
    return (
        <div className="relative bg-opacity-0 px-6 pt-10 pb-20 lg:px-8 lg:pt-10 lg:pb-28">

        <div className="relative mx-20 max-w-7xl">

            <div className="mx-auto mt-12 grid max-w-lg gap-12 lg:max-w-none lg:grid-cols-1">
            {posts.map((post, i) => {
                const clName = clFuncI(i)
                return (
                  <div key={post.title} className={clName}>
                  <div className="flex-shrink-0 relative">
                      <img className="img-post-card" src={post.imageUrl} alt="" />
                  </div>
                  <div className="flex flex-1 flex-col items-between bg-white p-6">
                      <div className="flex-1 flex-col justify-between">
                          <div className="flex flex-row justify-between items-center">
                              <div className="flex-1">
                                  <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                              </div>
                              <LocationButton className='atcb' href={post.locationUrl} txt="Comment S'y Rendre"/>
                          </div>
                          <p className="my-3 text-base text-gray-500">{post.description}</p>
                          <div className="py-4 self-end text-base text-gray-500">
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
