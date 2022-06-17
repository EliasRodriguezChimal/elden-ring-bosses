import { Link } from 'react-router-dom';
import './BossCard.css';

export const BossCard = ({
    description,
    id,
    image,
    name,
    region
}) => {
    return (
        <Link to={`/boss/${id}`} className="my-card animate__animated animate__fadeIn">
            <img src={image} className="img img-responsive" alt={name} />
            <div className="profile-name">{name}</div>
            <div className="profile-overview">
                <div className="profile-overview">
                    <div className="row">
                        <div className="col-ms-4">
                            <h3>Region: {region}</h3>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
