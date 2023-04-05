import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import Navbar from '../components/navbar';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap');
  }, [])
  
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}
