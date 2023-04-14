import InfoUtilesContent from '../components/infoutiles-content'
import Header from '../components/header'
import Layout from '../components/layout'
import Head from 'next/head'

export default function PlanningPage () {
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
                        <InfoUtilesContent/>
                    </div>   
                </div>
            </div>
        </Layout>
      </>
    )
  }
