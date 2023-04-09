import Link from "next/link"
import Image from "next/image";

const phoneNumber = "(360) 882-2817";

export default function Footer() {
  return (
    <div className="footer">
      
      <div className="container-fluid mx-0 h-100 position-relative">
        <div className="position-absolute w-100 h-100 mx-auto my-auto top-0 bottom-0 start-0 end-0">
          <Image src='/images/car_dark_blue.png' className=" background-image d-block mx-auto" fill alt="dark blue car" />
        </div>

        <div className="top-row d-flex flex-column flex-md-row justify-content-between flex-nowrap h-50 mx-auto">

          <Link href='/location' className="py-2">
            <div className="row">
              <div className="col-3">
                <Image src='/images/location_icon.svg' className="image-icon d-block mx-auto" height={50} width={50} alt="location icon" />
              </div>
              <div className="col-9 fw-bold footer-text-title text-light my-auto">Address</div>
            </div>
            <div className="row">
              <div className="col-3"></div>
              <div className='col-9 address footer-text-body lh-sm text-light'>
                8206 NE 219th St<br />
                Battle Ground, WA 98604
              </div>
            </div>
            
          </Link>

          <a href={`tel:${phoneNumber}`} className="py-2">
            <div className="row">
              <div className="col-3">
                <Image src='/images/phone_icon.svg' className="image-icon d-block mx-auto" height={50} width={50} alt="phone icon" />
              </div>
              <div className="col-9 fw-bold footer-text-title lh-1 text-light my-auto">Phone Number</div>
            </div>
            <div className="row">
              <div className="col-3"></div>
              <div className="col-9 phone-number footer-text-body text-light text-nowrap">
                {phoneNumber}
              </div>
            </div>
          </a>

          <span className="py-2">
            <div className="row">
              <div className="col-3">
                <Image src='/images/clock_icon.svg' className="image-icon d-block mx-auto" height={50} width={50} alt="clock icon" />
              </div>
              <div className="col-9 fw-bold footer-text-title text-light my-auto">Opening Hours</div>
            </div>
            <div className="row">
              <div className="col-3"></div>
              <div className="col-9 phone-number footer-text-body lh-sm text-nowrap text-light">
                Mon - Fri: 8:00 AM - 5:00 PM<br />
                Sat: By appointment only
              </div>
            </div>
          </span>
        </div>
        <div className="d-flex h-50 justify-content-end align-items-end pb-3 ">
          <div className="col-auto px-2 ">
            <Link href='https://www.facebook.com/ServiceNowAutoRepair/'>
              <Image src='/images/facebook_logo.svg' className="corp-logo" height={50} width={50} alt="clock icon" />
            </Link>
          </div>
          <div className="col-auto px-2">
            <Link href='https://www.yelp.com/biz/service-now-auto-repair-battleground'>
              <Image src='/images/yelp_logo.svg' className="corp-logo" height={50} width={50} alt="clock icon" />
            </Link>
          </div>
          <div className="col-auto px-2">
            <Link href='https://www.google.com/search?q=service+now+auto+repair+battle+ground+wa'>
              <Image src='/images/google_logo.svg' className="corp-logo" height={50} width={50} alt="clock icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}