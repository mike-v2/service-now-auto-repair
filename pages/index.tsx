import Head from 'next/head'
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { LoadGoogleMapsAPI } from '../utils/loadGoogleMapsAPI';
import Link from 'next/link';

const cardInfo = [
  { 
    imagePath: '/images/car_repair_mechanical.jpg',
    title: 'Mechanical Repairs', 
    text: "At Service Now Auto Repair, we're experts in fixing all types of mechanical issues. From engine trouble to transmission problems, our skilled technicians can diagnose and repair any issue quickly and affordably. Trust us to get your car back on the road in top condition." 
  },
  { 
    imagePath: '/images/car_repair_electrical.jpg',
    title: 'Electrical Repairs', 
    text: "If your car is experiencing electrical problems, don't let it leave you stranded. Our team of experienced technicians can troubleshoot and repair any issue, from faulty wiring to malfunctioning alternators. We use the latest diagnostic tools and techniques to get to the root of the problem and fix it right the first time." 
  },
  { 
    imagePath: '/images/car_repair_maintenance.jpg',
    title: "Regular Maintenance", 
    text: "Preventative maintenance is the key to keeping your car running smoothly and avoiding costly repairs down the line. At our auto repair shop, we offer a full range of maintenance services, from oil changes to tire rotations to brake inspections. Trust us to keep your car in top condition and catch any potential problems before they become major headaches." 
  }
]

