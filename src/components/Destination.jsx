import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
export default function Destination({
  title,
  location,
  googleMapsUrl,
  startDate,
  endDate,
  description,
  imageUrl,
}) {
  return (
    <div className="destination">
      <img className="destination--img" src={imageUrl} />
      <div className="destination--location">
        <FontAwesomeIcon className="location--icon" icon={faLocationDot} />
        <p>{location}</p>
        <a href={googleMapsUrl} target="_blank" rel="noreferrer">
          View on Google Maps
        </a>
      </div>
      <h1 className="destination--title">{title}</h1>
      <h4 className="destination--dates">
        {startDate} - {endDate}
      </h4>
      <p className="destination--descr">{description}</p>
    </div>
  );
}
