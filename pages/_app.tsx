import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/home.css'
import '../styles/location.css'
import '../styles/footer.css'
import 'bootstrap/dist/css/bootstrap.css';
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap');
  }, [])
  
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
