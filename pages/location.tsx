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
        <div className="text-white text-center fs-1 px-3 pt-5">
          Location
        </div>
        <div className="row ">
          <div className="col-12 col-xl-4 ">
            <div className="row flex-wrap mx-auto w-75 pt-4">
              <span className="pt-3">
                <div className="d-flex ">
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
              </span>
              <span className="pt-3">
                <div className="d-flex ">
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
              </span>
            </div>
          </div>
          <div className="col-12 col-xl-8 map-container mw-100 mx-auto pt-4">
            <Map />
          </div>
        </div>
        <div className="buffer"></div>
      </main>
    </>
  )
}