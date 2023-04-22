import Header from '../components/header'
import Layout from '../components/layout'
import Head from 'next/head'
import InfosPratiquesContent from '../components/infos-pratiques-content'

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
                    <div id="anchor_one" />
                    <div className="page-content-bg">
                      <InfosPratiquesContent />
                      <div className=" banner-txt-title text-center my-5">
                        See you soon
                      </div>
                    </div>   
                </div>
            </div>
        </Layout>
      </>
    )
  }
