import MapsContent from '../components/maps-content'
import Header from '../components/header'
import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'

export default function Page () {
    return (
      <>
        <Layout>
            <Head>
                <title>Le programme</title>
            </Head>
            <div className="page-frame">
                <div className="page-bg bg-planningCover text-black">
                    <Header/>
                    <div className="page-cover-buffer"/>
                    <div className="page-content-bg">
                        <div className="page-content-title">
                            Nous sommes impatients de partager ce moment avec vous!
                        </div>


                        <Link href="/cartes">
                            Cartes
                        </Link>
                    </div>   
                </div>
            </div>
        </Layout>
      </>
    )
  }
