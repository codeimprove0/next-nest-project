import type { NextPage } from 'next' 
import styles from '../styles/Home.module.css'
import Dashboard from '../component/Dashboard'
import authenticate from "./auth"

const Home: NextPage = () => {
  return (
    <div className={styles.container}> 
      <Dashboard/>
    </div>
  )
}

export default authenticate(Home)