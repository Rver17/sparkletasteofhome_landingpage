import Layout from './layout'
import Head from 'next/head'
import Container from './container'
import Intro from './intro'
import SparkleFeatures from './sparklefeatures'

export default function Landing({ preview }) {
  return (
    <>
      <div className='bg-[#0286ff]'>
      <Layout preview={preview}>
        <Head>
          <title>Sparkle: Taste of Home</title>
        </Head>
        <Intro />
      </Layout>
      </div>
    </>
  )
}
