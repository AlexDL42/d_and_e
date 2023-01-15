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
            <div className="h-full w-full m-0">
                <div className="text-black bg-planningCover bg-no-repeat bg-cover bg-center bg-fixed h-full m-0">
                    <Header/>

                    <div className="bg-white bg-opacity-50">
                        <div className="flex justify-center font-bold text-black pt-32 pb-20 text-xl md:text-2xl lg:text-4xl font-bold text-center md:text-left">
                            Nous sommes impatients de partager ce moment avec vous!
                        </div>
                        <div className="min-w-screen">
                            <PlanningContent/>
                        </div>   
                    </div> 
                </div>
            </div>
        </Layout>
      </>
    )
  }
