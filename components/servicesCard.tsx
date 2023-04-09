import Image from "next/image";

interface ServicesCardProps {
  imageSrc: string,
  title: string,
  body: string[]
}

export default function ServicesCard({ imageSrc, title, body}: ServicesCardProps) {

  return (
    <div className="services-card">
      <div className="card mb-3 mx-auto">
        <div className="row bg-card-blue mx-auto w-100">
          <div className="col-5 col-md-12 p-0">
            <Image src={imageSrc} width={200} height={200} className="card-img-top" alt={`image of ${title}`} />
          </div>
          <div className="col-7 col-md-12">
            <div className="card-body h-100">
              <h5 className="card-title">{title}</h5>
              <ul className="card-text">{body.map((item) => {
                return <li>{item}</li>;
              })}</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}