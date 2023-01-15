
import Link from 'next/link'

const RsvpHome = () => {

  return (
    <div className="w-full h-full flex flex-col justify-space items-center">

        <div className="banner-txt-intro text-center mt-10">
            Heidi and Hugh Taylor and Mel and David Hollingworth cordially invite you to the Wedding of
        </div>

        <div className="banner-txt-title text-center my-10">
        Delphine & Etienne
        </div>

        <div className="banner-txt-subtitle text-center mb-10">
        13th to 15th October 2023 · Formentera, Spain
        </div>

        <Link href='/rsvp' className="banner-btn banner-btn-pink text-center">
                RSVP
        </Link>

    </div>
  )
}

export default RsvpHome