
import Link from 'next/link'

const RsvpHome = () => {

  return (
    <div className="w-full h-full flex flex-col justify-space items-center">

        <div className="banner-txt-intro text-center mt-10">
          Titi et Toto Taylor ainsi que IndividuA and IndividuB Hollingworth vous invite cordialement au mariage de
        </div>

        <div className="banner-txt-title text-center my-10">
          Delphine & Etienne
        </div>

        <div className="banner-txt-subtitle text-center mb-10">
          1-7 Septembre 2023 · Formentera, Spain
        </div>

        <Link href='/rsvp' className="banner-btn banner-btn-pink text-center">
          RSVP
        </Link>

    </div>
  )
}

export default RsvpHome