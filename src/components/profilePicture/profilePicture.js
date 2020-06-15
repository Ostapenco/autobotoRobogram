import React from 'react'

import './profilePicture.css';
import autobotLogo from '../../assets/autobot-logo.svg';

const ProfilePicture = () => {
    return (
        <div className='pictureContainer' >

            <img src='https://instagram.fkiv4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/22638771_138322276895570_2661938283868585984_n.jpg?_nc_ht=instagram.fkiv4-1.fna.fbcdn.net&_nc_ohc=n8JMiK8aTqsAX8SitLr&oh=a03f18f4b45b11734f2f95d1fd9fde6c&oe=5F0B1B59' alt='avatar' className="profilePicture" />
            <img src={autobotLogo} alt='autobotLogo' className="autobotLogo" />
        </div>
    )
}

export default ProfilePicture
