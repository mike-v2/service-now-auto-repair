import Head from "next/head"
import Image from "next/image"
import ServicesCard from "../components/servicesCard"

const cardInfo = {
  mechanical: {
    title: "MECHANICAL PROBLEMS",
    body: [
      'Sticking EGR valve causing rough idling and rich mixture on some engines',
      'Engine misfires caused by bad spark plugs, ignition wires, coils, distributor cap, or rotor',
      'Defective oxygen sensor or coolant temperature sensor causing a rich mixture',
      'Worn or squeaky timing belt'
    ]
  },
  electrical: {
    title: "ELECTRICAL PROBLEMS",
    body: [
      "Bad or dying car battery",
      "Interior lights, headlights, tail lights, or blinkers not working",
      "Stereo that refuses to work",
      "Power windows that don't go up or down",
      "Bad or underpowered alternator"
    ]
  },
  engine: {
    title: "ENGINE REPAIRS",
    body: [
      "Starter motor failure causing the car not to start up (no clicking heard)",
      "Misfiring or bad spark plugs",
      "Coolant mixing with oil caused by bad engine gaskets",
      "Head gasket repairs",
      "Complete engine overhaul",
      "High or fast idle speed",
      "O2 sensor causing bad gas mileage"
    ]
  },
  clutch: {
    title: "CLUTCH REPAIRS",
    body: [
      "Slipping clutch",
      "Chirping, grumbling, or squealing when pressing clutch pedal",
      "Clutch that grabs or sticks when pedal is pushed"
    ]
  },
  brake: {
    title: "BRAKE REPAIRS",
    body: [
      "Loud squealing when pressing on the brakes",
      "Brake pulsation",
      "Excessive brake dust on wheels",
      "Brake pedal that goes to the floor but doesn't engage brakes"
    ]
  },
  maintenance: {
    title: "REGULAR MAINTENANCE",
    body: [
      "Brake inspections and adjustments",
      "Brake fluid checks and flushes",
      "Comprehensive vehicle inspections",
      "Belts and hoses inspections",
      "Suspension inspections and repairs for comfortable driving and improved handling",
      "Wheel bearing checks and replacements to prevent excessive noise and vibrations"
    ]
  }
}

export default function Services() {

  return (
    <>
      <Head>
        <title>Repairs and Services</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="services">
        <div>
          <div className="splash position-relative">
            <Image src='images/car_dark_blue_hood.jpg' fill alt="dark blue car with popped hood" />

            <h1 className="p-5 text-center text-light">
              Repairs and Services
            </h1>
            <p className="splash-text text-center text-light px-5 pb-5 fs-5 mb-0 mx-auto">At Service Now Auto Repair, we pride ourselves on providing comprehensive automotive repair solutions for our valued customers. Our experienced technicians are equipped to handle a wide range of mechanical and electrical issues, ensuring your vehicle is in top condition. We offer competitive pricing and expert advice for all your automotive needs in the Vancouver area. Here are some of the common issues we diagnose and resolve. If you don't see your issue listed, don't hesitate to give us a call — we're here to help.</p>
          </div>
          

          <div className="slide-in-left slide-body ms-auto w-100"></div>

          <section className="card-section py-5 mx-auto">
            <div className="row mx-auto justify-content-center">
              <div className="col-12 col-md-6 col-lg-4">
                <ServicesCard imageSrc={`/images/car_repair_mechanical.jpg`} title={cardInfo.mechanical.title} body={cardInfo.mechanical.body} />
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <ServicesCard imageSrc={`/images/car_repair_electrical.jpg`} title={cardInfo.electrical.title} body={cardInfo.electrical.body} />
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <ServicesCard imageSrc={`/images/car_repair_clutch.jpg`} title={cardInfo.clutch.title} body={cardInfo.clutch.body} />
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <ServicesCard imageSrc={`/images/car_repair_engine.jpg`} title={cardInfo.engine.title} body={cardInfo.engine.body} />
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <ServicesCard imageSrc={`/images/car_repair_brake.jpg`} title={cardInfo.brake.title} body={cardInfo.brake.body} />
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <ServicesCard imageSrc={`/images/car_repair_maintenance.jpg`} title={cardInfo.maintenance.title} body={cardInfo.maintenance.body} />
              </div>
            </div>
          </section>

          <div className="slide-in-left slide-body ms-auto w-100"></div>


          <p className="text-light text-center p-5 fs-5 my-0">
            We use only the highest quality parts and equipment for our repairs and services, and our technicians are trained and certified to handle any issue you may have. Don't hesitate to give us a call or stop by our shop to see how we can help you get back on the road safely and confidently.
          </p>
        </div>
      </main>
    </>
  )
}