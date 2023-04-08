import Link from "next/link"
import Image from "next/image";

const phoneNumber = "(360) 882-2817";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container-fluid mx-0 h-100">
        <div className="top-row row flex-nowrap h-50  mx-auto">
          <Link href='/location' className="col-4 d-inline-flex flex-nowrap">
            <div className='pe-2'>
              <span className="center-helper"></span>
              <Image src='/images/location_icon.svg' className="image-icon" height={50} width={50} alt="location icon"/>
            </div>
            <div className="d-flex flex-column justify-content-center text-dark">
              <div className="fw-bold footer-text-title pb-1">Address</div>
              <div className='address footer-text-body lh-sm'>
                8206 NE 219th St<br />
                Battle Ground, WA 98604
              </div>
            </div>
          </Link>

          <a href={`tel:${phoneNumber}`} className="col-3 d-inline-flex flex-nowrap ">
            <div className="pe-2">
              <span className="center-helper"></span>
              <Image src='/images/phone_icon.svg' className="image-icon" height={50} width={50} alt="phone icon" />
            </div>
            <div className="d-flex flex-column justify-content-center text-dark">
              <div className="fw-bold footer-text-title lh-1 pb-2">Phone Number</div>
              <div className="phone-number footer-text-body">
                {phoneNumber}
              </div>
            </div>
          </a>

          <span className="col-5 d-inline-flex flex-nowrap ">
            <div className="pe-2">
              <span className="center-helper"></span>
              <Image src='/images/clock_icon.svg' className="image-icon" height={50} width={50} alt="clock icon" />
            </div>
            <div className="d-flex flex-column justify-content-center text-dark">
              <div className="fw-bold footer-text-title pb-1">Opening Hours</div>
              <div className="phone-number footer-text-body lh-sm text-nowrap">
                Mon - Fri: 8:00 AM - 5:00 PM<br />
                Sat: By appointment only
              </div>
            </div>
          </span>
        </div>
        <div className="row h-50 justify-content-end align-items-end pb-3">
          <div className="col-auto">
            <Link href='https://www.facebook.com/ServiceNowAutoRepair/'>
              <Image src='/images/facebook_logo.svg' className="corp-logo" height={50} width={50} alt="clock icon" />
            </Link>
          </div>
          <div className="col-auto">
            <Link href='https://www.yelp.com/biz/service-now-auto-repair-battleground'>
              <Image src='/images/yelp_logo.svg' className="corp-logo" height={50} width={50} alt="clock icon" />
            </Link>
          </div>
          <div className="col-auto">
            <Link href='https://www.google.com/search?q=service+now+auto+repair+battle+ground+wa'>
              <Image src='/images/google_logo.svg' className="corp-logo" height={50} width={50} alt="clock icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}