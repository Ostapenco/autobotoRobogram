import React from 'react';
import PropTypes from 'prop-types';

import './modal.css';
import ProfilePicture from '../profilePicture/profilePicture'

const Modal = ({ picture, user, closeModal }) => {
    const hashtags = [
        'Eugene',
        'Ostapenco',
        'How are you',
        'guys doing?',
        'May I join',
        'your team?'
    ]

    const doingWhat = 'Following'
    const greetings = 'Greetings from';
    const showHashtags = (string, index) => {
        return <span className='hashtag' key={index}>#{string} </span>
    }

    return (
        <div>
            <div className="modalContainer">

                <img src={picture.urls.small} alt='modalPic' className='modalContainerMainImage'></img>
                <div className='modalInfo'>
                    <div className='modalInfoHeader'>
                        <ProfilePicture />
                        <b> <span>{user}</span>
                            <span> {doingWhat} </span></b>
                    </div>
                    <div className='modalInfoMain'>
                        <b>{user}</b> {greetings} {hashtags.map((hashtag, index) => showHashtags(hashtag, index))}
                    </div>

                </div>
            </div>
            <div className="bg" onClick={closeModal} />
        </div>
    );
}

Modal.propTypes = {
    picture: PropTypes.object.isRequired,
    user: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
}

export default Modal;
