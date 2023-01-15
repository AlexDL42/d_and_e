
import Link from 'next/link'

const RsvpHome = () => {

  return (
    // <div className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
    <div className="w-full h-full">

        <div className="w-full h-full bg-white  bg-opacity-25 border-t-2 border-opacity-25 border-black flex flex-col justify-space items-center">
            
            

            <div className="banner-txt-intro text-center mt-10">
                Heidi and Hugh Taylor and Mel and David Hollingworth cordially invite you to the Wedding of
            </div>

            <div className="banner-txt-title text-center my-10">
            Delphine & Etienne
            </div>

            <div className="banner-txt-subtitle text-center mb-10">
            13th to 15th October 2023 · Formentera, Spain
            </div>

            <button className="banner-btn banner-btn-pink">
                <Link href='/rsvp'>
                    RSVP
                </Link>
            </button> 

        </div>
    </div>
  )
}

export default RsvpHome