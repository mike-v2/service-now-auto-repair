import Link from 'next/link';
import Image from 'next/image';

const phoneNumber = "(360) 882-2817";

export default function Navbar() {
  return (
    <>
      <div className='d-flex flex-column sticky-top'>
        <div className="header-top container-fluid m-0 ">
          <div className="row flex-nowrap justify-content-center">
            <Link className="col-auto d-flex " href="/location">
              <div className='pe-2'>
                <span className="center-helper"></span>
                <Image src='/images/location_icon.svg' className='icon-image' width={30} height={30} alt="location icon" />
              </div>
              <div className='letter-spacing-lg col-auto text-light my-auto fw-bold link-style'>
                8206 NE 219th St<br />
                Battle Ground, WA 98604
              </div>
            </Link>
            <a href={`tel:${phoneNumber}`} className="col-auto d-flex">
              <div className="pe-2">
                <span className='center-helper'></span>
                <Image src='/images/phone_icon.svg' className='icon-image' width={30} height={30} alt="phone icon" />
              </div>
              <div className="letter-spacing-xl col-auto my-auto text-light fw-bold">
                {phoneNumber}
              </div>
            </a>

          </div>
        </div>
        <nav className="navbar navbar-expand-md navbar-dark d-flex h-100">
          <div className="container-fluid">
            <Link className="logo navbar-brand row flex-nowrap  justify-content-center lh-1" href="/">
              <span className="text text-col col text-end px-1">
                SERVICE NOW
              </span>
              <span className="col p-0">
                <Image src='/images/engine_light_orange.svg' className='' width={50} height={50} alt='engine light icon' />
              </span>
              <span className="text-col col px-1">
                <div className='text'>AUTO REPAIR</div>
                <div className='text-dave text-end text-light'>Dave Freitas</div>
              </span>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end pt-3" id="navbarSupportedContent">
              <ul className="navbar-nav px-3 text-end">
                <li className="nav-item px-1 px-lg-2 ms-auto">
                  <Link href='/' className="nav-link fw-bold">
                    <span className='py-2' data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                      Home
                    </span>
                  </Link>
                </li>
                <li className="nav-item px-1 px-lg-2 ms-auto">
                  <Link href='/services' className='nav-link fw-bold' >
                    <span className='py-2' data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                      Services
                    </span>
                  </Link>
                </li>
                <li className="nav-item px-1 px-lg-2 ms-auto">
                  <Link href='/location' className='nav-link fw-bold'>
                    <span className='py-2' data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                      Location
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="slide-in-left slide-body-navbar "></div>
      </div>
    </>
  );
};
