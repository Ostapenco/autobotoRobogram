import React from 'react';
import PropTypes from 'prop-types';

import './allPhotos.css';

const AllPhotos = ({ data, handleClick }) => {
    return (
        <ul className='allImages'>
            {data.map((photo) => (
                <div key={photo.id} className='imageContainer' >
                    <img src={photo.urls.small} alt='roboPic' onClick={() => handleClick(photo)} >
                    </img>
                </div>
            ))
            }
        </ul >

    );
}

AllPhotos.propTypes = {
    data: PropTypes.array.isRequired,
    handleClick: PropTypes.func.isRequired,
}

export default AllPhotos




