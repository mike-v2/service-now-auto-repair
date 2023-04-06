import Image from "next/image";

interface HomeCardProps {
  imageSrc: string,
  title: string,
  body: string
}

export default function HomeCard({ imageSrc, title, body }: HomeCardProps) {

  return (
    <div>
      <div className="card">
        <Image className="card-img-top" src={imageSrc} width={200} height={200} alt="Engine" />
        <div className="card-body text-center bg-card-blue">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{body}</p>
          <a href="#" className="card-btn btn btn-primary">Learn More</a>
        </div>
      </div>
    </div>
  )
}