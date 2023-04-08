import Map from "./map"
import Head from 'next/head'

export default function Location() {
  return (
    <>
      <Head>
        <title>Location - Service Now Auto Repair</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className="location-body">
            <div className="h-25">

            </div>
            <div className="h-75 w-75 mx-auto">
              <Map />
            </div>
          </div>
        
        <div className="buffer"></div>
      </main>
    </>
  )
}