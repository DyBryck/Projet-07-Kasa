import { Link } from "react-router-dom";

const LogementCard = (props) => {
  const { logement } = props;
  return (
    <Link to={`/logement/${logement.id}`}>
      <div className="logement-card">
        <h2>{logement.title}</h2>
        <p>{logement.description}</p>
      </div>
    </Link>
  );
};

export default LogementCard;
