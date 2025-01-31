import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';
import HomeVideo from '../assets/homeTwo.mp4';
import Pfp from '../assets/pfp.svg';
import { animate, motion } from 'framer-motion';
import '@fontsource/inter'; // Defaults to weight 400
import '@fontsource/inter/400.css'; // Specific weight
import '@fontsource/inter/500.css'; // Specific weight
import '@fontsource/inter/700.css'; // Bold weight
import '@fontsource/inter/900.css'; // Black weight

function Home() {
    const navigate = useNavigate();

    const handleExperience = () => {
        navigate('/experience');
    }

    const handleAbout = () => {
        navigate('/about');
    }

    const handleWork = () => {
        navigate('/work');
    }

    const pageVariants = {
        initial: { opacity: 0.5 },
        animate: { opacity: 1, x: 0, transition: {  duration: 0.3 } },
        exit: { opacity: 0, x: -100, transition: { duration: 0.3 } }
    };

    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <div className="home-wrap">
                <div className="home-video">
                    <div className="home-video-overlay" />
                    <video src={HomeVideo} type="video/mp4" autoPlay loop muted />
                </div>
                <div className="home-hero">
                    <div className="home-header">
                        <div className="home-header-padding">
                            <h3 className="home-header-text">Home</h3>
                        </div>
                    </div>
                    <div className="home-content">
                        <h1 className="home-content-title">An award winning Multidisplinary Designer and <span className="highlight">Awwwards</span> Jury Member crafting interfaces that are useful and feel natural.</h1>
                        <h2 className="home-content-subtitle">Previously designed at Smartstop® and has worked for BMW, Verizon and Our Next Energy®</h2>
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
                                <a className="menu-link-experience" onClick={handleExperience}>
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
        </motion.div>
    )
}

export default Home;