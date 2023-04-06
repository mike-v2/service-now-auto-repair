import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import getConfig from 'next/config';
import ReviewItem from './review-item';
import Map from './map';
import { Loader } from '@googlemaps/js-api-loader';
import axios from 'axios';
import { LoadGoogleMapsAPI } from './utils/loadGoogleMapsAPI';
import HomeCard from '../components/homeCard';

const cardInfo = {
  mechanical: { title: 'Mechanical Repairs', text: "At Service Now Auto Repair, we're experts in fixing all types of mechanical issues. From engine trouble to transmission problems, our skilled technicians can diagnose and repair any issue quickly and affordably. Trust us to get your car back on the road in top condition." },
  electrical: { title: 'Electrical Repairs', text: "If your car is experiencing electrical problems, don't let it leave you stranded. Our team of experienced technicians can troubleshoot and repair any issue, from faulty wiring to malfunctioning alternators. We use the latest diagnostic tools and techniques to get to the root of the problem and fix it right the first time." },
  maintenance: { title: "Regular Maintenance", text: "Preventative maintenance is the key to keeping your car running smoothly and avoiding costly repairs down the line. At our auto repair shop, we offer a full range of maintenance services, from oil changes to tire rotations to brake inspections. Trust us to keep your car in top condition and catch any potential problems before they become major headaches." }
}

interface ReviewData {
  rating: number,
  review_count: number
}

export default function Home() {
  const { publicRuntimeConfig } = getConfig();
  const basePath = publicRuntimeConfig.basePath;
  const [googleReviewData, setGoogleReviewData] = useState<ReviewData>({rating: 0, review_count: 0});
  const [yelpReviewData, setYelpReviewData] = useState<ReviewData>({ rating: 0, review_count: 0 });
  const [facebookeReviewScore, setFacebookReviewScore] = useState<ReviewData>({ rating: 0, review_count: 0 });

  console.log("Base path = " + basePath);

  const reviewInfo = {
    google: {
      logoPath: `${basePath}/images/google_logo.svg`,
      displayName: 'Google',
    },
    yelp: {
      logoPath: `${basePath}/images/yelp_logo.svg`,
      displayName: 'Yelp',
    },
    facebook: {
      logoPath: `${basePath}/images/facebook_logo.svg`,
      displayName: 'Facebook',
      rating: 5,
      numReviews: 39,
    }
  }

  

  async function getPlaceDetails() {
    const placeID = "ChIJm-qmpFWulVQRcuV5L0tJ_sY"; // "ChIJkYbgmm6zlVQRzBHMxuWNU98";

    const google = await LoadGoogleMapsAPI();
    if (!google) return;
    
    const service = new google.maps.places.PlacesService(document.createElement('div'));
    const request = {
      placeId: placeID,
      fields: ['rating', 'user_ratings_total'],
    };
    return new Promise<google.maps.places.PlaceResult>((resolve, reject) => {
      service.getDetails(request, (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          resolve(place as google.maps.places.PlaceResult);
        } else {
          reject(status);
        }
      });
    });
  }

  useEffect(() => {
    console.log("node env = " + process.env.NODE_ENV);

    const fetchGoogleData = async () => {
      try {
        const placeDetails: google.maps.places.PlaceResult = await getPlaceDetails();
        if (!placeDetails) return;

        console.log(placeDetails);
        setGoogleReviewData({rating: placeDetails.rating as number, review_count: placeDetails.user_ratings_total as number});
      } catch (error) {
        console.error('Error fetching place details:', error);
      }
    };

    async function fetchYelpScore() {
      try {
        const response = await axios.get('/api/yelp')
        const relevantData = { rating: response.data.rating, review_count: response.data.review_count }
        setYelpReviewData(relevantData);
      } catch (error) {
        console.error('Error fetching review score:', error);
        throw error;
      }
    }

    fetchGoogleData();
    fetchYelpScore();
  }, [])
  
  return (
    <>
      <Head>
        <title>Service Now Auto Repair</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={`${basePath}/images/favicon/favicon.svg`} />
        <link rel="icon" type="image/png" href={`${basePath}/images/favicon/favicon.png`} />
      </Head>
      <main>
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
              <HomeCard imageSrc={`/images/car_repair_mechanical.jpg`} title={cardInfo.mechanical.title} body={cardInfo.mechanical.text} />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <HomeCard imageSrc={`/images/car_repair_electrical.jpg`} title={cardInfo.electrical.title} body={cardInfo.electrical.text} />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <HomeCard imageSrc={`/images/car_repair_maintenance.jpg`} title={cardInfo.maintenance.title} body={cardInfo.maintenance.text} />
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
              {googleReviewData && <ReviewItem logoPath={reviewInfo.google.logoPath} displayName={reviewInfo.google.displayName} rating={googleReviewData.rating} numReviews={googleReviewData.review_count} />}
              
              <ReviewItem logoPath={reviewInfo.yelp.logoPath} displayName={reviewInfo.yelp.displayName} rating={yelpReviewData.rating} numReviews={yelpReviewData.review_count} />
              <ReviewItem logoPath={reviewInfo.facebook.logoPath} displayName={reviewInfo.facebook.displayName} rating={reviewInfo.facebook.rating} numReviews={reviewInfo.facebook.numReviews} />
            </div>
          </div>
        </div>

      </main>
    </>
  )
}
