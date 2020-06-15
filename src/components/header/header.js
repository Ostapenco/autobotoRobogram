import React from 'react';

import './header.css';
import instagramLogo from '../../assets/instagram-logo.svg';
import searchIcon from '../../assets/search.svg';
import heart from '../../assets/heart.svg';
import compass from '../../assets/compass.svg';
import profileIcon from '../../assets/profileIcon.svg';

const Header = () => {
    return (
        <div className='headerContainer'>
            <header>
                <div className='logoContainer' >
                    <img src={instagramLogo} alt='logo' />
                </div>
                <div className='inputContainer'>
                    <img src={searchIcon} alt='searchIcon' />
                    <input placeholder='Search'></input>
                </div>
                <div className='iconsContainer' >
                    <img src={compass} alt='compass' className='compassIcon' />
                    <img src={heart} alt='heart' className='heartIcon' />
                    <img src={profileIcon} alt='profileIcon' className='profileIcon' />
                </div>
            </header>
        </div>
    )
}

export default Header
