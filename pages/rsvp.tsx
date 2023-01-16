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
            <div className="page-frame">
                <div className="page-bg bg-rsvpCover text-white">
                    <Header/>
                    <div className="page-cover-buffer"/>
                    <div className="page-content-bg p-20">
                        {/* <div className="page-content-title">
                            Nous sommes impatients de partager ce moment avec vous!
                        </div> */}
                        <RsvpForm/>
                    </div>   
                </div>
            </div>
        </Layout>
      </>
    )
  }


