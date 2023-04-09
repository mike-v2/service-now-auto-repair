import Head from 'next/head'
import { Inter } from '@next/font/google'
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import getConfig from 'next/config';
import ReviewItem from './review-item';
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
      logoPath: `${basePath}/images/google_logo_large.svg`,
      displayName: 'Google',
      url: 'https://www.google.com/search?&q=service+now+auto+repair+battle+ground+wa#lrd=0x5495ae55a4a6ea9b:0xc6fe494b2f79e572,1,,,,',
    },
    yelp: {
      logoPath: `${basePath}/images/yelp_logo_large.svg`,
      displayName: 'Yelp',
      url: 'https://www.yelp.com/biz/service-now-auto-repair-battleground',
    },
    facebook: {
      logoPath: `${basePath}/images/facebook_logo_large.svg`,
      displayName: 'Facebook',
      url: 'https://www.facebook.com/ServiceNowAutoRepair/reviews',
      rating: 5,
      numReviews: 39,
    }
  }

  async function getPlaceDetails() {
    const placeID = "ChIJm-qmpFWulVQRcuV5L0tJ_sY";

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
        const placeDetails = await getPlaceDetails();
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
        console.log(response.data);
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
      <main className='home'>
        <section className='splash-section'>
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
        </section>

        <div className="buffer"></div>

        <div className="slide-in-left slide-body ms-auto w-100"></div>

        <section className="card-section mx-auto">
          <p className='card-section-header text-light'>We service any make and model.<br/>There's no project that's too big or too small for us.</p>
          <div className="row g-5 mx-auto justify-content-center">
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
        </section>

        
        <section className="review-sectioncontainer-fluid">
          <div className="row">
            <div className="review-image-parent col-12 col-lg-6">
              <Image className='review-image' src={`${basePath}/images/service_now_1.jpg`} fill alt="mechanic in an ice cream truck" />
            </div>
            <div className="review-item-parent col-12 col-lg-6 text-light">
              <div className="row review-title">
                <h1 className="highlighted-text col-6 display-1 text-center fw-bold my-auto text-decoration-underline"><em>15+ years</em></h1>
                <h4 className="col-6 text-center my-auto">as a community-trusted small business</h4>
              </div>
              {<ReviewItem logoPath={reviewInfo.google.logoPath} displayName={reviewInfo.google.displayName} url={reviewInfo.google.url} rating={googleReviewData.rating} numReviews={googleReviewData.review_count} />}
              
              <ReviewItem logoPath={reviewInfo.yelp.logoPath} displayName={reviewInfo.yelp.displayName} url={reviewInfo.yelp.url} rating={yelpReviewData.rating} numReviews={yelpReviewData.review_count} />
              <ReviewItem logoPath={reviewInfo.facebook.logoPath} displayName={reviewInfo.facebook.displayName} url={reviewInfo.facebook.url} rating={reviewInfo.facebook.rating} numReviews={reviewInfo.facebook.numReviews} />
            </div>
          </div>
        </section>


        <section className='quote-section w-75 mx-auto mt-5'>
          <div className="p-4">
            <figure className='p-5 m-0'>
              <blockquote className="blockquote text-light">
                <p>Dave is the very best! We took our Honda Fit in to have the air conditioner fixed in preparation for a road trip. Dave not only worked on the air conditioner but, hearing that we had a trip coming up, took care to check the pressure of the spare tire, make sure that we had a tire iron and jack with it, clean the headlights, and more. He provided excellent and very careful service at an excellent price, as always!</p>
              </blockquote>
              <figcaption className="blockquote-footer text-light pt-4 text-end me-5 mb-0">
                Mary Wasnock
              </figcaption>
            </figure>
          </div>
        </section>

        <div className="buffer"></div>

      </main>
    </>
  )
}
