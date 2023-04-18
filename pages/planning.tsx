import PlanningContent from '../components/planning-content'
import Header from '../components/header'
import Layout from '../components/layout'
import Head from 'next/head'


export default function PlanningPage () {
    return (
      <>
        <Layout nocatchfoot={true}>
            <Head>
                <title>Le programme</title>
            </Head>
            <div className="page-frame">
                <div className="page-bg bg-planningCover text-black">
                    <Header/>
                    <div className="page-cover-buffer"/>
                    <div className="page-content-bg">
                        <PlanningContent/>

                        <div className="page-content-title">
                            With Love
                        </div>
                    </div>   
                </div>
            </div>
        </Layout>
      </>
    )
  }
