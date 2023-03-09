import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image';
import Icon from '@mdi/react';
import { mdiEngineOutline, mdiPhone, mdiMapMarker } from '@mdi/js';
import storefrontPic from '../public/images/storefront.jpg';
import { useEffect, useRef } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const bufferRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    updateBuffer();
  }, [headerRef.current])

  function updateBuffer() {
    if (headerRef.current && bufferRef.current) {
      console.log("header height = " + headerRef.current.offsetHeight);
      bufferRef.current.style.height = headerRef.current.offsetHeight.toString() + "px";
    }
  }

  return (
    <>
      <Head>
        <title>Service Now Auto Repair</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div ref={bufferRef}></div>
        <div ref={headerRef} className='fixed-top'>
          <div className="container-lg m-0">
            <div className="row">
              <div className='col-auto pe-0'>
                <span className="center-helper"></span>
                <Icon path={mdiMapMarker} size={1.5} />
              </div>
              <div className='address col-auto'>
                8206 NE 219th St<br />
                Battle Ground, WA 98604
              </div>
              <div className="col-auto pe-0">
                <span className='center-helper'></span>
                <Icon path={mdiPhone} size={1.5} />
              </div>
              <div className="phone-number col-auto my-auto">
                  (360) 882-2817
              </div>
            </div>
          </div>
         
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container-fluid">
              <Icon path={mdiEngineOutline} size={1} />
              <a className="navbar-brand" href="#">Service Now Auto Repair</a>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav mb-lg-0">
                  <li className="nav-item">
                    <Link href='#' className="nav-link active" aria-current>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link href='#' className='nav-link'>Services</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        
        <div className='splash'>
          <Image src={storefrontPic} alt="image of storefront" className='img-fluid'/>
        </div>
      </main>
    </>
  )
}
