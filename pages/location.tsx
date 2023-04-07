import Map from "./map"
import Head from 'next/head'
import Icon from "@mdi/react"
import { mdiClockOutline, mdiMapMarker, mdiPhone } from "@mdi/js"

export default function Location() {
  return (
    <>
      <Head>
        <title>Location - Service Now Auto Repair</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="location-body">
        <div className="row h-100">
          <div className="col-12 col-lg-4">

            <span className="row d-inline-flex flex-nowrap p-3">
              <div className='col-auto pe-0'>
                <span className="center-helper"></span>
                <Icon path={mdiMapMarker} size={2.5} color='white' />
              </div>
              <div className="d-flex flex-column col-auto">
                <div className="text-light fw-bold fs-4">Address</div>
                <div className='address text-light fs-6 pe-4'>
                  8206 NE 219th St<br />
                  Battle Ground, WA 98604
                </div>
              </div>
            </span>

            <span className="row d-inline-flex flex-nowrap p-3">
              <div className="col-auto pe-0">
                <Icon path={mdiPhone} size={2.5} color='white' />
              </div>
              <div className="d-flex flex-column col-auto">
                <div className="text-light fw-bold fs-4">Phone Number</div>
                <div className="phone-number my-auto text-light fs-6">
                  (360) 882-2817
                </div>
              </div>
            </span>

            <span className="row d-inline-flex flex-nowrap p-3">
              <div className="col-auto pe-0">
                <Icon path={mdiClockOutline} size={2.5} color='white' />
              </div>
              <div className="d-flex flex-column col-auto">
                <div className="text-light fw-bold fs-4">Opening Hours</div>
                <div className="phone-number my-auto text-light fs-6">
                  Mon - Fri: 8:00 AM - 5:00 PM<br/>
                  Sat: By appointment only
                </div>
              </div>
            </span>
            
          </div>
          <div className="col-12 col-lg-8">
            <Map />
          </div>
        </div>
      </main>
    </>
  )
}