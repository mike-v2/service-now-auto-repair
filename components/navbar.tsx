import Link from 'next/link';
import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import Icon from '@mdi/react';
import { mdiPhone, mdiMapMarker } from '@mdi/js';

const Navbar = () => {
  const bufferRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const basePath='';

  useEffect(() => {
    updateBuffer();
  }, [headerRef.current])

  function updateBuffer() {
    if (headerRef.current && bufferRef.current) {
      bufferRef.current.style.height = headerRef.current.offsetHeight.toString() + "px";
    }
  }

  return (
    <div>
      <div ref={bufferRef}></div>
      <div ref={headerRef} className='fixed-top'>
        <div className="container-fluid m-0 header-1">
          <div className="row flex-nowrap justify-content-end">
            <div className='col-auto pe-0'>
              <span className="center-helper"></span>
              <Icon path={mdiMapMarker} size={1.5} color='white' />
            </div>
            <div className='address col-auto text-light my-auto fw-bold'>
              8206 NE 219th St<br />
              Battle Ground, WA 98604
            </div>
            <div className="col-auto pe-0">
              <span className='center-helper'></span>
              <Icon path={mdiPhone} size={1.2} color='white' />
            </div>
            <div className="phone-number col-auto my-auto text-light fw-bold">
              (360) 882-2817
            </div>
          </div>
        </div>

        <nav className="navbar navbar-expand-md navbar-dark">
          <div className="container-fluid">
            <Link className="logo navbar-brand row flex-nowrap lh-1" href="#">
              <span className="text text-col col text-end">
                SERVICE NOW
              </span>
              <span className="col p-0">
                <Image src={`${basePath}/images/engine_light_orange.svg`} width={50} height={50} alt='engine light icon' />
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
                  <Link href='/' className="nav-link fw-bold" aria-current>Home</Link>
                </li>
                <li className="nav-item">
                  <Link href='/services' className='nav-link fw-bold'>Services</Link>
                </li>
                <li className="nav-item">
                  <Link href='/location' className='nav-link fw-bold'>Location</Link>
                </li>
                <li className="nav-item">
                  <Link href='#' className='nav-link fw-bold'>Contact Us</Link>
                </li>
              </ul>
            </div>

          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
