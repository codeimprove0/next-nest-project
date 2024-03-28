import type { NextPage } from 'next' 
import styles from '../styles/Home.module.css'
import Financier from '../component/Financier'
import authenticate from "./auth"

const Home: NextPage = () => {
  return (
    <div className={styles.container}> 
      <Financier/>
    </div>
  )
}

export default authenticate(Home)
