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
        <div >
          <div className="splash position-relative">
            <Image src='images/mechanic_car_dark.jpg' fill alt='mechanic working on a car' />
          </div>

          <div className="buffer"></div>

          <div className="map-container w-75 mx-auto">
            <Map />
          </div>
        </div>
        
        <div className="buffer"></div>
      </main>
    </>
  )
}