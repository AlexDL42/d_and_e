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

  const handleClick = () => {
    document.getElementById('nav-toggle').onclick = function(){
			document.getElementById("nav-content").classList.toggle("hidden");
		}
  }
  return (
    <div className="header-container">
      <div className="header-home-container">
        <LinkCustom href="/">
          Home
        </LinkCustom>
      </div>
      <div className="block lg:hidden">
        <button
          id="nav-toggle"
          onClick={function(){
            document.getElementById("nav-content").classList.toggle("hidden");
          }}
          className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-green-800 hover:border-green-800"
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className="header-nav-container hidden" id="nav-content">

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
