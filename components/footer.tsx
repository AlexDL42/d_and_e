import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div>
        <div className="flex flex-col items-center">
          <div className="banner-txt-title text-center my-10">
            See you soon
          </div>
          <div className="w-full text-center py-10 border-t border-slate-200 ">
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="hover:underline"
            >
              Made with 🌷 and ❤️
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
