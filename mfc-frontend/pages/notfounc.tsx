import type { NextPage } from 'next' 
import styles from '../styles/Home.module.css'
import PageNotFound from '../common/404Page'
import authenticate from "./auth"

const Home: NextPage = () => {
  return (
    <div className={styles.container}> 
      <PageNotFound/>
    </div>
  )
}

export default authenticate(Home)
