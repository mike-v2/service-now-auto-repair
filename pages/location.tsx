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
        <div className="row">
          <div className="col-12 col-lg-3">
            <div className="text-white text-center fs-1 px-3 pt-5">
              Location
            </div>
            <div className="text-white text-center px-3 pb-3">
              8206 NE 219th St, Battle Ground, WA 98604
            </div>
          </div>

          <div className="col-12 col-lg-9 map-container w-75 mx-auto">
            <Map />
          </div>
        </div>
        <div className="buffer"></div>
      </main>
    </>
  )
}