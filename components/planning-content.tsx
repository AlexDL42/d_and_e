import React from "react";
import { atcb_init } from 'add-to-calendar-button';
import 'add-to-calendar-button/assets/css/atcb.css';
import { LocationButton } from "./location-button";

const posts = [
    {
      title: 'Diner à Sa Platgeta',
      href: '#',
      description:
        'Rendez-vous au restaurant à 21:00 pour savourer une Paëlla!',
      startDate: '2023-09-01',
      startTime: '21:00',
      endDate: '2023-09-01',
      endTime: '23:59',
      location: 'Sa Platgeta, Spagna Camino de, Camí de Can Simonet I, 3062, 07871, Islas Baleares Spain',
      locationUrl: 'https://goo.gl/maps/p6bDZo3kooWmioo29',
      imageUrl:
        'https://www.formenterafoodlovers.com/_misc/restaurantes/saplatgeta/21.jpg',
    },
    {
      title: 'Brunch à Es Calo',
      href: '#',
      description:
        'Rendez-vous au restaurant à 12:00 pour savourer la vue et les pan con tomato!',
      startDate: '2023-09-02',
      startTime: '12:00',
      endDate: '2023-09-02',
      endTime: '14:00',
      location: 'Restaurant Can Rafalet, Carrer Sant Agustí, 1, 07872 Es Caló, Illes Balears, Spain',
      locationUrl: 'https://goo.gl/maps/EmjESPEHGY8pdPK36',
      imageUrl:
        'https://dimeunrestaurante.com/wordpress/wp-content/uploads/2014/09/CAN-RAFALET.-Portada.png',
    },
    {
      title: 'Cérémomie',
      href: '#',
      description:
        'Rendez-vous à 17:00 pour le début de la célébration!',
      startDate: '2023-09-02',
      startTime: '17:00',
      endDate: '2023-09-02',
      endTime: '19:00',
      location: 'El Sueño, Calle de Porto Saler, 804, 07680 San Francisco, Illes Balears, Spain',
      locationUrl: 'https://goo.gl/maps/CcHm6LpDY3FDWhxA8',
      imageUrl:
        "https://images.pexels.com/photos/3488259/pexels-photo-3488259.jpeg",
    },
    {
        title: 'La Teuf héhé',
        href: '#',
        description:
          'Rendez-vous à 20:30 pour le début des hostilités!',
        startDate: '2023-09-02',
        startTime: '20:30',
        endDate: '2023-09-03',
        endTime: '04:00',
        location: 'El Sueño, Calle de Porto Saler, 804, 07680 San Francisco, Illes Balears, Spain',
        locationUrl: 'https://goo.gl/maps/CcHm6LpDY3FDWhxA8',
        imageUrl:
          'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
  ]
  
const monthShort = [
    'Jan',
    'Fev',
    'Mar',
    'Avr',
    'May',
    'Jun',
    'Jul',
    'Aout',
    'Sept',
    'Oct',
    'Nov',
    'Dec'
]
const formatDateShort = (dt) => {
    let out =  ""
    let tmp = dt.split('-')
    out = `${tmp[2]} ${monthShort[Number(tmp[1])-1]}.`
    return out
}

const AddToCal = (props: any) => {
    const jsonAddToCal = {
        "name": props.v.post.title,
        "description": props.v.post.description,
        "startDate": props.v.post.startDate,
        "endDate": props.v.post.endDate,
        "startTime": props.v.post.startTime,
        "endTime": props.v.post.endTime,
        "location": props.v.post.location,
        "options":[
            "Apple",
            "Google",
            "iCal",
            "Microsoft365",
            "MicrosoftTeams",
            "Outlook.com",
            "Yahoo"
        ],
        "timeZone":"Europe/Madrid",
        "iCalFileName":"Reminder-Event"
    }
    return (
        <div className='atcb' style={{display: 'none'}}>
            {JSON.stringify({...jsonAddToCal, 'label': props.v.label})}
        </div>
    )
}


export default function PlanningContent() {
    React.useEffect( () => { atcb_init() }, []);
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