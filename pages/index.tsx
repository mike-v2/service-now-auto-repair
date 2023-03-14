import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image';
import Icon from '@mdi/react';
import { mdiPhone, mdiMapMarker } from '@mdi/js';
import { useEffect, useRef } from 'react';

export default function Home() {
  const bufferRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    updateBuffer();
  }, [headerRef.current])

  function updateBuffer() {
    if (headerRef.current && bufferRef.current) {
      bufferRef.current.style.height = headerRef.current.offsetHeight.toString() + "px";
    }
  }

  return (
    <>
      <Head>
        <title>Service Now Auto Repair</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon/favicon.svg" />
        <link rel="icon" type="image/png" href="/images/favicon/favicon.png" />
      </Head>
      <main>
        <div ref={bufferRef}></div>
        <div ref={headerRef} className='fixed-top'>
          <div className="container-fluid m-0 header-1">
            <div className="row flex-nowrap">
              <div className='col-auto pe-0'>
                <span className="center-helper"></span>
                <Icon path={mdiMapMarker} size={1.5} color='white'/>
              </div>
              <div className='address col-auto text-light my-auto fw-bold'>
                8206 NE 219th St<br />
                Battle Ground, WA 98604
              </div>
              <div className="col-auto pe-0">
                <span className='center-helper'></span>
                <Icon path={mdiPhone} size={1.2} color='white'/>
              </div>
              <div className="phone-number col-auto my-auto text-light fw-bold">
                  (360) 882-2817
              </div>
            </div>
          </div>
         
          <nav className="navbar navbar-expand-sm navbar-dark">
            <div className="container-fluid">
              <Link className="logo navbar-brand row flex-nowrap lh-1" href="#">
                <span className="text text-col col text-end">
                  SERVICE NOW
                </span>
                <span className="col p-0">
                  <Image src='/images/engine_light_orange.svg' width={50} height={50} alt='engine light icon' className='' />
                </span>
                <span className="text-col col align-self-start">
                  <div className='text'>AUTO REPAIR</div>
                  <div className='text-dave text-end text-light '>Dave Freitas</div>
                </span>

              </Link>
              

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href='#' className="nav-link active fw-bold" aria-current>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link href='#' className='nav-link fw-bold'>Services</Link>
                  </li>
                  <li className="nav-item">
                    <Link href='#' className='nav-link fw-bold'>Location</Link>
                  </li>
                  <li className="nav-item">
                    <Link href='#' className='nav-link fw-bold'>Contact Us</Link>
                  </li>
                </ul>
              </div>
              
            </div>
          </nav>
        </div>
        
        <div className='splash'>
          <div className="splash-text-top container-fluid fw-bolder">
            <div className="row">
              <div className="col-2 d-flex justify-content-end">
                <Image src='/images/engine_light_orange.svg' width={150} height={150} alt='engine light icon'/>
              </div>
              <div className="col-10">
                Service Now Auto Repair
              </div>
            </div>
            
            
          </div>
          
          <div className="splash-text-bottom">
            <span className='text'>Quick</span><span>. </span>
            <span className='text'>Affordable</span><span>. </span>
            <span className='text'>Reliable</span><span>.</span>
          </div>
        </div>
      </main>
    </>
  )
}
