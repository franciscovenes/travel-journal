import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="header--container">
      <FontAwesomeIcon className="header--icon" icon={faEarthAmericas} />
      <h3>my travel journal.</h3>
    </div>
  );
}
