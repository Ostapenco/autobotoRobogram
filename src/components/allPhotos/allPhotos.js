import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import './allPhotos.css';

const AllPhotos = ({ data, handleClick }) => {
    const size = '&w=700&h=657&fit=crop';

    return (
        <Router>
            <ul className='allImages'>
                {data.map((photo) => (
                    <Link key={photo.id} to={photo.id}>
                        <div className='imageContainer' >
                            <img src={photo.urls.raw.concat(size)} alt='roboPic' onClick={() => handleClick(photo.urls.raw.concat(size))} >
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




