import React from 'react';
import './Experience.css';
import { useNavigate } from 'react-router-dom';
import HomeVideo from '../assets/homeTwo.mp4';
import Pfp from '../assets/pfp.svg';
import '@fontsource/inter'; // Defaults to weight 400
import '@fontsource/inter/400.css'; // Specific weight
import '@fontsource/inter/500.css'; // Specific weight
import '@fontsource/inter/700.css'; // Bold weight
import '@fontsource/inter/900.css'; // Black weight


function Experience() {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/');
    }

    const handleAbout = () => {
        navigate('/about');
    }

    const handleWork = () => {
        navigate('/work');
    }

    return (
        <div className='experience-wrap'>
            <div className="experience-video">
                <div className="experience-video-overlay" />
                <video src={HomeVideo} type="video/mp4" autoPlay loop muted />
            </div>
            <div className="experience-hero">
                <div className="experience-header">
                    <a className="experience-header-padding home-tag" onClick={handleHome}>
                        <h3 className="experience-header-text">home</h3>
                    </a>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_109_633)">
                            <path d="M8.78145 7.99999L5.48145 4.69999L6.42411 3.75732L10.6668 7.99999L6.42411 12.2427L5.48145 11.3L8.78145 7.99999Z" fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_109_633">
                            <rect width="16" height="16" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <a className="experience-header-padding experience-tag">
                        <h3 className="experience-header-text">experience</h3>
                    </a>
                </div>
                <div className="experience-content">
                    <div className='experience-content-center'>
                        <div className='experience-content-title'>
                            <h3 className='experience-content-title-text'>experience</h3>
                        </div>
                        <div className='experience-content-container'>
                            <div className='experience-content-item'>
                                <div className='experience-content-item-content'>
                                    <h3 className='primary-txt'>awwwards.</h3>
                                </div>
                                <div className='experience-content-item-content'>
                                    <h3 className='secondary-txt'>jury member</h3>
                                </div>
                                <div className='experience-content-item-content'>
                                    <h3 className='secondary-txt'>2024 - present</h3>
                                </div>
                            </div>
                            <div className='experience-content-item'>
                                <div className='experience-content-item-content'>
                                    <h3 className='primary-txt'>arro™</h3>
                                </div>
                                <div className='experience-content-item-content'>
                                    <h3 className='secondary-txt'>co-founder</h3>
                                </div>
                                <div className='experience-content-item-content'>
                                    <h3 className='secondary-txt'>2024 - present</h3>
                                </div>
                            </div>
                            <div className='experience-content-item'>
                                <div className='experience-content-item-content'>
                                    <h3 className='primary-txt'>smartstop</h3>
                                </div>
                                <div className='experience-content-item-content'>
                                    <h3 className='secondary-txt'>product designer</h3>
                                </div>
                                <div className='experience-content-item-content'>
                                    <h3 className='secondary-txt'>2023 - 2024</h3>
                                </div>
                            </div>
                            <div className='experience-content-item'>
                                <div className='experience-content-item-content'>
                                    <h3 className='primary-txt'>lumina studio®</h3>
                                </div>
                                <div className='experience-content-item-content'>
                                    <h3 className='secondary-txt'>chief executive officer</h3>
                                </div>
                                <div className='experience-content-item-content'>
                                    <h3 className='secondary-txt'>2021 - 2024</h3>
                                </div>
                            </div>
                            <div className='experience-content-item'>
                                <div className='experience-content-item-content'>
                                    <h3 className='primary-txt'>rh design</h3>
                                </div>
                                <div className='experience-content-item-content'>
                                    <h3 className='secondary-txt'>freelance designer</h3>
                                </div>
                                <div className='experience-content-item-content'>
                                    <h3 className='secondary-txt'>2017 - 2023</h3>
                                </div>
                            </div>
                            <div className='experience-content-item'>
                                <div className='experience-content-item-content'>
                                    <h3 className='primary-txt'>our next energy</h3>
                                </div>
                                <div className='experience-content-item-content'>
                                    <h3 className='secondary-txt'>senior ux designer</h3>
                                </div>
                                <div className='experience-content-item-content'>
                                    <h3 className='secondary-txt'>2023 - 2023</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-footer">
                    <div className="home-footer-content">
                        <div className="home-footer-name">
                            <img src={Pfp} />
                            <div className="home-footer-name-text">
                                <h3 className="home-footer-name-text-name">Ryan Harricharan</h3>
                                <h4 className="home-footer-name-text-title">Product Designer</h4>
                            </div>
                        </div>
                        <div className="home-footer-menu">
                            <a className="menu-link-work" onClick={handleWork}>
                                <h3 className="menu-link-text">Work</h3>
                            </a>
                            <a className="menu-link-about" onClick={handleAbout}>
                                <h3 className="menu-link-text">About</h3>
                            </a>
                            <a className="menu-link-experience">
                                <h3 className="menu-link-text">Experience</h3>
                            </a>
                        </div>
                    </div>
                    <div className="home-footer-copyright">
                        <h3 className="home-footer-copyright-text">© 2024 Ryan Harricharan</h3>
                        <div className="home-footer-copyright-menu">
                            <a className="copyright-menu-link" href="https://www.linkedin.com/in/rharricharan/" target="_blank">
                                <h3 className="copyright-menu-link-text">LinkedIn</h3>
                            </a>
                            <a className="copyright-menu-link" href="https://www.dribbble.com/RyanHarricharan/" target="_blank">
                                <h3 className="copyright-menu-link-text">Dribbble</h3>
                            </a>
                            <a className="copyright-menu-link" href="https://www.dribbble.com/RyanHarricharan/" target="_blank">
                                <h3 className="copyright-menu-link-text">Email</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Experience;