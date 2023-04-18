
import {maps} from '../public/assets/maps-data';
import CenteredAccordion from './centered-accordion';




function MapsContent() {
    const mapsNew = maps.map((map) => {

        return {
            title: map.title,
            elem: <div className="flex-shrink-0 relative">
                    <img className="img-maps-card" src={map.imageUrl} alt="" />
                </div>
        }
    })
  return (
    <CenteredAccordion title='Cartes' items={mapsNew} />
  )
}

function ContactsContent() {
    const contacts = [
        {
            title: <div>
                        <span className="text-base font-semibold leading-7">Delphine: </span>
                        <span className="text-base leading-7 ml-4 text-gray-600">
                            +33 6 78 67 25 35 – delphine.hillard@gmail.com
                        </span>
                    </div>,
            elem: null
        },
        {
            title: <div>    
                        <span className="text-base font-semibold leading-7">Etienne: </span>
                        <span className="text-base leading-7 ml-4 text-gray-600">
                            + 33 7 88 95 09 25 - etienne.pecnard@gmail.com
                        </span>
                    </div>,
            elem: null
        },
        {
            title: <div>    
                        <span className="text-base font-semibold leading-7">Mathilde (notre wedding planneuse): </span>
                        <span className="text-base leading-7 ml-4 text-gray-600">
                            WhatsApp au +34 653 36 18 9 - soporte@marewaformentera.com
                        </span>
                    </div>,
            elem: null
        },
        {
            title: <span className="text-base font-semibold leading-7">Taxi</span>,
            elem: <ul>
                        <li className="text-base leading-7 ml-4 text-gray-600">
                            Es Pujols: (+34) 971 328 016

                        </li>
                        <li className="text-base leading-7 ml-4 text-gray-600">
                            Sant Francesc: (+34) 971 322 016
                        </li>
                        <li className="text-base leading-7 ml-4 text-gray-600">
                            Radio Taxi: (+34) 971 322 342
                        </li>
                 </ul>
        },
        {
            title: <span className="text-base font-semibold leading-7">Contacts d’urgence</span>,
            elem: <ul>
                        <li className="text-base leading-7 ml-4 text-gray-600">
                            Urgence: 112
                        </li>
                        <li className="text-base leading-7 ml-4 text-gray-600">
                            Police:  092 / 971 322 087
                        </li>
                        <li className="text-base leading-7 ml-4 text-gray-600">
                        Guardia Civil: 971 32 20 22
                        </li>
                        <li className="text-base leading-7 ml-4 text-gray-600">
                        Pompier: 092 / 112 / 971 32 26 21
                        </li>
                        <li className="text-base leading-7 ml-4 text-gray-600">
                        Hopital: 971 32 12 12
                        </li>
                 </ul>
        },
        {
            title: <span className="text-base font-semibold leading-7">Pharmacies</span>,
            elem: <ul>
                        <li className="text-base leading-7 ml-4 text-gray-600">
                        Es Caló 971 327 398
                        </li>
                        <li className="text-base leading-7 ml-4 text-gray-600">
                        Es Pujols 971 328 663
                        </li>
                        <li className="text-base leading-7 ml-4 text-gray-600">
                        Sant Ferran 971 328 004
                        </li>
                        <li className="text-base leading-7 ml-4 text-gray-600">
                        Sant Francesc 971 322 419
                        </li>
                 </ul>
        },

    ]
    
  return (
    <CenteredAccordion title='Contacts' items={contacts} />
  )
}

function AddressesContent() {
    const addresses = [
        {
            title: <span className="text-base font-semibold leading-7">
                    Lieu de la cérémonie et du cocktail d’arrivée du vendredi
                    </span>,
            elem: <ul>
                        <li className="text-base leading-7 ml-4 text-gray-600">
                            <strong>Références GPS: </strong>(38°42'17.7"N 1°23'22.1”E)
                        </li>
                        <li className="text-base leading-7 ml-4 text-gray-600">
                            <strong>Google Map: </strong>
                            <a href="https://maps.app.goo.gl/1FFrYdvF6GSTAxwU7?g_st=ic">
                                https://maps.app.goo.gl/1FFrYdvF6GSTAxwU7?g_st=ic
                            </a>

                        </li>
                </ul>
        },

        {
            title: <span className="text-base font-semibold leading-7">
                    Lieu de la soirée
                    </span>,
            elem: <ul>
                        <li className="text-base leading-7 ml-4 text-gray-600">
                            <strong>Casa Mahana: </strong>800 Venda de Porto Saler, 07860 San Francesc Javier
                        </li>
                </ul>
        },

        {
            title: <span className="text-base font-semibold leading-7">
                    Lieu du brunch
                    </span>,
            elem: <ul>
                        <li className="text-base leading-7 ml-4 text-gray-600">
                            <strong>Restaurant le Pelayo</strong>
                        </li>
                        <li className="text-base leading-7 ml-4 text-gray-600">
                            <strong>Google Map: </strong>
                            <a href="https://goo.gl/maps/NbPR879sU4avqrHy7">
                                https://goo.gl/maps/NbPR879sU4avqrHy7
                            </a>

                        </li>
                </ul>
        },
    ]
  return (
    <CenteredAccordion title='Adresses' items={addresses} />
  )
}

