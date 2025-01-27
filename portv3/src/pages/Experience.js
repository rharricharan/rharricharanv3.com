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

    return (
        <div className='experience-wrap'>
            <div className="experience-video">
                <div className="experience-video-overlay" />
                <video src={HomeVideo} type="video/mp4" autoPlay loop muted />
            </div>
            <div className="experience-hero">
                <div className="experience-header">
                    <a className="experience-header-padding" onClick={handleHome}>
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
                    <a className="experience-header-padding">
                        <h3 className="experience-header-text">experience</h3>
                    </a>
                </div>
            </div>
        </div>
    )

}

export default Experience;