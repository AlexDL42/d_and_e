import RsvpForm from '../components/rsvp-form'
import Header from '../components/header'
import Layout from '../components/layout'
import Head from 'next/head'


export default function ListePage () {
    return (
      <>
        <Layout>
            <Head>
                <title>Liste de Mariage de Delphine & Etienne</title>
            </Head>
            <div className="page-frame">
                <div className="page-bg bg-listCover text-white">
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


