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
        <div className="row m-0 pt-3">
          <div className="col-12 col-xl-5 h-fit flex-wrap py-4" data-aos="fade-right">
            <div className="row mx-0">
              <div className="col-12 col-md-10 info-box row mx-auto justify-content-center">
                <div className="col-12 col-md-5 col-xl-9 d-flex py-4">
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
                <div className="col-12 col-md-5 col-xl-9 d-flex py-4">
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
            </div>
          </div>
          <div className="col-12 col-xl-7 pt-4" data-aos="fade-left">
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