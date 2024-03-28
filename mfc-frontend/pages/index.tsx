import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Dashboard from '../component/Dashboard'
import Login from '../component/auth/Login'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Insurance BOX</title>
        <meta name="description" content="Insurance box app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <Login/>
    </div>
  )
}

export default Home
