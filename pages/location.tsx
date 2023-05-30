import Map from "./map"
import Head from 'next/head'
import Image from "next/image"

export default function Location() {
  return (
    <>
      <Head>
        <title>Location - Service Now Auto Repair</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="location">
        <div className="text-white text-center fs-1 px-3 pt-5 fw-bold">
          Location
        </div>
        <div className="row m-0">
          <div className="col-12 col-xl-2 mx-auto row justify-content-center h-fit flex-wrap pt-4 ps-5" data-aos="fade-right">
            <div className="col-12 col-md-4 col-xl-12 d-flex pt-5">
              <div className="flex-shrink-1">
                <Image src='/images/location_icon.svg' className="image-icon  d-block mx-auto" height={50} width={50} alt="clock icon" />
              </div>
              <div className="d-flex flex-column ps-3">
                <div className="col fw-bold fs-4 text-light">
                  Address
                </div>
                <div className="col letter-spacing-lg lh-sm text-nowrap text-light">
                  8206 NE 219th St<br />
                  Battle Ground, WA 98604
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-xl-12 d-flex pt-5">
              <div className="flex-shrink-1">
                <Image src='/images/clock_icon.svg' className="image-icon  d-block mx-auto" height={50} width={50} alt="clock icon" />
              </div>
              <div className="d-flex flex-column ps-3">
                <div className="col fw-bold fs-4 text-light">
                  Hours
                </div>
                <div className="col letter-spacing-lg lh-sm text-nowrap text-light">
                  Mon - Fri: 8:00 AM - 5:00 PM<br />
                  Sat: By appointment only
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-auto pt-4" data-aos="fade-left">
            <div className="map-container mx-auto">
              <Map />
            </div>
          </div>
        </div>
        <div className="buffer"></div>
      </main>
    </>
  )
}