import Link from 'next/link'


const LinkCustom = ({ href, children }) => {

  const clName = "hover:underline hover:text-white m-4"
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
    <div className="min-w-full flex flex-row flex-wrap justify-between items-center pb-10 px-12">
      <div className="text-2xl md:text-4xl">
        <LinkCustom href="/">
          Home
        </LinkCustom>
      </div>

      <div className="flex flex-row justify-between items-center text-l md:text-xl">

        <LinkCustom href="/planning">
          Planning
        </LinkCustom>
        <LinkCustom href="/votre-sejour">
          Votre Sejour
        </LinkCustom>
        <LinkCustom href="/liste">
          Contributer
        </LinkCustom>
        <button className="btn btn-pink max-h-14 flex items-center m-4">
          <Link href="/rsvp">
            RSVP
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Header
