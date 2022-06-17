import React from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useFetchBossesById } from '../hooks/useFetchBossesById';

export const BossPage = () => {
    const { bossId } = useParams();
    const {data} = useFetchBossesById(bossId);
    const navigate = useNavigate();

    const handleReturn = () => {
        navigate(-1);  //navigate not only receives strings, also accepts -1 as value to return to previous page
    }

    if (!data) {
        return <Navigate to='/' />
    }

    const {
        description,
        drops,
        id,
        image,
        name,
        region
    } = data;

    drops.map(drop => console.log(drop));
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={image}
                    alt={name}
                    className="img-thumbnail img-thumbnail-border-width-0 animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8">
                <h3>{name}</h3>

                <ul className="list-group list-group-flush animate__animated animate__fadeIn list-group-mine mt-5">
                    <li className="list-group-item"><b>Description:</b> {description}</li>
                    <li className="list-group-item"><b>Drops:</b> {drops}</li>
                    <li className="list-group-item"><b>Region:</b> {region}</li>
                </ul>
                
                <button
                    className="btn btn-outline-info mt-3"
                    onClick={handleReturn}
                >
                    Return
                </button>
            </div>
        </div>
    )
}