function ComeContent() {
    const steps = [
        {
            title: <span className="text-base font-semibold leading-7">
                    1. Prendre l’avion jusqu’à l’aéroport d’Ibiza en Espagne
                    </span>,
            elem: null
        },
        {
            title:  <div>
                        <span className="text-base font-semibold leading-7">2. Prendre un Taxi jusqu’au port d’ibiza: </span>
                        <span className="text-base leading-7 ml-4 text-gray-600">
                            Demander <strong>« la barca para formentera »</strong> au chauffeur
                        </span>
                    </div>,
            elem: null
        },
        {
            title: <span className="text-base font-semibold leading-7">3. Prendre le bateau </span>,
            elem: <ul>
                    <li className="text-base leading-7 ml-4 text-gray-600">
                        Plusieurs compagnies de bateaux proposent le trajet d'Ibiza à Formentera tout au long de la journée. Tous ces itinéraires sont mis à jour quotidiennement sur le site de Proximo Ferry (<a href='https://www.proximoferry.com/'>https://www.proximoferry.com/</a>).
                    </li> <br/>
                    <li className="text-base leading-7 ml-4 text-gray-600">
                        Nous vous recommandons de ne pas réserver vos billets à l'avance, sauf pour ceux qui arrivent dans la soirée. Vous pouvez vous présenter au port d'Ibiza ou de Formentera et acheter votre billet directement à la billetterie. Si vous arrivez juste à temps, vous pouvez toujours acheter les billets directement sur le bateau. Il n'y a pas de différence de prix. Les ferries partent environ toutes les 30 minutes.
                    </li>
                </ul>
        },
    ]
  return (
    <CenteredAccordion title="Comment Se Rendre Sur l'Île" items={steps} />
  )
}

function TransportsContent() {
    const rents = [
        {
            title: <span className="text-base font-semibold leading-7">Louer une voiture/un scooter</span>,
            elem: <ul>
                    <li className="text-base leading-7 ml-4 text-gray-600">
                        Avoir une voiture pour se déplacer sur l'île est fortement recommandé. Pour louer une voiture, rendez-vous sur le port de Formentera. Nous vous communiquerons un code de réductions à présenter au loueur
                    </li>
                </ul>
        },

        {
            title: <span className="text-base font-semibold leading-7">Navettes</span>,
            elem: <ul>
                    <li className="text-base leading-7 ml-4 text-gray-600">
                        Le jour du mariage, des navettes viendront vous chercher pour vous amener à la cérémonie. Nous vous communiquerons les points de rendez-vous précis en fonction des zones où vous avez choisi votre logement. Les navettes vous emmèneront de la cérémonie au lieu de la soirée et tournerons dans la nuit pour vous ramener aux différents points de rendez-vous près de chez vous.
                    </li>
                </ul>
        },

    ]
  return (
    <CenteredAccordion title="Se Déplacer" items={rents} />
  )
}

function HotelsContent() {
    const hotels = [
        {
            title: <span className="text-base font-semibold leading-7">
                    Si vous n’avez pas encore trouvé votre logement, voici quelques suggestions :
                    </span>,
            elem: <ul>
                        <li className="text-base leading-7 ml-4 text-gray-600">
                        Hostal La Savina (La Savina) 
                        </li>
                        <li className="text-base leading-7 ml-4 text-gray-600">
                        Hostal Pepe (San Ferran) 
                        </li>
                        <li className="text-base leading-7 ml-4 text-gray-600">
                        Hotel Cala Saona (Cala Saona) 
                        </li>
                        <li className="text-base leading-7 ml-4 text-gray-600">
                        Apartamentos Castavi (Es Pujols) 
                        </li>
                        <li className="text-base leading-7 ml-4 text-gray-600">
                        Apartamentos La Gaviota (Es Caló)
                        </li>
                        <li className="text-base leading-7 ml-4 text-gray-600">
                        Apartamentos Talaya (Ca Marí) 
                        </li>

                    </ul>
        },
    ]
  return (
    <CenteredAccordion title='Hotels' items={hotels} />
  )
}



