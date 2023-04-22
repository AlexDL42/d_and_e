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

        <LinkCustom href="/planning/#anchor_one">
          Planning
        </LinkCustom>
        {/* <LinkCustom href="/votre-sejour">
          Votre Sejour
        </LinkCustom> */}

        <LinkCustom href="/infos-pratiques/#anchor_one">
          Infos Pratiques
        </LinkCustom>

        <LinkCustom href="/liste/#anchor_one">
          Liste de Mariage
        </LinkCustom>

        <Link href="/rsvp/#anchor_one">
          <button className="header-button">
            RSVP
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Header