export default function Home() {
  const [reviewData, setReviewData] = useState([
    {
      name: 'Google',
      logoPath: `/images/google_logo_large.svg`,
      url: 'https://www.google.com/search?&q=service+now+auto+repair+battle+ground+wa#lrd=0x5495ae55a4a6ea9b:0xc6fe494b2f79e572,1,,,,',
      rating: 0,
      numReviews: 0,
    },
    {
      name: 'Yelp',
      logoPath: `/images/yelp_logo_large.svg`,
      url: 'https://www.yelp.com/biz/service-now-auto-repair-battleground',
      rating: 0,
      numReviews: 0,
    },
    {
      name: 'Facebook',
      logoPath: `/images/facebook_logo_large.svg`,
      url: 'https://www.facebook.com/ServiceNowAutoRepair/reviews',
      rating: 5,
      numReviews: 39,
    }
  ]);

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
    fetchGoogleData();
    fetchYelpScore();
  }, [])

  const fetchGoogleData = async () => {
    try {
      const placeDetails = await getPlaceDetails();
      if (!placeDetails) return;
      //console.log(placeDetails);

      setReviewData(prevState => {
        const newState = [...prevState];
        const index = newState.findIndex(x => x.name === 'Google');

        if (index > -1) {
          newState[index].rating = placeDetails.rating as number;
          newState[index].numReviews = placeDetails.user_ratings_total as number;
        }

        return newState;
      });
    } catch (error) {
      console.error('Error fetching place details:', error);
    }
  };

  async function fetchYelpScore() {
    try {
      const response = await fetch('/api/yelp')
      const data = await response.json();

      if (data) {
        setReviewData(prevState => {
          const newState = [...prevState];
          const index = newState.findIndex(x => x.name === 'Yelp');

          if (index > -1) {
            newState[index].rating = data.rating as number;
            newState[index].numReviews = data.review_count as number;
          }

          return newState;
        });
      }
    } catch (error) {
      console.error('Error fetching review score:', error);
      throw error;
    }
  }

  function getYelpStarsImage(rating: number) {
    const imgSrcBase = '/images/yelp_stars/'
    const imgSrcEnd = rating >= 4.75 ?
      'stars_regular_5.png' :
      rating >= 4.25 ?
        'stars_regular_4_half.png' :
        rating >= 3.75 ?
          'stars_regular_4.png' :
          rating >= 3.25 ?
            'stars_regular_3_half.png' :
            rating >= 2.75 ?
              'stars_regular_3.png' :
              rating >= 2.25 ?
                'stars_regular_2_half.png' :
                rating >= 1.75 ?
                  'stars_regular_2.png' :
                  rating >= 1.25 ?
                    'stars_regular_1_half.png' :
                    rating >= .75 ?
                      'stars_regular_1.png' :
                      'stars_regular_0.png';

    return (
      <Image src={imgSrcBase + imgSrcEnd} className='img-fluid' width={150} height={30} alt='yelp stars' />
    )
  }

  function getNonYelpStarsImage(rating: number) {
    const roundedRating = Math.round(rating);
    const stars = [...Array(roundedRating)].map((_, i) =>
      <Image
        key={i}
        src={`/images/gold_star.svg`}
        width={30}
        height={30}
        alt="gold star"
      />
    );

    return (
      <div>
        {stars}
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Service Now Auto Repair</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={`/images/favicon/favicon.svg`} />
        <link rel="icon" type="image/png" href={`/images/favicon/favicon.png`} />
      </Head>
      <main className='home'>
        <section className='splash-section '>
          <div className='splash-image-container position-absolute w-100 h-100'>
            <Image src='/images/storefront.jpg' className='splash-image  w-100 h-100' width={2048} height={810} alt='photo of storefront' />
          </div>
          <div className='dave-image-container position-absolute end-0 h-100 ms-auto' data-aos="fade-left">
            <Image src='/images/dave.png' className='dave-image' fill alt='dave' />
          </div>
          <div className="splash-text-top container-fluid fw-bold">
            <div className="row" data-aos="fade-down">
              <div className="col-2 d-flex justify-content-end p-0">
                <Image src='/images/engine_light_orange.svg' width={150} height={150} alt='engine light icon'/>
              </div>
              <div className="col-10 text d-flex flex-wrap">
                <span>
                  {`Service Now `}
                </span>
                <span>
                  Auto Repair
                </span>
              </div>
            </div>
          </div>
          <div className="splash-text-bottom" data-aos="fade-up">
            <span className='text'>Quick</span><span>. </span>
            <span className='text'>Affordable</span><span>. </span>
            <span className='text'>Reliable</span><span>.</span>
          </div>
        </section>
        <div className="buffer"></div>
        <div className="slide-in-left slide-body ms-auto w-100"></div>
        <section className="card-section">
          <p className='card-section-header text-light'>We service any make and model.<br/>There's no project that's too big or too small for us.</p>
          <div className="row gy-5 mx-auto justify-content-center w-100">
            {cardInfo && cardInfo.map((info) => {
              return (
                <div className="col-12 col-md-5 col-lg-3 d-flex p-0 mx-auto" key={info.title}>
                  <div className="card" data-aos="fade-up-right" >
                    <Image className="card-img-top" src={info.imagePath} width={200} height={200} alt="Engine" />
                    <div className="card-body text-center bg-card-blue d-flex flex-column">
                      <h4 className="card-title">{info.title}</h4>
                      <p className="card-text">{info.text}</p>
                      <Link href="/services" className="card-btn btn btn-primary mt-auto w-50 mx-auto">Learn More</Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
        <section className="review-section container-fluid">
          <div className="row">
            <div className="review-image-parent col-12 col-lg-6" data-aos="fade-right">
              <Image className='review-image' src={`/images/service_now_1.jpg`} fill alt="mechanic in an ice cream truck" />
            </div>
            <div className="col-12 col-md-10 col-lg-6 h-fit text-light mx-auto">
              <div className="row review-title px-2 py-3">
                <h1 className="highlighted-text col-6 display-1 text-center fw-bold my-auto text-decoration-underline"><em>15+ years</em></h1>
                <h4 className="col-6 text-center my-auto" >as a community-trusted small business</h4>
              </div>
              {reviewData && reviewData.map((review) => {
                return (
                  <div className="row review-item py-4 my-auto mx-auto justify-content-between" data-aos="fade-left" key={review.name}>
                    <div className="col-auto my-auto p-0">
                      <Link href={review.url}>
                        <Image src={review.logoPath} width={130} height={40} alt={`${review.name} logo`} className='d-block mx-auto' />
                      </Link>
                    </div>
                    <div className="col-auto shrink-1 fs-2 fw-bold text-center p-0 m-0">
                      {review.rating}
                    </div>
                    <div className="col-auto my-auto d-flex justify-content-center">
                      {review.name === 'Yelp' && getYelpStarsImage(review.rating)}
                      {review.name !== 'Yelp' && getNonYelpStarsImage(review.rating)}
                    </div>
                    <div className="col-auto my-auto ">
                      <Link href={review.url} className='link underline text-light'>
                        {`(${review.numReviews} reviews)`}
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <div className="slide-in-left slide-body ms-auto w-100"></div>
        <div className="buffer"></div>

        <section className='quote-section '>
          <div className='row'>
            <div className="figure-container col-12 col-md-10 col-lg-6 mx-auto p-3 " data-aos="fade-up-left">
              <figure className='p-3 m-0'>
                <blockquote className="blockquote text-light">
                  <div className='position-relative'>
                    <span className='quote-symbol position-absolute'>❝</span>
                  </div>
                  <p className='fs-6 p-3 pt-5'>Dave is the very best! We took our Honda Fit in to have the air conditioner fixed in preparation for a road trip. Dave not only worked on the air conditioner but, hearing that we had a trip coming up, took care to check the pressure of the spare tire, make sure that we had a tire iron and jack with it, clean the headlights, and more. He provided excellent and very careful service at an excellent price, as always!</p>
                </blockquote>
                <figcaption className="blockquote-footer text-light pt-4 text-end me-5 mb-0">
                  <Link href='https://g.co/kgs/vGTJGw' className='link underline'>Mary Wasnock</Link>
                </figcaption>
              </figure>
            </div>
          </div>

        </section>

        <div className="buffer"></div>
      </main>
    </>
  )
}
