import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image';
import Icon from '@mdi/react';
import { mdiPhone, mdiMapMarker } from '@mdi/js';
import { useEffect, useRef } from 'react';
import getConfig from 'next/config';
import ReviewItem from './review-item';

const cardInfo = {
  mechanical: { title: 'Mechanical Repairs', text: "At Service Now Auto Repair, we're experts in fixing all types of mechanical issues. From engine trouble to transmission problems, our skilled technicians can diagnose and repair any issue quickly and affordably. Trust us to get your car back on the road in top condition." },
  electrical: { title: 'Electrical Repairs', text: "If your car is experiencing electrical problems, don't let it leave you stranded. Our team of experienced technicians can troubleshoot and repair any issue, from faulty wiring to malfunctioning alternators. We use the latest diagnostic tools and techniques to get to the root of the problem and fix it right the first time." },
  maintenance: { title: "Regular Maintenance", text: "Preventative maintenance is the key to keeping your car running smoothly and avoiding costly repairs down the line. At our auto repair shop, we offer a full range of maintenance services, from oil changes to tire rotations to brake inspections. Trust us to keep your car in top condition and catch any potential problems before they become major headaches." }
}

const placeID = "ChIJkYbgmm6zlVQRzBHMxuWNU98";

export default function Home() {
  const { publicRuntimeConfig } = getConfig();
  const basePath = publicRuntimeConfig.basePath;
  const bufferRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  console.log("Base path = " + basePath);

  const reviewInfo = {
    google: {
      logoPath: `${basePath}/images/google_logo.svg`,
      displayName: 'Google',
      rating: '4.8',
      numReviews: 165,
    },
    yelp: {
      logoPath: `${basePath}/images/yelp_logo.svg`,
      displayName: 'Yelp',
      rating: '5',
      numReviews: 56
    },
    facebook: {
      logoPath: `${basePath}/images/facebook_logo.svg`,
      displayName: 'Facebook',
      rating: '5',
      numReviews: 39,
    }
  }

  useEffect(() => {
    console.log("API key = " + process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY);
    console.log("node env = " + process.env.NODE_ENV);

    fetch(`https://maps.googleapis.com/maps/api/place/details/json
      ?fields=name%2Crating%2Cformatted_phone_number
      &place_id=${placeID}
      &key=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY}`)
      .then(response => response.json())
      .then(data => {
        const { name, rating, user_ratings_total } = data.result;
        console.log(`${name}: ${rating} (${user_ratings_total} reviews)`);
      })
      .catch(error => console.error(error));
  }, [])

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
        <link rel="icon" href={`${basePath}/images/favicon/favicon.svg`} />
        <link rel="icon" type="image/png" href={`${basePath}/images/favicon/favicon.png`} />
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
                <Image src={`${basePath}/images/engine_light_orange.svg`} width={150} height={150} alt='engine light icon'/>
              </div>
              <div className="col-10 text">
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

        <div className="buffer"></div>

        <div className="card-section mx-auto pb-5">
          <p className='card-section-header'>We service any make and model.<br/>There's no project that's too big or too small for us.</p>
          <div className="row gx-5 mx-auto justify-content-center">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <Image className="card-img-top" src={`${basePath}/images/mechanical.jpg`} width={200} height={200} alt="Engine" />
                <div className="card-body text-center">
                  <h4 className="card-title">{cardInfo.mechanical.title}</h4>
                  <p className="card-text">{cardInfo.mechanical.text}</p>
                  <a href="#" className="card-btn btn btn-primary">Learn More</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <Image className="card-img-top" src={`${basePath}/images/mechanical.jpg`} width={200} height={200} alt="Title" />
                <div className="card-body text-center">
                  <h4 className="card-title">{cardInfo.electrical.title}</h4>
                  <p className="card-text">{cardInfo.electrical.text}</p>
                  <a href="#" className="card-btn btn btn-primary">Learn More</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <Image className="card-img-top" src={`${basePath}/images/mechanical.jpg`} width={200} height={200} alt="Title" />
                <div className="card-body text-center">
                  <h4 className="card-title">{cardInfo.maintenance.title}</h4>
                  <p className="card-text">{cardInfo.maintenance.text}</p>
                  <a href="#" className="card-btn btn btn-primary">Learn More</a>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <div className="buffer"></div>
        
        <div className="review-section py-5 container-fluid">
          <div className="row">
            <div className="col-12 col-lg-6 review-image-parent">
              <Image className='review-image' src={`${basePath}/images/service_now_1.jpg`} fill alt="mechanic in an ice cream truck" />
            </div>
            <div className="col-12 col-lg-6 review-item-parent">
              <div className="row review-title">
                <h1 className="col-4 display-1 text-center fw-bold my-auto pe-0">15+</h1>
                <h4 className="col-8 text-center my-auto ps-0">years as a community-trusted small business</h4>
              </div>
              <ReviewItem logoPath={reviewInfo.google.logoPath} displayName={reviewInfo.google.displayName} rating={reviewInfo.google.rating} numReviews={reviewInfo.google.numReviews} />
              <ReviewItem logoPath={reviewInfo.yelp.logoPath} displayName={reviewInfo.yelp.displayName} rating={reviewInfo.yelp.rating} numReviews={reviewInfo.yelp.numReviews} />
              <ReviewItem logoPath={reviewInfo.facebook.logoPath} displayName={reviewInfo.facebook.displayName} rating={reviewInfo.facebook.rating} numReviews={reviewInfo.facebook.numReviews} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
