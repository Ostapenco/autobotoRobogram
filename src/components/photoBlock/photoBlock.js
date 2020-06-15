import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useFetch } from "../../hooks/hooks";
import './photoBlock.css';
import Modal from '../modal/modal';
import AllPhotos from '../allPhotos/allPhotos';
import Spinner from '../spinner/spinner';


const PhotoBlock = ({ user }) => {

    const client_id = "9y2K6JuE31mf03xrY1tJpB1kDR0T2Tit28UD9cqUjjg"
    const query = 'transformer';
    const url = `https://api.unsplash.com/search/photos?client_id=${client_id}&query=${query}`;

    const [data, loading] = useFetch(url);
    const [openPhoto, setOpenPhoto] = useState();
    const [modalVisible, setModalVisible] = useState(false);

    const handleClick = (pic) => {
        setModalVisible(true);
        setOpenPhoto(pic);
    }

    const closeModal = () => {
        setModalVisible(false);
    }


    return (
        <div>
            {
                loading ? (
                    <Spinner />
                ) : (
                        modalVisible ? (<>
                            <Modal picture={openPhoto} user={user} closeModal={closeModal} />
                            <AllPhotos data={data} handleClick={handleClick} />
                        </>) : (
                                <AllPhotos data={data} handleClick={handleClick} />
                            ))
            }
        </div >
    );
}

PhotoBlock.propTypes = {
    user: PropTypes.string.isRequired,
}

export default PhotoBlock




