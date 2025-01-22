import './desktop-header.css';
import React from 'react';


const DesktopHeader = () => {
    return (
        <div className='desk-header'>
            <div className='desk-container'>
                <div className='desk-content'>
                    <div className='desk-left'>
                        <a className='logo-desk'>
                            Ryan Harricharan
                        </a>
                    </div>

                    <div className='desk-right'>
                        <a className='desk-link'>
                            <h2 className='desklink-txt'>UX</h2>
                            <p className='desklink-p'>4</p>
                        </a>
                        <a className='desk-link'>
                            <h2 className='desklink-txt'>Brand Identity</h2>
                            <p className='desklink-p'>3</p>
                        </a>
                        <a className='desk-link'>
                            <h2 className='desklink-txt'>Graphic Design</h2>
                            <p className='desklink-p'>12</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DesktopHeader;