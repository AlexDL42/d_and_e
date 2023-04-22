import RsvpForm from '../components/rsvp-form'
import Header from '../components/header'
import Layout from '../components/layout'
import Head from 'next/head'


export default function RsvpPage () {
    return (
      <>
        <Layout>
            <Head>
                <title>RSVP Mariage de Delphine & Etienne</title>
            </Head>
            <div className="page-frame">
                <div className="page-bg bg-rsvpCover text-white">
                    <Header/>
                    <div className="page-cover-buffer"/>
                    <div id="anchor_one" />
                    <div className="page-content-bg p-20">
                        <RsvpForm/>
                    </div>   
                </div>
            </div>
        </Layout>
      </>
    )
  }


