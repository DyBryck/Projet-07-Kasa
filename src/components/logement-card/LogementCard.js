import { Link } from "react-router-dom";
import "./style.css";

const LogementCard = ({ logement }) => {
  return (
    <Link className="link" to={`/logement/${logement.id}`}>
      <div className="link__logement-card">
        <img
          className="link__logement-card__cover"
          src={logement.cover}
          alt={`${logement.title}`}
        />
        <div className="link__logement-card__opaque"></div>
        <h3 className="link__logement-card__title">{logement.title}</h3>
      </div>
    </Link>
  );
};

export default LogementCard;
