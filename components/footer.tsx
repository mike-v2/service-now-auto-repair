import Link from "next/link"
import Image from "next/image";

const phoneNumber = "(360) 882-2817";

type InfoItem = {
  src: string,
  alt: string,
  title: string,
  content: React.ReactNode,
} & (
    | { type: 'link', href: string }
    | { type: 'a', href: string }
    | { type: 'span' }
  )


const infoList: InfoItem[] = [
  {
    type: 'link',
    href: '/location',
    src: '/images/location_icon.svg',
    alt: 'location icon',
    title: 'Address',
    content: <>8206 NE 219th St<br />Battle Ground, WA 98604</>,
  },
  {
    type: 'a',
    href: `tel:${phoneNumber}`,
    src: '/images/phone_icon.svg',
    alt: 'phone icon',
    title: 'Phone Number',
    content: phoneNumber,
  },
  {
    type: 'span',
    src: '/images/clock_icon.svg',
    alt: 'clock icon',
    title: 'Hours',
    content: <>Mon - Fri: 8:00 AM - 5:00 PM<br />Sat: By appointment only</>,
  },
]



export default function Footer() {
  return (
    <section className="footer">
      <div className="container-fluid  position-relative">
        <div className="position-absolute w-100 h-100 mx-auto my-auto top-0 bottom-0 start-0 end-0">
          <Image src='/images/car_dark_blue.png' className=" background-image d-block mx-auto" fill alt="dark blue car" />
        </div>
        <div className="top-row d-flex flex-column flex-lg-row justify-content-between flex-nowrap mx-auto">
          {infoList.map((item, i) => {
            const InnerComponent = (
              <div className="row flex-nowrap pt-4">
                <div className="col-auto">
                  <Image src={item.src} className="image-icon d-block mx-auto" height={50} width={50} alt={item.alt} />
                </div>
                <div className="col-auto row ps-3">
                  <div className="col-auto col-lg-12 fw-bold fs-3 text-light lh-sm">
                    {item.title}
                  </div>
                  <div className='col-auto col-lg-12 letter-spacing-lg lh-sm text-light text-nowrap pt-2'>
                    {item.content}
                  </div>
                </div>
              </div>
            );

            switch (item.type) {
              case 'link':
                return (
                  <Link key={i} href={item.href} className="py-2 ps-2 z-front w-fit">
                    {InnerComponent}
                  </Link>
                );
              case 'a':
                return (
                  <a key={i} href={item.href} className="py-2 ps-2 z-front w-fit">
                    {InnerComponent}
                  </a>
                );
              case 'span':
                return (
                  <span key={i} className="py-2 ps-2 z-front w-fit">
                    {InnerComponent}
                  </span>
                );
              default:
                return null;
            }
          })}
        </div>
        <div className="d-flex justify-content-end align-items-end pb-3 ">
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
    </section >
  )
}