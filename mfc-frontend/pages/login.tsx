import type { NextPage } from 'next' 
import styles from '../styles/Home.module.css'
import Login from '../component/auth/Login'
import authenticate from "./auth"

const Home: NextPage = () => {
  return (
    <div className={styles.container}> 
      <Login/>
    </div>
  )
}

export default Home
