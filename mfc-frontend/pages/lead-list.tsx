import type { NextPage } from 'next'
import Head from 'next/head' 
import styles from '../styles/Home.module.css'
import LeadList from '../component/lead/LeadList'
import authenticate from "./auth"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lead List</title>
        <meta name="description" content="Insurance box app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <LeadList/>
    </div>
  )
}

export default authenticate(Home)
