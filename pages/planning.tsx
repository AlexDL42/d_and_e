import PlanningContent from '../components/planning-content'
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
          <div>
            
            <div className="text-blue-900 bg-homeCover bg-no-repeat bg-cover bg-center bg-fixed min-h-screen">
            <Header/>
            <PlanningContent/>
            
            </div>
          </div>
        </Layout>
      </>
    )
  }
