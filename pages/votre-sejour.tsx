import AboutYourStayContent from '../components/about-your-stay-content'

import Header from '../components/header'
import Layout from '../components/layout'
import Head from 'next/head'


export default function RsvpPage () {
  return (
    <>
      <Layout>
        <Head>
          <title>Votre Séjour</title>
        </Head>
        <div className="page-frame">
          <div className="page-bg bg-aysCover text-black">
            <Header/>
            <div className="page-cover-buffer"/>
            <div className="page-content-bg">
              <div className="page-content-title">
                Welcome to the last paradise of the Mediterranean
              </div>
              <AboutYourStayContent/>
            </div>   
          </div>
        </div>
      </Layout>
    </>
  )
}
