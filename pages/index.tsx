import RsvpHome from '../components/rsvpHome'
import Header from '../components/header'
import Layout from '../components/layout'
import Head from 'next/head'
import HomeContent from '../components/home-content'


// const catchP = `Nous sommes impatients de partager ce moment avec vous !`

export default function Index() {
  return (
    <>
      <Layout>
          <Head>
              <title>Mariagee de Delphine & Etienne - Formentera, 2023</title>
          </Head>
          <div className="page-frame">
              <div className="page-bg bg-homeCover text-black">
                  <Header/>
                  <div className="page-cover-buffer"/>
                  <div className="page-content-bg">
                      <RsvpHome/>

                      {/* <HomeContent/> */}

                  </div>   
              </div>
          </div>
      </Layout>
    </>
  )
}