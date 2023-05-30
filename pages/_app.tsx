import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/home.css'
import '../styles/services.css'
import '../styles/location.css'
import '../styles/footer.css'
import 'bootstrap/dist/css/bootstrap.css';
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import {Montserrat, PT_Sans} from '@next/font/google'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also load CSS styles through a link in your HTML


const ptSans = PT_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
})

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
})
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap');
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, [])
  
  return (
    <div className={`${ptSans.className}`}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
