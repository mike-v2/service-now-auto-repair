import Image from 'next/image';
import getConfig from 'next/config';


interface ReviewInfo {
  logoPath: string;
  displayName: string;
  rating: number;
  numReviews: number;
}

export default function ReviewItem ({logoPath, displayName, rating, numReviews}:ReviewInfo) {
  const { publicRuntimeConfig } = getConfig();
  const basePath = publicRuntimeConfig.basePath;

  return (
    <div className="row review-item px-2 my-auto justify-content-end">
      <div className="col my-auto p-0">
        <Image src={logoPath} width={130} height={40} alt={`${displayName} logo`} className='d-block mx-auto' />
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
        {`(${numReviews} reviews)`}
      </div>
    </div>
  )
}