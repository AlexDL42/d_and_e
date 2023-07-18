import WeddingListContent from '../components/wedding-list-content'
import Header from '../components/header'
import Layout from '../components/layout'
import Head from 'next/head'


export default function WeddingListPage () {
    return (
      <>
        <Layout>
            <Head>
                <title>Participer Au Voyage de Noces</title>
            </Head>
            <div className="page-frame">
                <div className="page-bg bg-listCover text-white">
                    <Header/>
                    <div className="page-cover-buffer"/>
                    <div id="anchor_one" />
                    <div className="page-content-bg py-20">
                        {/* <div className="page-content-title">
                            Si vous souhaitez participer ...
                        </div> */}
                        <WeddingListContent/>
                    </div>   
                </div>
            </div>
        </Layout>
      </>
    )
  }


