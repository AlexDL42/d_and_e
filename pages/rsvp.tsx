import RsvpForm from '../components/rsvp-form'
import Header from '../components/header'
import Layout from '../components/layout'
import Head from 'next/head'


export default function RsvpPage () {
    return (
      <>
        <Layout>
          <Head>
            <title>Mariage de Delphine & Etienne - Formentera, 2023</title>
          </Head>
          <div className="h-full w-full m-0">
            <div className="text-black bg-homeCover bg-no-repeat bg-cover bg-center bg-fixed h-full m-0">
              <Header/>
              <div className="p-20">
                <RsvpForm/>
              </div>
            </div>
          </div>
        </Layout>
      </>
    )
  }


