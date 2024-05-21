import { Link } from "react-router-dom";
import "./style.css";

const LogementCard = (props) => {
  const { logement } = props;
  return (
    <Link className="link" to={`/logement/${logement.id}`}>
      <div className="link__logement-card">
        <img
          className="link__logement-card__cover"
          src={logement.cover}
          alt={`${logement.title}`}
        />
        <h3 className="link__logement-card__title">{logement.title}</h3>
      </div>
    </Link>
  );
};

export default LogementCard;
