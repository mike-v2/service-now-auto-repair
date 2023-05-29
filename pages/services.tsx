import Head from "next/head"
import Image from "next/image"

const cardInfo = [
  {
    imagePath: '/images/car_repair_mechanical.jpg',
    title: "MECHANICAL PROBLEMS",
    body: [
      'Sticking EGR valve causing rough idling and rich mixture on some engines',
      'Engine misfires caused by bad spark plugs, ignition wires, coils, distributor cap, or rotor',
      'Defective oxygen sensor or coolant temperature sensor causing a rich mixture',
      'Worn or squeaky timing belt'
    ]
  },
  {
    imagePath: '/images/car_repair_electrical.jpg',
    title: "ELECTRICAL PROBLEMS",
    body: [
      "Bad or dying car battery",
      "Interior lights, headlights, tail lights, or blinkers not working",
      "Stereo that refuses to work",
      "Power windows that don't go up or down",
      "Bad or underpowered alternator"
    ]
  },
  {
    imagePath: '/images/car_repair_engine.jpg',
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
  {
    imagePath: '/images/car_repair_clutch.jpg',
    title: "CLUTCH REPAIRS",
    body: [
      "Gear slipping",
      "Difficulty in shifting gears",
      "Chirping, grumbling, or squealing when pressing clutch pedal",
      "Clutch that grabs or sticks when pedal is pushed",
      "Frequent stalling of the vehicle, particularly when starting from a standstill"
    ]
  },
  {
    imagePath: '/images/car_repair_brake.jpg',
    title: "BRAKE REPAIRS",
    body: [
      "Loud squealing when pressing on the brakes",
      "Brake pulsation",
      "Excessive brake dust on wheels",
      "Brake pedal that goes to the floor but doesn't engage brakes"
    ]
  },
  {
    imagePath: '/images/car_repair_maintenance.jpg',
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
]

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
            <Image src='/images/mechanic_car_dark.jpg' fill alt='mechanic working on a car' />
            <h1 className="p-5 text-center text-light">
              Repairs and Services
            </h1>
            <p className="splash-text text-center text-light px-5 pb-5 fs-5 mb-0 mx-auto" data-aos="fade-up">At Service Now Auto Repair, we pride ourselves on providing comprehensive automotive repair solutions for our valued customers. Our experienced technicians are equipped to handle a wide range of mechanical and electrical issues, ensuring your vehicle is in top condition. We offer competitive pricing and expert advice for all your automotive needs in the Vancouver area. Here are some of the common issues we diagnose and resolve. If you don't see your issue listed, don't hesitate to give us a call — we're here to help.</p>
          </div>

          <div className="slide-in-left slide-body ms-auto w-100"></div>

          <section className="card-section py-5 mx-auto">
            <div className="row mx-auto justify-content-center" data-aos="fade-up-right">
              {cardInfo && cardInfo.map((info) => {
                return (
                  <div className="col-12 col-lg-6 d-flex p-4" key={info.title}>
                    <div className="card mb-3 mx-auto">
                      <div className="row bg-card-blue mx-auto w-100 h-100">
                        <div className="col-12 col-md-5 p-0 card-img-container">
                          <Image src={info.imagePath} width={200} height={200} className="card-img-top h-100" alt={`image of ${info.title}`} />
                        </div>
                        <div className="col-12 col-md-7 ">
                          <div className="card-body ">
                            <h5 className="card-title">{info.title}</h5>
                            <ul className="card-text">{info.body.map((item) => {
                              return <li key={item.slice(0, 15)}>{item}</li>;
                            })}</ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          <div className="slide-in-left slide-body ms-auto w-100"></div>

          <p className="text-light text-center p-5 fs-5 my-0 splash-text mx-auto" data-aos="fade-up">
            We use only the highest quality parts and equipment for our repairs and services, and our technicians are trained and certified to handle any issue you may have. Don't hesitate to give us a call or stop by our shop to see how we can help you get back on the road safely and confidently.
          </p>
        </div>
      </main>
    </>
  )
}