function WhatToDoContent() {
    const wtd = [
        {
            title: <span className="text-base font-semibold leading-7">
                    Sports Nautiques
                    </span>,
            elem: <ul>
                        <li className="text-base leading-7 ml-4 text-gray-600">
                            <strong>Wet 4 Fun:</strong> <a href="https://www.wet4fun.com/">Wet4Fun - Watersports Formentera</a>
                        </li>
                        <li className="text-base leading-7 ml-4 text-gray-600">
                        : Formentera Divers - https://www.formenteradivers.com/

                            <strong>Google Map: </strong>
                            <a href="https://maps.app.goo.gl/1FFrYdvF6GSTAxwU7?g_st=ic">
                                https://maps.app.goo.gl/1FFrYdvF6GSTAxwU7?g_st=ic
                            </a>

                        </li>

                </ul>
        },
        {
            title: <span className="text-base font-semibold leading-7">
                    Plongée 
                    </span>,
            elem: <ul>
                        <li className="text-base leading-7 ml-4 text-gray-600">
                            <strong>Formentera Divers: </strong> <a href="https://www.formenteradivers.com/">https://www.formenteradivers.com/</a>
                        </li>
                        <li className="text-base leading-7 ml-4 text-gray-600">
                            <strong>Adriana: </strong> 616 66 46 31
                        </li>
                </ul>
        },
        {
            title: <span className="text-base font-semibold leading-7">
                    Massages
                    </span>,
            elem: <ul>
                        <li className="text-base leading-7 ml-4 text-gray-600">
                            <strong>Marta: </strong> 653 77 59 13
                        </li>
                        <li className="text-base leading-7 ml-4 text-gray-600">
                            <strong>Adriana: </strong> 616 66 46 31
                        </li>
                </ul>
        },
        {
            title: <span className="text-base font-semibold leading-7">
                    Randonnée 
                    </span>,
            elem: <ul>
                        <li className="text-base leading-7 ml-4 text-gray-600">
                        Nous vous conseillons la randonnée du chemin romain « Camino Romano » au départ d’Es Calo et qui monte jusqu’à la Mola. 
                        </li>
                </ul>
        },
        {
            title: <span className="text-base font-semibold leading-7">
                    Dégustation de vin
                    </span>,
            elem: <ul>
                        <li className="text-base leading-7 ml-4 text-gray-600">
                            Si vous souhaitez gouter au vin local, le vignoble <strong>Terramoll</strong> organise des dégustations de vin au milieu des vignes et visite du domaine. Le domaine se trouve à la Mola, au sommet de la montagne ! <a href="http://www.terramoll.es/">http://www.terramoll.es/</a>
                        </li>
                </ul>
        },
        {
            title: <span className="text-base font-semibold leading-7">
                    Où Manger
                    </span>,
            elem: <ul>
                        <li className="text-base leading-7 ml-4 text-gray-600">
                            <strong>Petit déjeuner: </strong> le petit déjeuner à Es Caló est une institution et la vue y est magnifique!
                        </li>
                        <li className="text-base leading-7 ml-4 text-gray-600">
                            <strong>Diner: </strong> Restaurants Casbah, Can Carlito, Cafuné
                        </li>
                        <li className="text-base leading-7 ml-4 text-gray-600">
                            <strong>Coucher de Soleil: </strong> El Molin de Sal, Cala Saona (petite bicoque en hauteur sur la gauche de la plage, paiement uniquement en liquide) 
                        </li>
                </ul>
        },

        {
            title: <span className="text-base font-semibold leading-7">
                    Lieu du brunch
                    </span>,
            elem: <ul>
                        <li className="text-base leading-7 ml-4 text-gray-600">
                            <strong>Restaurant le Pelayo</strong>
                        </li>
                        <li className="text-base leading-7 ml-4 text-gray-600">
                            <strong>Google Map: </strong>
                            <a href="https://goo.gl/maps/NbPR879sU4avqrHy7">
                                https://goo.gl/maps/NbPR879sU4avqrHy7
                            </a>

                        </li>
                </ul>
        },
    ]
  return (
    <CenteredAccordion title='Que faire à Formentera' items={wtd} />
  )
}







export default function InfosPratiquesContent() {
    return (
        <div className="pc-container-0">

        <div className="pc-container-1">

            <div className="pc-container-2">
                <MapsContent />
                <ContactsContent />
                <AddressesContent />
                <ComeContent />
                <TransportsContent />
                <HotelsContent />
                <WhatToDoContent />
            </div>
        </div>
        </div>
    )
}