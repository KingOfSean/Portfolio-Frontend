import React from 'react';
import { Link } from 'react-router-dom';
import './Details.css';

const Details = ({ thisProject }) => {
    return (
        <div className="details">
            <h1>{thisProject.title}</h1>
            <div className="details-content">
                <div className="details-description">
                    <p>{thisProject.fullDescription}</p>
                </div>
            </div>
            <div>
                <Link to='/projects'>Back</Link>
            </div>
        </div>
    )
}

export default Details
