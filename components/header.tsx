import Link from 'next/link'


const LinkCustom = ({ href, children }) => {

  const clName = "hover:underline  hover:text-white m-6"
  return (
    <div className={clName}>
      <Link href={href}>
        {children}
      </Link>
    </div>
  )

}

const Header = () => {
  return (
    <div className="min-w-screen flex flex-row flex-wrap justify-between items-center pb-10 pr-12 pl-12">
      <div className="text-2xl md:text-4xl">
        <LinkCustom href="/">
          Home
        </LinkCustom>
      </div>

      <div className="flex flex-row justify-between items-center text-l md:text-xl">

        <LinkCustom href="/planning">
          Planning
        </LinkCustom>
        <LinkCustom href="/about-your-stay">
          About your stay
        </LinkCustom>
        <button className="btn btn-pink max-h-14 flex items-center">
          <Link href="/rsvp">
            RSVP
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Header
