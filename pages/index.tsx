import RsvpHome from '../components/rsvpHome'
import Header from '../components/header'
import Layout from '../components/layout'
import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Mariage de Delphine & Etienne - Formentera, 2023</title>
        </Head>
        <div className="h-full w-full m-0">
          <div className="text-black bg-homeCover bg-no-repeat bg-cover bg-center bg-fixed h-full m-0">
            <Header/>
            <div className="bg-white bg-opacity-50">
              <RsvpHome/>
            </div>
            
          </div>
        </div>
      </Layout>
    </>
  )
}