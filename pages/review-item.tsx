import Image from 'next/image';
import getConfig from 'next/config';
import Link from 'next/link';


interface ReviewInfo {
  logoPath: string;
  displayName: string;
  url: string;
  rating: number;
  numReviews: number;
}

export default function ReviewItem ({logoPath, displayName, url, rating, numReviews}:ReviewInfo) {
  const { publicRuntimeConfig } = getConfig();
  const basePath = publicRuntimeConfig.basePath;

  return (
    <div className="row review-item px-2 my-auto justify-content-end">
      <div className="col my-auto p-0">
        <Link href={url}>
          <Image src={logoPath} width={130} height={40} alt={`${displayName} logo`} className='d-block mx-auto' />
        </Link>
      </div>
      <h3 className="col my-auto fw-bold text-center">
        {rating}
      </h3>
      <div className="col my-auto d-flex justify-content-center">
        <Image src={`${basePath}/images/gold_star.svg`} width={30} height={30} alt="gold star" />
        <Image src={`${basePath}/images/gold_star.svg`} width={30} height={30} alt="gold star" />
        <Image src={`${basePath}/images/gold_star.svg`} width={30} height={30} alt="gold star" />
        <Image src={`${basePath}/images/gold_star.svg`} width={30} height={30} alt="gold star" />
        <Image src={`${basePath}/images/gold_star.svg`} width={30} height={30} alt="gold star" />
      </div>
      <div className="col my-auto">
        <Link href={url} className='review-count text-light'>
          {`(${numReviews} reviews)`}
        </Link>
      </div>
    </div>
  )
}