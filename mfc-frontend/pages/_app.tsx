import '../styles/globals.css'
import '../styles/App.scss';
import Header from '../common/Header'
import type { AppProps } from 'next/app'

import { Provider } from 'react-redux'
import store from '../store/store'
import { useRouter } from 'next/router';
import { useEffect } from 'react';


function MyApp({ Component, pageProps }: AppProps) {  
  return <>
    <Provider store={store}>
    <Header />
    <Component {...pageProps} />
    </Provider>
  </>
}

export default MyApp
