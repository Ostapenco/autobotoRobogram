import React from 'react';
import PropTypes from 'prop-types';

import './infoBlock.css';
import ProfilePicture from '../profilePicture/profilePicture'

const InfoBlock = ({ user }) => {
    const profileName = 'EBS Integrator Transformer version';
    const profileSkillSet = [
        'MVP Autobot Builds',
        'Feature Robotic Production',
        'Decepticons Refactoring',
        'Human protection'
    ];

    const posts = 48;
    const followers = 113;
    const following = 130;

    return (
        <div className='infoBlockContainer'>
            <div className='leftBlock'>
                <ProfilePicture />
            </div>
            <div className='rightBlock'>
                <div className='statBlock' >
                    <h2>
                        {user}
                    </h2>
                    <ul className='statistics'>
                        <li><b>{posts}</b> posts
                </li>
                        <li><b>{followers}</b> followers
                </li>
                        <li><b>{following}</b> following
                </li>
                    </ul>
                </div>

                <div className='skillBlock'>
                    <h3>{profileName}
                    </h3>
                    <ul> {profileSkillSet.map(skill => (<li key={skill}>{skill}</li>))} </ul>
                </div>
            </div>


        </div>
    )
}

InfoBlock.propTypes = {
    user: PropTypes.string.isRequired,
}

export default InfoBlock
