import Link from 'next/link'


const LinkCustom = ({ href, children }) => {
  return (
    <div className="header-custom-link">
      <Link href={href}>
        {children}
      </Link>
    </div>
  )

}

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-home-container">
        <LinkCustom href="/">
          Home
        </LinkCustom>
      </div>

      <div className="header-nav-container">

        <LinkCustom href="/planning">
          Planning
        </LinkCustom>
        {/* <LinkCustom href="/votre-sejour">
          Votre Sejour
        </LinkCustom> */}

        <LinkCustom href="/infos-pratiques">
          Infos Pratiques
        </LinkCustom>

        <LinkCustom href="/liste">
          Liste de Mariage
        </LinkCustom>

        <Link href="/rsvp">
          <button className="header-button">
            RSVP
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Header
