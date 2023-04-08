import Link from 'next/link';
import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import Icon from '@mdi/react';
import { mdiPhone, mdiMapMarker } from '@mdi/js';

const phoneNumber = "(360) 882-2817";

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
        <div className="container-fluid m-0 header-top">
          <div className="row flex-nowrap justify-content-center">

            <Link className="col-auto d-flex pe-4" href="/location">
              <div className='pe-2'>
                <span className="center-helper"></span>
                <Icon path={mdiMapMarker} size={1.5} color='white' />
              </div>
              <div className='address col-auto text-light my-auto fw-bold fs-6'>
                8206 NE 219th St<br />
                Battle Ground, WA 98604
              </div>
            </Link>

            <a href={`tel:${phoneNumber}`} className="col-auto d-flex ps-4">
              <div className="pe-2">
                <span className='center-helper'></span>
                <Icon path={mdiPhone} size={1.5} color='white' />
              </div>
              <div className="phone-number col-auto my-auto text-light fw-bold">
                {phoneNumber}
              </div>
            </a>

          </div>
        </div>

        <nav className="navbar navbar-expand-md navbar-dark">
          <div className="container-fluid">
            <Link className="logo navbar-brand row flex-nowrap lh-1" href="/">
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

            <div className="collapse navbar-collapse justify-content-end pt-3" id="navbarSupportedContent">
              <ul className="navbar-nav px-3 ">
                <li className="nav-item px-0 px-lg-2">
                  <Link href='/' className="nav-link fw-bold" aria-current>Home</Link>
                </li>
                <li className="nav-item px-0 px-lg-2">
                  <Link href='/services' className='nav-link fw-bold'>Services</Link>
                </li>
                <li className="nav-item px-0 px-lg-2">
                  <Link href='/location' className='nav-link fw-bold'>Location</Link>
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
