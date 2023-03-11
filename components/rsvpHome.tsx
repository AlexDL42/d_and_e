
import Link from 'next/link'

const catchA = `Vous êtes invités à célébrer le mariage de`
const catchB = `Delphine & Etienne`
const catchC = `A Formentera`
const catchD = `8-10 Septembre 2023`

const RsvpHome = () => {

  return (
    <div className="rh-container">

        <div className="rh-intro">
          {catchA}
        </div>

        <div className="rh-title">
        {catchB}
        </div>

        <div className="rh-subtitle">
          {`${catchC} · ${catchD}`}
        </div>

        <Link href='/rsvp' className="rh-button">
          RSVP
        </Link>

    </div>
  )
}

export default RsvpHome