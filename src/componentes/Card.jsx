import React from 'react';

const Card = ({url, title, description}) => {
    return (
        <div className='card bg-light'>
            <img src={url} className ='image' alt={title} />
                <div className ='card-body'>
                    <h5 className ='card-title'>{title}</h5>
                    <p className ='card-text text-muted'>{description}</p>
                </div>
        </div>
    );
};

export default Card;