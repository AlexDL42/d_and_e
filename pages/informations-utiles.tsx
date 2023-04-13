import PlanningContent from '../components/planning-content'
import Header from '../components/header'
import Layout from '../components/layout'
import Head from 'next/head'



const mapsLinks = {
    'restaurants': 'https://i.ibb.co/ngTY1rW/formen-map-2.png',
    'main': 'https://i.ibb.co/gt7Cbsx/formen-map-0.png',
    'details': 'https://i.ibb.co/FXkFHT6/formen-map-1-w-legend.png'
}
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
                        <PlanningContent/>
                    </div>   
                </div>
            </div>
        </Layout>
      </>
    )
  }
