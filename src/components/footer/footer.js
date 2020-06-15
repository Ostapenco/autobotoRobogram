import React from 'react';

import './footer.css';
import autobotLogo from '../../assets/autobot-logo.svg';

const Footer = () => {
    return (
        <div className='footerContainer'>
            <footer>
                <div className='outerContainer'>
                    <div className='innerContainer'>
                        <div>
                            <img src={autobotLogo} alt='logo' />
                            <p style={{ width: '250px', fontSize: '16px', marginTop: '12px' }}>
                                Autobots is explained to be the short version of the title Autonomous Robotic Organisms.
              </p>
                        </div>
                        <div>
                            <h3>Menu</h3>
                            <ul style={{ margin: '20px' }} >
                                <li>
                                    Optimus Prime
                                </li>
                                <li>
                                    Bumblebee
                               </li>
                                <li>
                                    Ratchet
                               </li>
                                <li>
                                    Ironhide
                                </li>
                                <li>
                                    Jazz
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3>Contacts</h3>
                            <ul style={{ margin: '20px' }}>
                                <li>+373 69 417014</li>
                                <li>evgheniostapenco@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div style={{ position: 'absolute', bottom: '0' }}>
                        <p style={{ fontSize: '12px', marginBottom: '5px' }}>
                            Copyright © 2020 Eugene Ostapenco. All rights reserved.
            </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
