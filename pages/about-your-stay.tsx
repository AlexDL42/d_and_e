import AboutYourStayContent from '../components/about-your-stay-content'

import Header from '../components/header'
import Layout from '../components/layout'
import Head from 'next/head'


export default function RsvpPage () {
    return (
      <>
        <Layout>
          <Head>
            <title>
              About Your Stay
            </title>
            {/* <meta property="og:image" content={post.ogImage.url} /> */}
          </Head>           

            <div>
      
              <div className="text-blue-900 bg-aysCoverOne bg-no-repeat bg-cover bg-center bg-fixed">
                <Header/>
                <div className="bg-white bg-opacity-50 min-w-screen">
                  <div className="flex justify-center font-bold text-blue-700 py-20 text-xl md:text-2xl lg:text-4xl font-bold text-center md:text-left">
                    Welcome to the last paradise of the Mediterranean
                  </div>
                  <AboutYourStayContent/>
                </div>
              </div>
              
              
            </div>
        </Layout>
      </>
    )
  }
