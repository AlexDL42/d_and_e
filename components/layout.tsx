import Alert from './alert'
import Footer from './footer'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
  nocatchfoot?: boolean
}

const Layout = ({ preview, children, nocatchfoot }: Props) => {
  return (
    <div className="layout-container">
      <Meta />
      <div>
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer nocatch={nocatchfoot}/>
    </div>
  )
}

export default Layout
