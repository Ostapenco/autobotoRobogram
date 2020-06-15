import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link } from 'react-router-dom';
// import { HashLink as Link } from 'react-router-hash-link';

import './allPhotos.css';

const AllPhotos = ({ data, handleClick }) => {
    return (
        <Router>
            <ul className='allImages'>
                {data.map((photo) => (
                    <Link to={photo.id}>
                        <div key={photo.id} className='imageContainer' >
                            <img src={photo.urls.small} alt='roboPic' onClick={() => handleClick(photo)} >
                            </img>
                        </div>
                    </Link>
                ))
                }
            </ul >
        </Router>
    );
}

AllPhotos.propTypes = {
    data: PropTypes.array.isRequired,
    handleClick: PropTypes.func.isRequired,
}

export default AllPhotos




